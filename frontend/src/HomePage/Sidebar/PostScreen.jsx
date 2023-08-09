import * as React from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  useMediaQuery,
} from "@mui/material";
import { TweetBoxForPostScreen } from "./TweetBoxForPostScreen";
import SendIcon from "@mui/icons-material/Send";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 530,
  height: 230,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

export const PostScreen = () => {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid
        height="10px"
        borderRadius="30px"
        textTransform={"inherit"}
        border={"none"}
        marginLeft={isDesktop ? "0px" : "4px"}
      >
        {isDesktop ? (
          <Button
            variant="contained"
            fullWidth
            color="secondary"
            sx={{
              background: "#1DA1F2",
              border: "none",
              borderRadius: "30px",
              fontWeight: "900",
              height: "50px",
              width: "230px",
              textTransform: "inherit",
            }}
            onClick={handleOpen}
          >
            Post
          </Button>
        ) : (
          <IconButton
            aria-label="send"
            title="Send"
            sx={{
              color: "#1DA1F2",
              background: "#FFFFFF",
              border: "none",
              borderRadius: "50px",
              textTransform: "inherit",
              "&:hover": {
                color: "#000000",
              },
            }}
            onClick={handleOpen}
          >
            <SendIcon />
          </IconButton>
        )}
      </Grid>
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
