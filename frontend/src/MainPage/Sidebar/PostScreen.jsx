import * as React from "react";
import { Box, Button, IconButton, Modal, Stack } from "@mui/material";
import { TweetBoxForPostScreen } from "./TweetBoxForPostScreen";
import SendIcon from "@mui/icons-material/Send";
import { AuthContext } from "../../AuthenticationSystem/AuthenticationSystem";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  height: "20%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

export const PostScreen = () => {
  const { isDesktop, user } = React.useContext(AuthContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Stack
        marginTop={"15px"}
        borderRadius="30px"
        textTransform={"inherit"}
        border={"none"}
        marginLeft={isDesktop ? "0px" : "4px"}
      >
        {isDesktop ? (
          <Button variant="contained" fullWidth onClick={handleOpen}>
            Post
          </Button>
        ) : (
          <IconButton aria-label="send" title="Send" onClick={handleOpen}>
            <SendIcon />
          </IconButton>
        )}
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TweetBoxForPostScreen />
        </Box>
      </Modal>
    </>
  );
};
