import { addData } from "%/storage";
import { Order } from "./domain";

export const addRecharge = async (payload: Order) =>
  addData("recharges", payload);
