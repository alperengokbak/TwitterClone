import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

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

export default function NavTabs(user) {
  const [value, setValue] = React.useState(0);
  const username = `${user[0]}`;

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
        <LinkTab label="Posts" href={username.username} />
        <LinkTab label="Replies" href={`${user.username}/replies`} />
        <LinkTab label="Highlights" href={`${user.username}/highlights`} />
        <LinkTab label="Media" href={`${user.username}/media`} />
        <LinkTab label="Likes" href={`${user.username}/replies`} />
      </Tabs>
    </Box>
  );
}
