import { useAuth } from "@/useAuth";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/manager")({
  component: RouteComponent,
});

function RouteComponent() {
  useAuth(true);

  return <Outlet />;
}
