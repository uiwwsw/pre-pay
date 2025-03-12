import { KAKAO_AUTH_URL } from "#/auth/signIn";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "rsuite";

export const Route = createFileRoute("/sign-in")({
  component: RouteComponent,
});
function RouteComponent() {
  // 파이어베이스 유저에 있나 체크
  return (
    <>
      <Button href={KAKAO_AUTH_URL}>카카오톡으로 로그인하기</Button>
    </>
  );
}
