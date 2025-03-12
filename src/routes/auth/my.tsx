import { getWallets } from "#/wallet/getWallets";
import { FirebaseContext } from "@/FirebaseContext";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useContext } from "react";

export const Route = createFileRoute("/auth/my")({
  component: RouteComponent,
});

function RouteComponent() {
  const { user } = useContext(FirebaseContext);
  const { data } = useQuery({
    enabled: !!user?.uid,
    queryKey: ["wallet"],
    queryFn: () => getWallets(user!.uid),
  });
  return <div>{JSON.stringify(data)}</div>;
}
