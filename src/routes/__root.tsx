import { useAuth } from "@/useAuth";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { useEffect } from "react";

const RootComponent = () => {
  const isLogin = useAuth();
  const setVhVariable = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };
  useEffect(() => {
    setVhVariable();
    window.addEventListener("resize", setVhVariable);

    return () => {
      window.removeEventListener("resize", setVhVariable);
    };
  }, []);
  console.log(isLogin);
  return <Outlet />;
};

export const Route = createRootRoute({
  component: RootComponent,
});
