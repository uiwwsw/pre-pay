import { useContext, useEffect, useMemo, useRef } from "react";
import { FirebaseContext } from "./FirebaseContext";
import { useRouter } from "@tanstack/react-router";
import { toaster, Message } from "rsuite";

type AuthState = "pending" | "login" | "logout" | "need-user-info";

export const useAuth = (isLogin?: boolean) => {
  const { history } = useRouter();
  const { user, userInfo } = useContext(FirebaseContext);

  const state: AuthState = useMemo(() => {
    if (user === undefined || userInfo === undefined) return "pending";
    if (user === null) return "logout";
    if (!userInfo) return "need-user-info";
    return "login";
  }, [user, userInfo]);

  // Use a ref to prevent duplicate executions
  const hasEffectRun = useRef(false);

  useEffect(() => {
    if (hasEffectRun.current) return; // Prevent execution if it has already run
    hasEffectRun.current = true;

    if (isLogin && state === "logout") {
      toaster.push(
        <Message showIcon type="warning" closable>
          로그인이 필요해요.
        </Message>
      );
      return history.push("/sign-in");
    }
    if (isLogin === false && state === "login") {
      toaster.push(
        <Message showIcon type="info" closable>
          유저 정보를 확인했어요~
        </Message>
      );
      return history.push("/");
    }
    if (state === "need-user-info") {
      toaster.push(
        <Message showIcon type="warning" closable>
          유저 정보를 입력해야해요.
        </Message>
      );
      return history.push("/sign-up");
    }
  }, [state, history, isLogin]);

  return state;
};
