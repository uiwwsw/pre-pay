import { addData } from "%/storage";
import { Order } from "./domain";

export const addOrder = async (payload: Order) =>
  addData("orders", {
    ...payload,
    amount: +payload.amount,
  });
