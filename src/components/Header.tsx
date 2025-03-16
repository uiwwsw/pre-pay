import { useLocation, useRouter } from "@tanstack/react-router";
import { useMemo } from "react";
import { Button } from "rsuite";

export const Header = () => {
  const location = useLocation();
  const router = useRouter();
  const handleClick = () => router.history.back();
  const title = useMemo(() => {
    // const group = location.pathname.split("/").filter(Boolean)[0];
    // switch (location.pathname) {
    //   case "/":
    //     return "메인";
    //   case "admin":
    //     return "관리자";
    // }
    if (location.pathname.startsWith("/store")) return "상호 상세";
    if (location.pathname.startsWith("/auth/order")) return "주문하기";
    if (location.pathname.startsWith("/auth/my")) return "마이페이지";
    if (location.pathname.startsWith("/auth/store")) return "내 상점";
    if (location.pathname.startsWith("/auth/history")) return "내역";
    if (location.pathname.startsWith("/auth")) return "";
    return "프리페이";
  }, [location]);
  const visibleClose = useMemo(() => {
    if (location.pathname.startsWith("/auth/order")) return true;
    if (location.pathname.startsWith("/auth/history/")) return true;
    return false;
  }, [location]);
  const visibleBack = useMemo(() => {
    return location.pathname !== "/" && !visibleClose;
  }, [location, visibleClose]);
  return (
    <header className="fixed bg-black bg-opacity-30 z-10 backdrop-blur-sm top-0 left-0 right-0 px-10 text-black flex max-w-lg m-auto h-11">
      <div className="flex w-full justify-between self-center">
        <Button
          onClick={handleClick}
          appearance="link"
          className={`opacity-0 py-2 px-3 h-11 !text-white${
            visibleBack ? " opacity-100" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </Button>
        <h5 className="text-white self-center">{title}</h5>
        <Button
          onClick={handleClick}
          appearance="link"
          className={`opacity-0 py-2 px-3 h-11 !text-white${
            visibleClose ? " opacity-100" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </Button>
      </div>
    </header>
  );
};
