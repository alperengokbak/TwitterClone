import { createTheme } from "@mui/material/styles";
export const sidebarTheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#1DA1F2",
    },
  },
  components: {
    MuiStack: {
      styleOverrides: {
        root: {
          borderRight: "1px",
          marginTop: "20px",
        },
      },
    },

    MuiGrid: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          padding: "3px",
          blockSize: "34px",
          fontSize: "26px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "500",
          fontSize: "15px",
          color: "white",
          "&:hover": {
            backgroundColor: "#E8F5FE",
            borderRadius: "30px",
            color: "#50b7f5",
            transition: "color 100ms ease-out",
          },
        },
      },
    },
  },
});
