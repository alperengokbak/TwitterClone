import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SidebarTheme } from "./createTheme";
import { ThemeProvider } from "@mui/material";
import { AuthContextProvider } from "./AuthenticationSystem/AuthenticationSystem.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeProvider theme={SidebarTheme}>
        <App />
      </ThemeProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
