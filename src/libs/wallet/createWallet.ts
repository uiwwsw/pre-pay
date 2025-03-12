import { addData } from "%/storage";
import { Wallet } from "./domain";

export const createWallet = (wallet: Wallet) => addData("wallets", wallet)