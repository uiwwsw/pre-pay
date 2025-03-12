import { createStore } from "#/store/createStore";
import { Store } from "#/store/domain";
import { getUsers } from "#/user/getUsers";
import { SequentialAnimation } from "@/SequentialAnimation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Controller, useForm } from "react-hook-form";
import { Button, Form, Input, Message, SelectPicker, toaster } from "rsuite";

export const Route = createFileRoute("/admin/store")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Store>();
  const { mutateAsync } = useMutation({
    mutationKey: ["create-store"],
    mutationFn: (store: Store) => createStore(store),
  });
  const onSubmit = async (data: Store) => {
    await mutateAsync(data);
    toaster.push(
      <Message showIcon type="info" closable>
        상점을 추가했습니다.
      </Message>
    );
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
        <div>
          <Controller
            name="ownerId"
            control={control}
            rules={{
              required: { value: true, message: "오너의 폰번호를 입력하세요" },
            }}
            render={({ field }) => (
              <SelectPicker
                data={
                  data?.map((x) => ({ value: x.id, label: x.cellPhone })) ?? []
                }
                placeholder="오너의 폰번호를 입력해주세요."
                onChange={(option: string | null) => field.onChange(option)}
              />
            )}
          />
          {errors.address?.message && <p>{errors.address.message}</p>}
        </div>
        <Button className="w-full" type="submit">
          상점 추가하기
        </Button>
      </SequentialAnimation>
    </Form>
  );
}
