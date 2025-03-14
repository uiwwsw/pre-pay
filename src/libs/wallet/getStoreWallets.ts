import { searchData } from "%/storage";
import { Wallet } from "./domain";

export const getStoreWallets = (storeId: string) =>
  searchData<Wallet>("wallets", ["storeId", storeId]);
