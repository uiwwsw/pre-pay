// import { useAuth } from "@/useAuth";
// import { Float } from "@/Float";
// import { Nav } from "@/Nav";
import { Header } from "@/Header";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { useEffect } from "react";
// import { Button } from "rsuite";

const RootComponent = () => {
  // const location = useLocation();

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
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
