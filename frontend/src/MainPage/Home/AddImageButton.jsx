import React from "react";
import { Button, Stack, Avatar, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AuthContext } from "../../AuthenticationSystem/AuthenticationSystem";

export const AddImageButton = ({ onClose, onSave }) => {
  const [imageUrl, setImageUrl] = React.useState("");
  const { user } = React.useContext(AuthContext);

  const handleSaveClick = () => {
    onSave(imageUrl);
    onClose();
  };

  return (
    <form
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Avatar alt={user.username} src={user.profile_picture} />
        <Grid container direction="column">
          <Grid item>
            <TextField
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              placeholder="Enter image URL:"
              value={imageUrl}
              multiline
              rows={3}
              onChange={(e) => setImageUrl(e.target.value)}
              sx={{
                marginLeft: "5%",
                fontSize: "20px",
              }}
            />
          </Grid>
        </Grid>
      </Stack>
      <Stack flexDirection={"row"} justifyContent={"flex-end"}>
        <Button
          className="tweetBox__tweetButton"
          variant="contained"
          color="primary"
          onClick={handleSaveClick}
          sx={{
            width: "80px",
            textTransform: "inherit",
          }}
        >
          Save
        </Button>
      </Stack>
    </form>
  );
};
