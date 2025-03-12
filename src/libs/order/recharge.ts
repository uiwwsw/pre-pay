import { addData } from "%/storage";
import { Order } from "./domain";

export const recharge = async (payload: Order) => addData("recharges", payload)