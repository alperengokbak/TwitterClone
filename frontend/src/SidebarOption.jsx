import React from "react";
import { Button, Grid } from "@mui/material";

function SidebarOptions({ text, Icon }) {
  return (
    <Grid container={true} padding="8px" spacing={1}>
      <Button>
        <Grid item color="#000000">
          <Icon />
        </Grid>
        <Grid
          item
          fontWeight="600"
          fontSize="16px"
          marginRight="20px"
          color="#000000"
        >
          {text}
        </Grid>
      </Button>
    </Grid>
  );
}

export default SidebarOptions;
