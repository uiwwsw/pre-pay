import { auth } from "%/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { ReactNode, useLayoutEffect, useState } from "react";
import { FirebaseContext, FirebaseState } from "./FirebaseContext";
import { Loader } from "rsuite";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "#/userInfo/getUser";

interface FirebaseProps extends FirebaseState {
  children?: ReactNode;
}

export const FirebaseProvider = ({ children }: FirebaseProps) => {
  const [user, setUser] = useState<User | null>();
  const { data: userInfo } = useQuery({
    enabled: !!user?.uid,
    queryKey: ["user"],
    queryFn: () => getUser(user!.uid),
  });
  useLayoutEffect(() => {
    onAuthStateChanged(auth, (user: User | null) => {
      setUser(user);
    });
  }, []);
  if (user === undefined) return <Loader className="m-auto" />;
  return (
    <FirebaseContext.Provider value={{ userInfo, uid: user?.uid }}>
      {children}
    </FirebaseContext.Provider>
  );
};
