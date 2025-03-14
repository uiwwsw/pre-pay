import { searchData } from "%/storage";
import { Wallet } from "./domain";

export const getWallets = async (uid?: string) => {
  if (!uid) return [];
  console.log("13123");
  return searchData<Wallet>("wallets", ["uid", uid]);
};
