import { addData } from "%/storage";
import { Log } from "./domain";

export const pay = async (payload: Log) =>
  addData("logs", {
    ...payload,
    amount: +payload.amount,
  });
