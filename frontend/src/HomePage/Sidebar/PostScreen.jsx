import * as React from "react";
import { Box, Button, Grid, Modal, Stack } from "@mui/material";
import TweetBox from "./TweetBoxForPostScreen";

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack>
      <Grid
        marginTop="20px"
        height="10px"
        borderRadius="30px"
        textTransform={"inherit"}
        border={"none"}
      >
        <Button
          variant="contained"
          fullWidth
          color="secondary"
          sx={{
            background: "#1DA1F2",
            border: "none",
            borderRadius: "30px",
            fontWeight: "900",
            marginTop: "20px",
            height: "50px",
            width: "230px",
            textTransform: "inherit",
          }}
          onClick={handleOpen}
        >
          Post
        </Button>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{}}
      >
        <Box sx={style}>
          <TweetBox />
        </Box>
      </Modal>
    </Stack>
  );
};
