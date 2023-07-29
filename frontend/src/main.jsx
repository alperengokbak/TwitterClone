import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { sidebarTheme } from "./createTheme";
import { ThemeProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={sidebarTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
