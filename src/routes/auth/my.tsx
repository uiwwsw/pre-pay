import { getNew } from "#/log/getNew";
import { FirebaseContext } from "@/FirebaseContext";
import { SequentialAnimation } from "@/SequentialAnimation";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useContext } from "react";
import { Badge, Button } from "rsuite";

export const Route = createFileRoute("/auth/my")({
  component: RouteComponent,
});
function RouteComponent() {
  const { user } = useContext(FirebaseContext);
  const { data } = useQuery({
    enabled: !!user?.uid,
    queryKey: ["notification"],
    queryFn: () => getNew(user!.uid),
    staleTime: 0,
    gcTime: 0,
  });
  const router = useRouter();
  const handleGoHistory = () => router.history.push("/auth/history");
  const handleGoStore = () => router.history.push("/auth/store");
  return (
    <SequentialAnimation>
      <Badge content={data?.length}>
        <Button
          appearance="primary"
          className="w-full"
          type="button"
          onClick={handleGoHistory}
        >
          히스토리
        </Button>
      </Badge>
      <Button
        appearance="primary"
        className="w-full"
        type="button"
        onClick={handleGoStore}
      >
        내 상점
      </Button>
    </SequentialAnimation>
  );
}
