import { UserInfo } from "#/userInfo/domain";
import { createUser } from "#/userInfo/createUser";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { Controller, useForm } from "react-hook-form";
import { Button, Form, Input, Message, toaster } from "rsuite";
import { createWallet } from "#/wallet/createWallet";
import { useContext, useEffect } from "react";
import { FirebaseContext } from "@/FirebaseContext";

export const Route = createFileRoute("/sign-up")({
  component: RouteComponent,
});
function RouteComponent() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInfo>();
  const { uid, userInfo } = useContext(FirebaseContext);
  const { mutateAsync } = useMutation({
    mutationKey: ["user"],
    mutationFn: (userInfo: UserInfo & { uid: string }) =>
      Promise.all([
        createUser(userInfo),
        createWallet({ uid: userInfo.uid, amount: 0 }),
      ]),
  });
  const onSubmit = async (data: UserInfo) => {
    await mutateAsync({
      ...data,
      uid: uid!,
    });
    toaster.push(
      <Message showIcon type="info" closable>
        회원가입이 완료됐어요.
      </Message>
    );
    router.history.push("/");
  };
  useEffect(() => {
    if (!uid) {
      router.history.push("/sign-in");
      toaster.push(
        <Message showIcon type="warning" closable>
          카카오톡 인증이 필요해요.
        </Message>
      );
    }
  }, [uid, router]);
  useEffect(() => {
    if (userInfo?.name) {
      router.history.push("/");
      toaster.push(
        <Message showIcon type="info" closable>
          이미 가입했어요. 가입페이지는 필요없답니다.
        </Message>
      );
    }
  }, [userInfo, router]);
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="name"
            control={control}
            rules={{
              required: { value: true, message: "이름을 입력하세요" },
              minLength: {
                value: 2,
                message: "이름은 최소 2글자 이상이어야 합니다",
              },
            }}
            render={({ field }) => (
              <Input onChange={(value: string) => field.onChange(value)} />
            )}
          />
          {errors.name?.message && <p>{errors.name.message}</p>}
        </div>
        <div>
          <Controller
            name="cellPhone"
            control={control}
            rules={{
              required: { value: true, message: "휴대폰 번호를 입력하세요" },
              pattern: {
                value: /^\d{3}-\d{3,4}-\d{4}$/,
                message: "유효한 휴대폰 번호를 입력하세요",
              },
            }}
            render={({ field }) => (
              <Input onChange={(value: string) => field.onChange(value)} />
            )}
          />
          {errors.cellPhone?.message && <p>{errors.cellPhone.message}</p>}
        </div>
        <Button type="submit">회원가입 완료하기</Button>
      </Form>
    </>
  );
}
