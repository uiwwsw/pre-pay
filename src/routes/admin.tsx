import { FirebaseContext } from "@/FirebaseContext";
import { useAuth } from "@/useAuth";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { useContext, useEffect } from "react";

export const Route = createFileRoute("/admin")({
  component: RouteComponent,
});

function RouteComponent() {
  const { user } = useContext(FirebaseContext);
  useAuth(true);
  useEffect(() => {
    const admins = import.meta.env.VITE_ADMIN_IDS.split(",");
    if (user?.uid && !admins.includes(user.uid))
      throw new Error("관리자 계정이 아닙니다.");
  }, [user]);
  return <Outlet />;
}
