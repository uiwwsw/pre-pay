import { getStores } from "#/store/getStores";
import { FirebaseContext } from "@/FirebaseContext";
import { SequentialAnimation } from "@/SequentialAnimation";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useContext } from "react";
import { Button } from "rsuite";

export const Route = createFileRoute("/auth/store/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { history } = useRouter();
  const { user } = useContext(FirebaseContext);
  const { data, isLoading } = useQuery({
    queryKey: ["stores", user?.uid],
    enabled: !!user?.uid,
    queryFn: () => getStores(user!.uid),
  });
  const handleAddStore = () => {
    history.push("/auth/store/request");
  };
  return (
    <SequentialAnimation isLoading={isLoading}>
      <>
        {data?.map((store) => (
          <Button
            key={store.id}
            appearance="primary"
            onClick={() => history.push(`/store/${store.id}`)}
          >
            {store.name}
          </Button>
        ))}
      </>
      <Button appearance="primary" color="red" onClick={handleAddStore}>
        가게 추가하기
      </Button>
    </SequentialAnimation>
  );
}
