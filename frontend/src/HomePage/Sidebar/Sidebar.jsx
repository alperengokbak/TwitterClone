import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Grid, Stack } from "@mui/material";
import { BasicMenu } from "./Dashboard";
import { PostScreen } from "./PostScreen";

function Sidebar() {
  return (
    <Stack
      sx={{
        borderRight: "1px solid #e6ecf0",
        flex: "0.2",
        marginTop: "10px",
        paddingLeft: "20px",
        paddingRight: "40px",
      }}
    >
      <TwitterIcon
        sx={{
          color: "#1DA1F2",
          fontSize: "30px",
          marginLeft: "8px",
          marginBottom: "20px",
        }}
      />
      <SidebarOption Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />
      <Grid container display="flex" alignItems="stretch" position="relative">
        <Grid
          item
          xs={12}
          sm={8}
          sx={{
            marginTop: "20px",
            "@media (width: 1920px)": {
              marginTop: "20px",
            },
          }}
        >
          <PostScreen />
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          sx={{
            marginTop: "140px",
            "@media (width: 1920px)": {
              marginTop: "320px",
            },
          }}
        >
          <BasicMenu />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Sidebar;
