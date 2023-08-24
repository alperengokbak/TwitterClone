import React from "react";
import { Button, Grid, Stack, Avatar, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

export const EditProfile = ({ handleClose }) => {
  const fileInputRef = React.useRef(null);
  const [imageUrl, setImageUrl] = React.useState("");

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };
  const handleClearImage = () => {
    fileInputRef.current.value = "";
    setImageUrl("");
  };
  const handleBackgroundSelected = (event) => {
    const selectedFile = event.target.files[0];
    selectedFile && setImageUrl(URL.createObjectURL(selectedFile));
  };

  const handleAvatarFileSelected = (event) => {
    const selectedFile = event.target.files[0];
    selectedFile && setImageUrl(URL.createObjectURL(selectedFile));
  };

  return (
    <Grid
      container
      flexDirection="row"
      height="64vh"
      overflow="scroll"
      webkitoverflowscrolling="touch"
      sx={{
        borderRadius: "10px",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
      }}
    >
      <Grid
        item
        xs={12}
        position="sticky"
        zIndex={1}
        top={0}
        sx={{
          opacity: "0.95",
          backgroundColor: "#FFF",
        }}
      >
        <Stack
          flexDirection="row"
          alignContent="center"
          justifyContent="space-between"
          m={1}
        >
          <Stack flexDirection="row" alignItems="center">
            <CloseIcon
              sx={{
                top: "0",
                mr: "10px",
                left: "0",
                cursor: "pointer",
                opacity: "0.7",
                height: "22px",
                width: "22px",
                "&:hover": {
                  backgroundColor: "#D3D3D3",
                  borderRadius: "50%",
                },
              }}
              onClick={handleClose}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
              }}
            >
              Edit Profile
            </Typography>
          </Stack>
          <Stack>
            <Button
              sx={{
                textAlign: "center",
                backgroundColor: "#000",
                color: "#FFF",
                top: "0",
                right: "0",
                height: "30px",
                width: "22px",
                "&:hover": {
                  backgroundColor: "#D3D3D3",
                },
              }}
              onClick={() => {
                handleClearImage();
                handleClose();
              }}
              variant="contained"
            >
              Save
            </Button>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleBackgroundSelected}
          />
          <img
            src={"gray.png"}
            alt="background"
            style={{
              backgroundColor: "#000",
              objectFit: "cover",
              width: "100%",
              maxHeight: "200px",
            }}
          />
          <Button
            sx={{
              color: "#000",
              backgroundColor: "#000",
              opacity: "0.7",
              top: "-120px",
              left: "250px",
              height: "30px",
              width: "22px",
              "&:hover": {
                opacity: "0.8",
              },
            }}
          >
            <AddAPhotoIcon
              sx={{
                color: "#FFF",
                height: "30px",
                width: "22px",
              }}
              onClick={handleFileUpload}
            />
          </Button>
        </Stack>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/*Profile Details*/}
          <Stack
            flexDirection="row"
            justifyContent="flex-end"
            position="relative"
          >
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleAvatarFileSelected}
            />
            <Avatar
              alt="Alperen Gokbak"
              sx={{
                transform: "translateX(-50%) translateY(-50%)",
                top: "-15px",
                left: "80px",
                overflow: "hidden",
                position: "absolute",
                paddingBottom: "100%",
                padding: "0px",
                paddingTop: "-50px",
                width: "112px",
                height: "112px",
                border: "4px solid #FFFFFF",
              }}
            />
            <Button
              sx={{
                color: "#000",
                backgroundColor: "#000",
                opacity: "0.7",
                top: "-30px",
                left: "-488px",
                height: "30px",
                width: "22px",
                "&:hover": {
                  opacity: "0.8",
                },
              }}
            >
              <AddAPhotoIcon
                sx={{
                  color: "#FFF",
                  height: "30px",
                  width: "22px",
                }}
                onClick={handleFileUpload}
              />
            </Button>
          </Stack>
          <Stack
            sx={{
              marginTop: 2,
              top: "15px",
              padding: 1,
              border: "4px solid #FFFFFF",
            }}
          >
            <TextField
              fullWidth
              label="Name"
              placeholder="Name"
              sx={{
                marginBottom: "25px",
              }}
            />
            <TextField
              fullWidth
              label="Bio"
              placeholder="Bio"
              multiline
              rows={4}
              sx={{
                marginBottom: "25px",
              }}
            />
            <TextField
              fullWidth
              label="Location"
              placeholder="Location"
              sx={{
                marginBottom: "25px",
              }}
            />
            <TextField
              fullWidth
              label="Website"
              placeholder="Website"
              sx={{
                marginBottom: "25px",
              }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};
