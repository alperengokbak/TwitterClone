import React from "react";
import { Button, Grid, Stack } from "@mui/material";
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
import CloseIcon from "@mui/icons-material/Close";
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
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "480px",
            height: "390px",
            bgcolor: "background.paper",
            p: 8,
            borderRadius: "20px",
            boxShadow: 24,
          }}
        >
          <CloseIcon
            sx={{
              position: "absolute",
              top: "0",
              left: "0",
              cursor: "pointer",
              opacity: "0.7",
              height: "22px",
              width: "22px",
              m: 2,
              "&:hover": {
                backgroundColor: "#D3D3D3",
                borderRadius: "50%",
              },
            }}
            onClick={handleClose}
          />
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              mt: 4,
            }}
          >
            Who are you ?
          </Typography>
          <Typography variant="body2" textAlign="center" sx={{ mt: 2 }}>
            Choose the right subscription for you:
          </Typography>
          <Grid
            container
            height="15vh"
            display="flex"
            justifyContent="space-between"
            sx={{ mt: 3 }}
          >
            <Grid
              item
              xs={5.5}
              sx={{
                cursor: "pointer",
                border: "1px solid #D3D3D3",
                boxShadow: "0px 0px 5px 0px #D3D3D3",
                borderRadius: "15px",
                padding: "8px",
                "&:hover": {
                  backgroundColor: "#EAEAEA",
                },
              }}
            >
              <Stack
                spacing={0.3}
                paddingTop={2.5}
                paddingBottom={2}
                paddingLeft={2}
              >
                <Typography
                  variant="span"
                  sx={{
                    color: "#808080",
                  }}
                >
                  Premium
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  I'm an individual
                </Typography>
                <Typography
                  variant="span"
                  sx={{
                    fontSize: "15px",
                    color: "#808080",
                  }}
                >
                  For individuals and creators
                </Typography>
              </Stack>
            </Grid>
            <Grid
              item
              xs={5.5}
              sx={{
                border: "1px solid #D3D3D3",
                boxShadow: "0px 0px 5px 0px #D3D3D3",
                borderRadius: "15px",
                padding: "8px",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#EAEAEA",
                },
              }}
            >
              <Stack
                spacing={0.3}
                paddingTop={1.5}
                paddingBottom={1}
                paddingLeft={2}
              >
                <Typography
                  variant="span"
                  sx={{
                    color: "#808080",
                  }}
                >
                  Verified Organizations
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  I'm an organization
                </Typography>
                <Typography
                  variant="span"
                  sx={{
                    fontSize: "15px",
                    color: "#808080",
                  }}
                >
                  For business, government agencies, and non-profits
                </Typography>
              </Stack>
            </Grid>
            <Button
              fullWidth
              sx={{
                backgroundColor: "#000",
                mt: 4,
                height: "55px",
                borderRadius: "50px",
                "&:hover": {
                  backgroundColor: "#000",
                  opacity: "0.8",
                },
              }}
            >
              <Typography
                variant="body1"
                textAlign="center"
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Subscribe
              </Typography>
            </Button>
            <Stack width="100%">
              <Typography
                variant="body2"
                sx={{
                  textAlign: "center",
                  mt: 4,
                }}
              >
                Learn more about Premium and Verified Organizations
              </Typography>
            </Stack>
          </Grid>
        </Box>
      </Modal>
    </Stack>
  );
};
