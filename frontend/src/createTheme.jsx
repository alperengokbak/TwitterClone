import { createTheme } from "@mui/material/styles";

export const SidebarTheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#1DA1F2",
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          padding: "3px",
          blockSize: "34px",
          fontSize: "26px",
          "&:hover": {
            borderRadius: "20px",
            color: "#1DA1F2",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          fontWeight: "600",
          "&:hover": {
            backgroundColor: "#E8F5FE",
            borderRadius: "20px",
            color: "#000000",
          },
        },
      },
    },
  },
});
