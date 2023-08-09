import React from "react";
import { Button, Stack, useMediaQuery } from "@mui/material";

export const SidebarOptions = ({ text, Icon }) => {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  return (
    <Stack alignItems={"flex-start"} flexDirection="column">
      <Stack justifyItems="space-between" flexDirection="row">
        <Button
          startIcon={
            <Icon
              style={{
                padding: "6px",
                fontSize: "27",
              }}
            />
          }
          sx={{
            size: "10px",
            color: "#000000",
            fontSize: isDesktop ? "15px" : "0",
          }}
        >
          {text}
        </Button>
      </Stack>
    </Stack>
  );
};
