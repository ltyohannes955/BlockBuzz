import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";
import { BrowserRouter } from "react-router-dom";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <MantineProvider>
      <Notifications />
      <App />
    </MantineProvider>
  </BrowserRouter>
);
