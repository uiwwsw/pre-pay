import { searchData } from "%/storage";
import { Wallet } from "./domain";

export const getWallet = (uid: string, storeId: string) => searchData<Wallet>("wallets", ['uid', uid], ['storeId', storeId])