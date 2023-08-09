import { Stack } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";

function Widget() {
  return (
    <Stack>
      <Typography
        variant="h5"
        sx={{
          paddingTop: "10px",
          paddingLeft: "20px",
          fontWeight: "bold",
        }}
      >
        Widgets
      </Typography>
    </Stack>
  );
}

export default Widget;
