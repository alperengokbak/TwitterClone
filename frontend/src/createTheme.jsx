import { createTheme } from "@mui/material/styles";

const colors = {
  primary: "#000000",
  secondary: "#1DA1F2",
};
export const SidebarTheme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
  },
  components: {
    MuiSvgIcon: {
      variants: [
        {
          props: { className: "more_postScreen" },
          style: {
            cursor: "pointer",
            color: "#808080",
            fontSize: "17px",
            "&:hover": {
              backgroundColor: "#E8F5FE",
              borderRadius: "20px",
            },
          },
        },
        {
          props: { className: "PostComponentIcon" },
          style: {
            height: "20px",
            width: "20px",
            padding: "3px",
            color: "gray",
          },
        },
        {
          props: { className: "TweetBoxForPostIcon" },
          style: {
            padding: "3px",
            blockSize: "34px",
            fontSize: "26px",
            color: colors.secondary,
            "&:hover": {
              borderRadius: "20px",
              color: "#1DA1F2",
            },
          },
        },
        {
          props: { className: "TweetBoxIcon" },
          style: {
            marginLeft: "15px",
            padding: "3px",
            color: colors.secondary,
            size: "small",
            "&:hover": {
              borderRadius: "20px",
              color: "#1DA1F2",
            },
          },
        },
      ],
    },
    MuiTypography: {
      styleOverrides: {
        subtitle1: {
          fontSize: "1.15rem",
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          "&:not(.MuiInputAdornment-hiddenLabel)": {
            marginTop: "0px !important",
          },
        },
      },
    },
    MuiFilledInput: {
      defaultProps: {
        disableUnderline: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "20px",
        },
        input: {
          padding: "9.5px 0px",
        },
      },
    },
    MuiIconButton: {
      variants: [
        {
          props: { className: "profileIconButton" },
          style: {
            color: colors.primary,
          },
        },
        {
          props: { "aria-label": "close" },
          style: {
            color: colors.primary,
            backgroundColor: "rgba(15, 20, 25, 0.75)",
            position: "absolute",
            backdropFilter: "blur(4px)",
            height: "32px",
            width: "32px",
            outline: "none",
            top: "14px",
            right: "6px",
            transition:
              "background-color 0.2s ease-in-out,box-shadow 0.2s ease-in-out",
            "&:hover": {
              backgroundColor: "rgba(39, 44, 48, 0.75)",
            },
          },
        },
        {
          props: { "aria-label": "SidebarIconsForMobile" },
          style: {
            fontSize: "27",
            padding: "6px",
            size: "10px",
            color: colors.primary,
            "&:hover": {
              borderRadius: "20px",
            },
          },
        },
        {
          props: { "aria-label": "SidebarIcons" },
          style: {
            color: "#000000",
            fontSize: "15px",
            size: "10px",
          },
        },
        {
          props: { "aria-label": "send" },
          style: {
            color: "#1DA1F2",
            background: "#FFFFFF",
            border: "none",
            borderRadius: "50px",
            textTransform: "inherit",
            "&:hover": {
              color: "#000000",
            },
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { className: "showMoreButton" },
          style: {
            color: colors.secondary,
            borderRadius: "0px",
            fontWeight: "400",
          },
        },
        {
          props: { variant: "contained" },
          style: {
            backgroundColor: "#1DA1F2",
            borderRadius: "20px",
            "&:hover": {
              backgroundColor: "#FFFFFF",
              color: colors.primary,
            },
          },
        },
        {
          props: { variant: "contained", fullWidth: true },
          style: {
            height: "50px",
            width: "230px",
            "&:hover": {
              backgroundColor: "#FFFFFF",
              color: colors.primary,
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          fontWeight: "900",
          textTransform: "inherit",
          borderRadius: "20px",
          /*           "&:hover": {
            backgroundColor: "#E8F5FE",
            borderRadius: "20px",
            color: "#000000",
          }, */
        },
      },
    },
  },
});
