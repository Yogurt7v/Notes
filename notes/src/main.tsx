import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { AppContext } from "./context/AppContext.tsx";
import App from "./App.tsx";
import "@mantine/core/styles.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <AppContext>
      <App />
    </AppContext>
  </MantineProvider>
);
