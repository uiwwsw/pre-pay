import { createStoreRequest } from "#/store/createStoreRequest";
import { Store } from "#/store/domain";
import { FirebaseContext } from "@/FirebaseContext";
import { SequentialAnimation } from "@/SequentialAnimation";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Form, Input, Message, toaster } from "rsuite";

export const Route = createFileRoute("/auth/request")({
  component: RouteComponent,
});

function RouteComponent() {
  const { user } = useContext(FirebaseContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Omit<Store, "ownerId">>();
  const { mutateAsync } = useMutation({
    mutationKey: ["create-store"],
    mutationFn: (store: Store) => createStoreRequest(store),
  });
  const onSubmit = async (data: Omit<Store, "ownerId">) => {
    if (!user?.uid) return;
    await mutateAsync({
      ...data,
      ownerId: user?.uid,
    });
    toaster.push(
      <Message showIcon type="info" closable>
        상점을 추가를 요청했습니다.
      </Message>
    );
    reset();
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <SequentialAnimation>
        <div>
          <Controller
            name="name"
            control={control}
            rules={{
              required: { value: true, message: "상호명을 입력하세요" },
            }}
            render={({ field }) => (
              <Input
                placeholder="상호명 입력해주세요."
                onChange={(value: string) => field.onChange(value)}
              />
            )}
          />
          {errors.name?.message && <p>{errors.name.message}</p>}
        </div>
        <div>
          <Controller
            name="address"
            control={control}
            rules={{
              required: { value: true, message: "주소를 입력하세요" },
            }}
            render={({ field }) => (
              <Input
                placeholder="주소를 입력해주세요."
                onChange={(value: string) => field.onChange(value)}
              />
            )}
          />
          {errors.address?.message && <p>{errors.address.message}</p>}
        </div>

        <Button className="w-full" type="submit">
          상점 추가 요청하기
        </Button>
      </SequentialAnimation>
    </Form>
  );
}
