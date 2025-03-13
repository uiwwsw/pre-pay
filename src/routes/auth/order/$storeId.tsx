import { getStore } from "#/store/getStore";
import { getWallet } from "#/wallet/getWallet";
import { FirebaseContext } from "@/FirebaseContext";
import { SequentialAnimation } from "@/SequentialAnimation";
import { useQueries } from "@tanstack/react-query";
import { createFileRoute, useLocation } from "@tanstack/react-router";
import { useContext, useMemo, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Form, Input, InputGroup, Modal } from "rsuite";

export const Route = createFileRoute("/auth/order/$storeId")({
  component: RouteComponent,
});

interface FormState {
  amount: number;
}
function RouteComponent() {
  const location = useLocation();
  const storeId = useMemo(
    () => location.pathname.split("/").pop() ?? "",
    [location]
  );
  const formstateRef = useRef<FormState>();
  const { user } = useContext(FirebaseContext);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [{ data: storeData }, { data: walletsData }] = useQueries({
    queries: [
      {
        queryKey: ["store", storeId],
        queryFn: () => getStore(storeId),
        enabled: !!storeId,
      },
      {
        queryKey: ["wallet", storeId],
        queryFn: () => getWallet(user!.uid, storeId),
        enabled: !!storeId && !!user?.uid,
      },
    ],
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>();
  const onOpen = (data: FormState) => {
    formstateRef.current = data;

    setOpen(true);
  };
  const onSubmit = async (data: FormState) => {
    console.log("!@!@!#$!@$#$@", data);
    // setOpen(true);
  };
  const ableAmount = useMemo(
    () => walletsData?.reduce((acc, wallet) => wallet.amount + acc, 0) ?? 0,
    [walletsData]
  );
  // console.log(walletsData?.[0]?.created.toDate());
  // const diaplayAmount = useDebounce(numberToKorean(watch("amount")), 1000);
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
        <SequentialAnimation>
          <p>사용 가능한 금액: {ableAmount.toLocaleString()}</p>
          <div>
            <Controller
              name="amount"
              control={control}
              rules={{
                validate: (v) =>
                  (v <= ableAmount && v > 0) || "충전된 금액이 부족해요",
              }}
              render={({ field }) => (
                <InputGroup inside>
                  <InputGroup.Addon>₩</InputGroup.Addon>
                  <Input
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
