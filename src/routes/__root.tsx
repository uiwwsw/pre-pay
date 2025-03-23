// import { useAuth } from "@/useAuth";
// import { Float } from "@/Float";
// import { Nav } from "@/Nav";
import { Tiding } from "#/tiding/domain";
import { Header } from "@/Header";
import { Nav } from "@/Nav";
import { useStorage } from "@/useStorage";
import { useSub } from "@/useSub";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { useEffect, useMemo } from "react";
import { Button, Modal } from "rsuite";
// import { Button } from "rsuite";

const RootComponent = () => {
  // const location = useLocation();
  const [noticie, setNoticie] = useStorage<string>("notice");
  const tiding = useSub<Tiding>("tiding");
  const visible = useMemo(() => {
    if (!tiding) return false;
    console.log(noticie);
    if (noticie === tiding.text) return false;
    const today = new Date().valueOf();
    if (tiding.startDt || tiding.endDt) {
      const startDt = tiding.startDt?.toDate().valueOf() ?? Infinity;
      const endDt = tiding?.endDt?.toDate().valueOf() ?? 0;
      if (today > startDt && today < endDt) return true;
    }
    return false;
  }, [tiding, noticie]);
  const handleClose = () => setNoticie(tiding?.text);

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
      <Modal backdrop="static" open={visible} onClose={handleClose}>
        {tiding?.title && (
          <Modal.Header closeButton={!tiding?.hideClose}>
            <Modal.Title>{tiding?.title}</Modal.Title>
          </Modal.Header>
        )}

        <Modal.Body className="text-black">{tiding?.text}</Modal.Body>
        <Button onClick={handleClose} appearance="subtle">
          확인
        </Button>
        {!tiding?.hideClose && (
          <Modal.Footer>
            <Button onClick={handleClose} appearance="subtle">
              확인
            </Button>
          </Modal.Footer>
        )}
      </Modal>
      <Header />
      <Outlet />
      <Nav />
    </>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
