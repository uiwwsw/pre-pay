import { useContext, useEffect, useMemo } from "react";
import { FirebaseContext } from "./FirebaseContext";
import { useRouter } from "@tanstack/react-router";
import { toaster, Message } from "rsuite";
type AuthState = "pending" | "login" | "logout" | "need-user-info";
export const useAuth = (isLogin?: boolean) => {
  const router = useRouter();
  const { user, userInfo } = useContext(FirebaseContext);
  const state: AuthState = useMemo(() => {
    if (user === undefined || userInfo === undefined) return "pending";
    if (user === null) return "logout";
    if (!userInfo) return "need-user-info";
    return "login";
  }, [user, userInfo]);
  useEffect(() => {
    if (isLogin && state === "logout") {
      toaster.push(
        <Message showIcon type="warning" closable>
          로그인이 필요해요.
        </Message>
      );
      return router.history.push("/sign-in");
    }
    if (isLogin === false && state === "login") {
      toaster.push(
        <Message showIcon type="info" closable>
          유저 정보를 확인했어요~
        </Message>
      );
      return router.history.push("/");
    }
    if (state === "need-user-info") {
      toaster.push(
        <Message showIcon type="warning" closable>
          유저 정보를 입력해야해요.
        </Message>
      );
      return router.history.push("/sign-up");
    }
  }, [state, router, isLogin]);
  return state;
};
