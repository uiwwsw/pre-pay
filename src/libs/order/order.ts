import { addData } from "%/storage";
import { Order } from "./domain";

export const order = async (payload: Order) => addData("orders", payload)