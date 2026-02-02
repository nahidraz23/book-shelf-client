import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./routes/router.ts";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { Toaster } from "./components/ui/sonner.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster/>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
