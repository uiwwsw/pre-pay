import { updateData } from "%/storage";
import { Wallet } from "./domain";

export const updateWallet = ({
  id,
  ...partialWallet
}: Partial<Wallet> & { id: string }) =>
  updateData("wallets", id, partialWallet);
