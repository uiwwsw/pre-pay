import { numberToKorean } from "%/currency";
import { getDataWithId } from "%/storage";
import { SequentialAnimation } from "@/SequentialAnimation";
import { useDebounce } from "@/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Form,
  Input,
  InputGroup,
  InputNumber,
  MaskedInput,
  Modal,
  Table,
} from "rsuite";

export const Route = createFileRoute("/auth/order/$storeId")({
  component: RouteComponent,
});

interface FormState {
  amount: number;
}
function RouteComponent() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const { data } = useQuery({
    queryKey: ["store", location.pathname],
    queryFn: () => getDataWithId("store", location.pathname),
    enabled: !!location.pathname,
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>();
  const onSubmit = async (data: FormState) => {
    console.log(data, "djawldkawdaw");
  };
  // const diaplayAmount = useDebounce(numberToKorean(watch("amount")), 1000);
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Modal.Body>사용할 금액이</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <SequentialAnimation>
          <Controller
            name="amount"
            control={control}
            rules={{
              required: { value: true, message: "이름을 입력하세요" },
              validate: (v) => v < 3000 || "가격이 너무 높아유",
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
          <div>주문시작</div>
          <button>dddwdw</button>
        </SequentialAnimation>
      </Form>
    </>
  );
}
