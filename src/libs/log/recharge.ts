import { addData } from "%/storage";
import { Log } from "./domain";

export const recharge = async (payload: Log) =>
  addData("logs", {
    ...payload,
    recharge: true,
    amount: -payload.amount,
  });
