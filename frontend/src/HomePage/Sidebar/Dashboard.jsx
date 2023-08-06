import React, { useContext } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Stack, Grid } from "@mui/material";
import { AuthContext } from "../../AuthenticationSystem/AuthenticationSystem";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const BasicMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="contained"
        fullWidth
        color="secondary"
        endIcon={<MoreHorizIcon />}
        sx={{
          background: "#1DA1F2",
          border: "none",
          borderRadius: "30px",
          fontWeight: "900",
          height: "50px",
          width: "230px",
          textTransform: "inherit",
        }}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem
          onClick={() => {
            setUser(null);
            localStorage.removeItem("token");
            navigate("/login");
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </Stack>
  );
};
