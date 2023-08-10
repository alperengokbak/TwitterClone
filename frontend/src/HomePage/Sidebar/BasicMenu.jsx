import React, { useContext } from "react";
import { Box, Avatar, Typography, IconButton, Stack } from "@mui/material";
import { AuthContext } from "../../AuthenticationSystem/AuthenticationSystem";
import { useNavigate } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";

export const BasicMenuForMobile = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "5px",
          marginBottom: "5px",
        }}
      >
        <Tooltip title="Accounts">
          <IconButton onClick={handleClick} size="small">
            <Avatar src="IMG_9021.jpeg" sx={{ width: 40, height: 40 }}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "bottom" }}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <MenuItem
          onClick={() => {
            setUser(null);
            localStorage.removeItem("token");
            navigate("/login");
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export const BasicMenu = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  return (
    <Box
      bgcolor="#FFFFFF"
      padding="10px"
      borderRadius="20px"
      style={{ cursor: "pointer" }}
    >
      <Box display="flex" alignItems="center">
        <Box display="flex" alignItems="space-between">
          <Avatar src="IMG_9021.jpeg" alt="Profile Photo" />
          <Box display="flex" flexDirection="column" paddingLeft={1}>
            <Typography variant="subtitle2">Alperen Gokbak</Typography>
            <Typography variant="body2" component="span" color="gray">
              @alperengokbak
            </Typography>
          </Box>
          <Box paddingLeft="20px">
            <IconButton
              aria-label="exit"
              onClick={() => {
                setUser(null);
                localStorage.removeItem("token");
                navigate("/login");
              }}
              sx={{
                borderRadius: "50%",
                color: "#000000",
              }}
            >
              <ExitToAppIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
