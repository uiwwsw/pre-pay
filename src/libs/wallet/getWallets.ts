import { searchData } from "%/storage";
import { Wallet } from "./domain";

export const getWallets = (uid: string) => searchData<Wallet>("wallets", ['uid', uid])