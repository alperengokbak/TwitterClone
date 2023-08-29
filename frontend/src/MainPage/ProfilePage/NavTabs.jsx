import * as React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs, Box } from "@mui/material";

function LinkTab(props) {
  return (
    <Tab
      disableFocusRipple
      disableRipple
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs({ user }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Profile nav tabs"
        variant="fullWidth"
        centered
        sx={{
          "&:hover": {
            color: "#1DA1F2",
          },
        }}
      >
        <LinkTab label="Posts" href={`${user}`} />
        <LinkTab label="Replies" href={`${user}/replies`} />
        <LinkTab label="Highlights" href={`${user}/highlights`} />
        <LinkTab label="Media" href={`${user}/media`} />
        <LinkTab label="Likes" href={`${user}/replies`} />
      </Tabs>
    </Box>
  );
}
