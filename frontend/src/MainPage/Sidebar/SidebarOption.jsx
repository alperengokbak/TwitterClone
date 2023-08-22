import React from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import { AuthContext } from "../../AuthenticationSystem/AuthenticationSystem";
import TwitterLink from "../../Components/TwitterLink";

export const SidebarOptions = ({ text, Icon, link }) => {
  const { isDesktop } = React.useContext(AuthContext);
  return (
    <Stack justifyItems="space-between" flexDirection="row">
      {isDesktop ? (
        <TwitterLink
          // TODO - activate the sidebar buttons
          sx={{
            my: 0.5,
          }}
          to={`${link}`}
        >
          <Icon
            style={{
              padding: "6px",
              fontSize: "30px",
              marginRight: "14px",
            }}
          />{" "}
          <Typography variant="subtitle1">{text}</Typography>
        </TwitterLink>
      ) : (
        <IconButton aria-label="SidebarIconsForMobile">
          <Icon />
        </IconButton>
      )}
    </Stack>
  );
};
