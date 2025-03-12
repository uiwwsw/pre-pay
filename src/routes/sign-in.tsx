import { KAKAO_AUTH_URL } from "#/auth/signIn";
import { useAuth } from "@/useAuth";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "rsuite";

export const Route = createFileRoute("/sign-in")({
  component: RouteComponent,
});
function RouteComponent() {
  useAuth(false);
  return (
    <>
      <Button href={KAKAO_AUTH_URL}>카카오톡으로 로그인하기</Button>
    </>
  );
}
