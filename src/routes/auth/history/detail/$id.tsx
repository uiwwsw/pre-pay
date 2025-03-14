import { getDetail } from "#/log/getDetail";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, useLocation } from "@tanstack/react-router";
import { useMemo } from "react";

export const Route = createFileRoute("/auth/history/detail/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const location = useLocation();
  const id = useMemo(
    () => location.pathname.split("/").pop() ?? "",
    [location]
  );
  const { data } = useQuery({
    queryKey: ["notification"],
    queryFn: () => getDetail(id),
    staleTime: 0,
    gcTime: 0,
  });
  return <div>{JSON.stringify(data)}</div>;
}
