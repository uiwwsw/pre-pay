import { auth } from "%/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { ReactNode, useLayoutEffect, useState } from "react";
import { FirebaseContext, FirebaseState } from "./FirebaseContext";
import { useMutation } from "@tanstack/react-query";
import { getUser } from "#/user/getUser";
import { Loader } from "rsuite";

interface FirebaseProps extends FirebaseState {
  children?: ReactNode;
}

export const FirebaseProvider = ({ children }: FirebaseProps) => {
  const [user, setUser] = useState<User | null>();
  const { data: userInfo, mutate } = useMutation({
    mutationKey: ["user"],
    mutationFn: (uid?: string) => getUser(uid),
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
    <FirebaseContext.Provider value={{ userInfo, user }}>
      {children}
    </FirebaseContext.Provider>
  );
};
