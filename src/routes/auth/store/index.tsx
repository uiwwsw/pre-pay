import { getStores } from "#/store/getStores";
import { FirebaseContext } from "@/FirebaseContext";
import { SequentialAnimation } from "@/SequentialAnimation";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useContext } from "react";
import { Button } from "rsuite";

export const Route = createFileRoute("/auth/store/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { user } = useContext(FirebaseContext);
  const { data, isLoading } = useQuery({
    queryKey: ["stores", user?.uid],
    enabled: !!user?.uid,
    queryFn: () => getStores(user!.uid),
  });
  return (
    <SequentialAnimation isLoading={isLoading}>
      <>
        {data?.map((store) => (
          <Button key={store.id} appearance="primary">
            {store.name}
          </Button>
        ))}
      </>
      <Button appearance="primary" color="red">
        가게 추가하기
      </Button>
    </SequentialAnimation>
  );
}
