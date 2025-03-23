import { Tiding } from "#/tiding/domain";
import { updateTiding } from "#/tiding/updateTiding";
import { SequentialAnimation } from "@/SequentialAnimation";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Timestamp } from "firebase/firestore";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Message,
  toaster,
} from "rsuite";

export const Route = createFileRoute("/admin/notice")({
  component: RouteComponent,
});

function RouteComponent() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Tiding>();
  const { mutateAsync } = useMutation({
    mutationKey: ["update-tiding"],
    mutationFn: (tiding: Tiding) => updateTiding(tiding),
  });
  const onSubmit = async (data: Tiding) => {
    await mutateAsync(data);
    console.log(data);
    toaster.push(
      <Message showIcon type="info" closable>
        공지사항을 추가했습니다.
      </Message>
    );
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <SequentialAnimation>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <Input
              placeholder="제목을 입력해주세요."
              onChange={(value: string) => field.onChange(value)}
            />
          )}
        />
        <div>
          <Controller
            name="text"
            control={control}
            rules={{
              required: { value: true, message: "공지사항을 입력하세요" },
            }}
            render={({ field }) => (
              <Input
                placeholder="공지사항을 입력해주세요."
                onChange={(value: string) => field.onChange(value)}
              />
            )}
          />
          {errors.text?.message && <p>{errors.text.message}</p>}
        </div>
        <Controller
          name="startDt"
          control={control}
          render={({ field }) => (
            <DatePicker
              placeholder="노출 시작일을 입력해주세요."
              onSelect={(value: Date) =>
                field.onChange(Timestamp.fromDate(value))
              }
            />
          )}
        />
        <Controller
          name="endDt"
          control={control}
          render={({ field }) => (
            <DatePicker
              placeholder="노출 종료일을 입력해주세요."
              onSelect={(value: Date) =>
                field.onChange(Timestamp.fromDate(value))
              }
            />
          )}
        />
        <Controller
          name="hideClose"
          control={control}
          render={({ field }) => (
            <Checkbox
              onChange={(_: unknown, checked: boolean) => {
                console.log(checked);
                field.onChange(checked);
              }}
            >
              닫힘 버튼 숨기기
            </Checkbox>
          )}
        />

        <Button type="submit">공지사항 추가하기</Button>
      </SequentialAnimation>
    </Form>
  );
}
