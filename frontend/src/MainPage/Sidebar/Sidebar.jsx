import React from "react";
import { Stack } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { SidebarOptions } from "./SidebarOption";
import { BasicMenu, BasicMenuForMobile } from "./BasicMenu";
import { PostScreen } from "./PostScreen";
import { AuthContext } from "../../AuthenticationSystem/AuthenticationSystem";

export const Sidebar = () => {
  const { isDesktop } = React.useContext(AuthContext);

  return (
    <Stack
      direction="column"
      alignItems="flex-end"
      justifyContent="space-between"
      spacing={1}
      height={isDesktop ? "100%" : "45%"}
    >
      <Stack
        sx={{
          marginTop: "10px",
          paddingLeft: isDesktop ? "20px" : "0",
          paddingRight: isDesktop ? "40px" : "0",
        }}
      >
        <TwitterIcon
          sx={{
            color: "#1DA1F2",
            fontSize: "30px",
            marginLeft: "8px",
            marginBottom: "10px",
          }}
        />
        <SidebarOptions Icon={HomeIcon} text="Home" />
        <SidebarOptions Icon={SearchIcon} text="Explore" />
        <SidebarOptions Icon={NotificationsNoneIcon} text="Notifications" />
        <SidebarOptions Icon={MailOutlineIcon} text="Messages" />
        <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
        <SidebarOptions Icon={ListAltIcon} text="Lists" />
        <SidebarOptions Icon={PermIdentityIcon} text="Profile" />
        <SidebarOptions Icon={MoreHorizIcon} text="More" />
        <PostScreen />
      </Stack>
      <Stack paddingRight={isDesktop ? "30px" : "0"}>
        {isDesktop ? <BasicMenu /> : <BasicMenuForMobile />}
      </Stack>
    </Stack>
  );
};
