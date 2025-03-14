import { FirebaseDocData } from "#/firebase/domain";
import { UserInfo } from "#/user/domain";
import { Wallet } from "#/wallet/domain";
import { User } from "firebase/auth";
import { createContext, useContext } from "react";
export interface FirebaseState {
  userInfo?: UserInfo | null;
  user?: User | null;
  myWallets: (Wallet & FirebaseDocData)[];
}
export const FirebaseContext = createContext<FirebaseState>({
  userInfo: undefined,
  user: undefined,
  myWallets: [],
});

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error("useFirebase must be used within a FirebaseProvider");
  }
  return context;
};
