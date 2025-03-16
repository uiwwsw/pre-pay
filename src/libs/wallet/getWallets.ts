import { searchData } from "%/storage";
import { Wallet } from "./domain";

export const getWallets = async (uid?: string) => {
  if (!uid) return [];
  return searchData<Wallet>("wallets", ["uid", uid]);
};
