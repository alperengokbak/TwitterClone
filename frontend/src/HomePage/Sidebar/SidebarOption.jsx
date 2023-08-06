import React, { useState, useEffect } from "react";
import { Button, Grid } from "@mui/material";

function SidebarOptions({ text, Icon }) {
  const [showText, setShowText] = useState(window.innerWidth >= 768);
  useEffect(() => {
    const handleResize = () => {
      setShowText(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Grid container={true} padding="8px" spacing={1}>
      <Button>
        <Grid item color="#000000">
          <Icon />
        </Grid>
        {showText && (
          <Grid
            item
            fontWeight="600"
            fontSize="16px"
            marginRight="20px"
            color="#000000"
          >
            {text}
          </Grid>
        )}
      </Button>
    </Grid>
  );
}

export default SidebarOptions;
