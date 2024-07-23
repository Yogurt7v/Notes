import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import App from "./App.tsx";
import "./index.css";
import { AppContext } from "./context/AppContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <AppContext>
      <App />
    </AppContext>
  </MantineProvider>
);
