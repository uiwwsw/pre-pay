import { searchData } from "%/storage";
import { Order } from "./domain";

export const getNew = (uid: string) =>
  Promise.all([
    searchData<Order>("orders", ["uid", uid], ["confirm", false]),
    searchData<Order>("recharges", ["uid", uid], ["confirm", false]),
  ]);
