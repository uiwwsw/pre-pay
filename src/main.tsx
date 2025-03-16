import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "rsuite/dist/rsuite.min.css";
import { CustomProvider } from "rsuite";
import { FirebaseProvider } from "@/FirebaseProvider";
import { Nav } from "@/Nav";
// import { Header } from "@/Header";

const queryClient = new QueryClient();
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CustomProvider>
        <FirebaseProvider>
          <RouterProvider router={router} />
        </FirebaseProvider>
        <Nav />
      </CustomProvider>
    </QueryClientProvider>
  </StrictMode>
);
