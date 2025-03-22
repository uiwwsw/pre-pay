import { getStore } from "#/store/getStore";
import { SequentialAnimation } from "@/SequentialAnimation";
import { useSub } from "@/useSub";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, useLocation } from "@tanstack/react-router";
import { useMemo } from "react";

export const Route = createFileRoute("/auth/store/sub/$storeId")({
  component: RouteComponent,
});

function RouteComponent() {
  const location = useLocation();
  const storeId = useMemo(
    () => location.pathname.split("/").pop() ?? "",
    [location]
  );
  const sub = useSub(storeId);
  const { data, isLoading } = useQuery({
    queryKey: ["store", storeId],
    queryFn: () => getStore(storeId),
    staleTime: Infinity,
    gcTime: Infinity,
    enabled: !!storeId,
  });
  console.log(sub);
  return (
    <>
      <SequentialAnimation isLoading={isLoading}>
        <dl>
          <dt>상호</dt>
          <dd>{data?.name}</dd>
        </dl>
        <dl>
          <dt>주소</dt>
          <dd>{data?.address}</dd>
        </dl>
      </SequentialAnimation>
    </>
  );
}
