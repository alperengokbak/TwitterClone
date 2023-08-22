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
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { SidebarOptions } from "./SidebarOption";
import { BasicMenu, BasicMenuForMobile } from "./BasicMenu";
import { PostScreen } from "./PostScreen";
import { AuthContext } from "../../AuthenticationSystem/AuthenticationSystem";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Sidebar = () => {
  const { isDesktop, user } = React.useContext(AuthContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack
      direction="column"
      borderRight="2px solid #e6ecf0"
      alignItems="flex-end"
      justifyContent="space-between"
      spacing={1}
      height={isDesktop ? "100%" : "45%"}
    >
      <Stack
        sx={{
          marginTop: "10px",
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
        <SidebarOptions Icon={HomeIcon} text="Home" link="/home" />
        <SidebarOptions Icon={SearchIcon} text="Explore" link="#" />
        <SidebarOptions
          Icon={NotificationsNoneIcon}
          text="Notifications"
          link="#"
        />
        <SidebarOptions Icon={MailOutlineIcon} text="Messages" />
        <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" link="#" />
        <SidebarOptions Icon={ListAltIcon} text="Lists" link="#" />
        <SidebarOptions
          Icon={VerifiedOutlinedIcon}
          text="Verified"
          onClick={handleOpen}
          link={window.location.pathname}
        />
        <SidebarOptions
          Icon={PermIdentityIcon}
          text="Profile"
          link={`/${user.username}`}
        />
        <SidebarOptions Icon={MoreHorizIcon} text="More" link="#" />
        <PostScreen />
      </Stack>
      <Stack paddingRight={isDesktop ? "30px" : "0"}>
        {isDesktop ? <BasicMenu /> : <BasicMenuForMobile />}
      </Stack>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "25%",
            height: "25%",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 8,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Who are you ?
          </Typography>
          <Typography variant="span" sx={{ mt: 2, alignItems: "center" }}>
            Choose the right subscription for you:
          </Typography>
        </Box>
      </Modal>
    </Stack>
  );
};
