import { getStore } from "#/store/getStore";
import { createWallet } from "#/wallet/createWallet";
import { Wallet } from "#/wallet/domain";
import { FirebaseContext } from "@/FirebaseContext";
import { SequentialAnimation } from "@/SequentialAnimation";
import { useStorage } from "@/useStorage";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createFileRoute,
  useLocation,
  useRouter,
} from "@tanstack/react-router";
import { useContext, useMemo, useState } from "react";
import { Button, Message, Modal, toaster } from "rsuite";
// const { Column, HeaderCell, Cell } = Table;

export const Route = createFileRoute("/store/$storeId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { history } = useRouter();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const storeId = useMemo(
    () => location.pathname.split("/").pop() ?? "",
    [location]
  );
  const { user } = useContext(FirebaseContext);
  const { myWallets } = useContext(FirebaseContext);
  const { data, isLoading } = useQuery({
    queryKey: ["store", storeId],
    queryFn: () => getStore(storeId),
    staleTime: Infinity,
    gcTime: Infinity,
    enabled: !!storeId,
  });
  const { mutateAsync } = useMutation({
    mutationKey: ["wallet", storeId],
    mutationFn: (wallet: Wallet) => createWallet(wallet),
  });
  const currentWallet = useMemo(
    () => myWallets.find((wallet) => wallet.storeId === storeId),
    [myWallets, storeId]
  );
  const walletName = useMemo(() => `${data?.name}의 지갑`, [data]);
  const handleCreateWallet = async () => {
    if (!user || !data) return;
    await mutateAsync({
      amount: 0,
      name: walletName,
      storeId,
      storeName: data.name,
      uid: user.uid,
    });
    queryClient.invalidateQueries({ queryKey: ["my-wallets"] });
    history.push(`/auth/order/${storeId}`);
  };
  const handleClose = () => setOpen(false);
  const handleStart = () => {
    if (!user?.uid) {
      return history.push("/sign-in");
    }
    setOpen(true);
  };
  const handleApply = () => history.push(`/auth/order/${storeId}`);
  const handleSubOrder = () => {
    return toaster.push(
      <Message showIcon type="warning" closable>
        개발중입니다.
      </Message>
    );
    history.push(`/auth/store/sub/${storeId}`);
  };
  useStorage("from", location.pathname);
  // if (isPending) return <Loader className="justify-self-center !flex" />;
  return (
    <>
      <Modal backdrop="static" open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>[{data?.name}]에 지갑을 만들거에요.</Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-black">
          [{walletName}]이라고 만들거에요.
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCreateWallet} appearance="primary">
            생성하기
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            취소
          </Button>
        </Modal.Footer>
      </Modal>
      <SequentialAnimation isLoading={isLoading}>
        <dl>
          <dt>상호</dt>
          <dd>{data?.name}</dd>
        </dl>
        <dl>
          <dt>주소</dt>
          <dd>{data?.address}</dd>
        </dl>

        {currentWallet ? (
          <Button onClick={handleApply} appearance="primary" color="violet">
            주문하러 가기
          </Button>
        ) : (
          <Button onClick={handleStart} appearance="primary" color="red">
            시작하기
          </Button>
        )}
        <Button onClick={handleSubOrder} appearance="primary" color="green">
          실시간 주문 받기
        </Button>
      </SequentialAnimation>
    </>
  );
}
