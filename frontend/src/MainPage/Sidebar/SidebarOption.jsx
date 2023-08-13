import React from "react";
import { Button, IconButton, Stack } from "@mui/material";
import { AuthContext } from "../../AuthenticationSystem/AuthenticationSystem";

export const SidebarOptions = ({ text, Icon }) => {
  const { isDesktop } = React.useContext(AuthContext);
  return (
    <Stack alignItems={"flex-start"} flexDirection="column">
      <Stack justifyItems="space-between" flexDirection="row">
        {isDesktop ? (
          <Button
            aria-label="SidebarIcons"
            startIcon={
              <Icon
                style={{
                  padding: "6px",
                  fontSize: "27",
                }}
              />
            }
          >
            {text}
          </Button>
        ) : (
          <IconButton aria-label="SidebarIconsForMobile">
            <Icon />
          </IconButton>
        )}
      </Stack>
    </Stack>
  );
};
