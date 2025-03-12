import { getStore } from "#/store/getStore";
import { SequentialAnimation } from "@/SequentialAnimation";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, useLocation } from "@tanstack/react-router";
import { useMemo } from "react";
import { Button } from "rsuite";
// const { Column, HeaderCell, Cell } = Table;

export const Route = createFileRoute("/store/$storeId")({
  component: RouteComponent,
});

function RouteComponent() {
  const location = useLocation();
  const storeId = useMemo(
    () => location.pathname.split("/").pop() ?? "",
    [location]
  );
  const { data } = useQuery({
    queryKey: ["store", storeId],
    queryFn: () => getStore(storeId),
    enabled: !!storeId,
  });
  console.log(data);
  return (
    <SequentialAnimation>
      <dl>
        <dt>상호</dt>
        <dd>{data?.name}</dd>
      </dl>
      <dl>
        <dt>주소</dt>
        <dd>{data?.address}</dd>
      </dl>
      <Button href={`/auth/order/${storeId}`}>주문하기</Button>
    </SequentialAnimation>
  );
}
