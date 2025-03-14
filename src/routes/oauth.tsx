import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { signInForKakao } from "#/auth/signIn";
import { Loader, Message, toaster } from "rsuite";
import { getUser } from "#/user/getUser";
import { useCookies } from "react-cookie";
export const Route = createFileRoute("/oauth")({
  component: RouteComponent,
});
function RouteComponent() {
  const [cookie, setCookie] = useCookies(["code"]);
  const params = new URL(document.URL).searchParams;
  const code = params.get("code");
  const { data } = useQuery({
    queryKey: ["oauth"],
    queryFn: () => {
      if (cookie.code === code) return;
      setCookie("code", code);
      return signInForKakao({ code });
    },
  });
  const { data: user } = useQuery({
    enabled: !!data?.uid,
    queryKey: ["user"],
    queryFn: () => getUser(data!.uid),
  });
  const router = useRouter();

  useEffect(() => {
    if (user === undefined) return;
    if (user) {
      toaster.push(
        <Message showIcon type="info" closable>
          로그인 성공! 환영합니다! 💕✨
        </Message>
      );
      router.history.push("/");
    } else {
      router.history.push("/sign-up");
    }
  }, [user, router]);
  return <Loader className="justify-self-center !flex" />;
}
