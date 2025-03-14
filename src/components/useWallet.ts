import { getWallets } from "#/wallet/getWallets";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { FirebaseContext } from "./FirebaseContext";

export const useWallet = () => {
  const { user } = useContext(FirebaseContext);
  const { data: myWallets } = useQuery({
    queryKey: ["my-wallets"],
    enabled: !!user?.uid,
    queryFn: () => getWallets(user?.uid),
  });
  return { myWallets };
};
