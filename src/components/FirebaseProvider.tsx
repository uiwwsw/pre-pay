import { auth } from "%/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { ReactNode, useLayoutEffect, useState } from "react";
import { FirebaseContext } from "./FirebaseContext";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getUser } from "#/user/getUser";
import { Loader } from "rsuite";
import { getWallets } from "#/wallet/getWallets";

interface FirebaseProps {
  children?: ReactNode;
}

export const FirebaseProvider = ({ children }: FirebaseProps) => {
  const [user, setUser] = useState<User | null>();
  const { data: userInfo, mutate } = useMutation({
    mutationKey: ["user"],
    mutationFn: (uid?: string) => getUser(uid),
  });
  const { data: myWallets } = useQuery({
    queryKey: ["my-wallets"],
    enabled: !!user?.uid,
    queryFn: () => getWallets(user?.uid),
    staleTime: 0,
    gcTime: 0,
  });
  useLayoutEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      setUser(user);
      mutate(user?.uid);
    });

    return () => unsubscribe();
  }, [mutate]);
  if (user === undefined || userInfo === undefined)
    return <Loader className="justify-self-center !flex" />;

  return (
    <FirebaseContext.Provider
      value={{ userInfo, user, myWallets: myWallets ?? [] }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
