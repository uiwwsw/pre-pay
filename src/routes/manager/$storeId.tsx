import { useQuery } from "@tanstack/react-query";
import { createFileRoute, useLocation } from "@tanstack/react-router";
import { useMemo } from "react";

export const Route = createFileRoute("/manager/$storeId")({
  component: RouteComponent,
});

function RouteComponent() {
  const location = useLocation();
  const storeId = useMemo(
    () => location.pathname.split("/").pop() ?? "",
    [location]
  );
  return <div>Hello "/manager/$storeId"!</div>;
}
