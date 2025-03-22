import { Log } from "#/log/domain";
import { pay } from "#/log/pay";
import { getStore } from "#/store/getStore";
import { updateWallet } from "#/wallet/updateWallet";
import { FirebaseContext } from "@/FirebaseContext";
import { SequentialAnimation } from "@/SequentialAnimation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute, useLocation } from "@tanstack/react-router";

import { useContext, useMemo, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Form,
  Input,
  InputGroup,
  Message,
  Modal,
  toaster,
} from "rsuite";

export const Route = createFileRoute("/auth/order/$storeId")({
  component: RouteComponent,
});

interface FormState {
  amount: number | string;
}
function RouteComponent() {
  const location = useLocation();
  const storeId = useMemo(
    () => location.pathname.split("/").pop() ?? "",
    [location]
  );
  const formstateRef = useRef<FormState>();
  const { user, myWallets } = useContext(FirebaseContext);
  const currentWallet = useMemo(
    () => myWallets?.find((wallet) => wallet.storeId === storeId),
    [myWallets, storeId]
  );
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const { data: storeData, isLoading } = useQuery({
    queryKey: ["store", storeId],
    queryFn: () => getStore(storeId),
    enabled: !!storeId,
  });
  const { mutate } = useMutation({
    mutationKey: ["order", storeId],
    mutationFn: ({ walletAmount, ...order }: Log & { walletAmount: number }) =>
      Promise.all([
        updateWallet({
          id: order.walletId,
          amount: walletAmount - order.amount,
        }),
        pay(order),
      ]),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormState>({ defaultValues: { amount: "" } });
  const onOpen = (data: FormState) => {
    formstateRef.current = data;

    setOpen(true);
  };
  const onSubmit = async (data: FormState) => {
    if (!storeData || !currentWallet || !user) return;
    mutate({
      walletAmount: currentWallet.amount,
      amount: +data.amount,
      confirm: false,
      storeName: storeData.name,
      storeId,
      walletName: currentWallet.name,
      walletId: currentWallet.id,
      uid: user.uid,
    });
    setOpen(false);
    reset();
    toaster.push(
      <Message showIcon type="info" closable>
        {data.amount}를 지불했어요
      </Message>
    );
    queryClient.invalidateQueries({ queryKey: ["my-wallets"] });

    // setOpen(true);
  };
  const ableAmount = useMemo(() => currentWallet?.amount ?? 0, [currentWallet]);
  // console.log(walletsData?.[0]?.created.toDate());
  // const diaplayAmount = useDebounce(numberToKorean(watch("amount")), 1000);
  // useEffect(() => {
  //   if (!currentWallet && storeId) router.history.back();
  // }, [currentWallet, storeId]);
  return (
    <>
      <Modal backdrop="static" open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>
            [{storeData?.name}]에 사용할 금액은{" "}
            {(+(formstateRef.current?.amount ?? "0")).toLocaleString()}원
            입니다.
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-black">지불하시겠습니까?</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit(onSubmit)} appearance="primary">
            지불하기
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            취소
          </Button>
        </Modal.Footer>
      </Modal>
      <Form>
        <SequentialAnimation isLoading={isLoading}>
          <p>사용 가능한 금액: {ableAmount.toLocaleString()}</p>
          <div>
            <Controller
              name="amount"
              control={control}
              rules={{
                required: { value: true, message: "금액을 입력해주세요." },
                validate: (v) =>
                  (+v <= ableAmount && +v > 0) || "금액을 확인해주세요.",
              }}
              render={({ field }) => (
                <InputGroup inside>
                  <InputGroup.Addon>₩</InputGroup.Addon>
                  <Input
                    placeholder="0"
                    value={field.value}
                    type="number"
                    onChange={(value: string) => field.onChange(value)}
                  />
                  <InputGroup.Addon>원</InputGroup.Addon>
                </InputGroup>
              )}
            />
            {errors.amount?.message && <p>{errors.amount?.message}</p>}
          </div>
          <Button
            onClick={handleSubmit(onOpen)}
            appearance="primary"
            color="violet"
          >
            주문시작
          </Button>
        </SequentialAnimation>
      </Form>
    </>
  );
}
