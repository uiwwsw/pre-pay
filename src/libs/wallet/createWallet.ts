import { addData } from "%/storage";
import { Wallet } from "./domain";

export const createWallet = (wallet: Omit<Wallet, 'id'>) => addData("wallets", wallet)