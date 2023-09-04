import { Grid, Stack, SvgIcon, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";

export const CommentScreen = () => {
  return (
    <Grid
      flexDirection="row"
      height="100vh"
      overflow="scroll"
      minWidth="fit-content"
      webkitoverflowscrolling="touch"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
      }}
    >
      <Grid item position="sticky" mt={1}>
        <Stack flexDirection="row" alignItems="center">
          <SvgIcon
            className="postBackButton"
            onClick={() => {
              window.history.back();
            }}
          >
            <ArrowBackIcon />
          </SvgIcon>
          <Stack flexDirection="row" justifyItems="flex-start" ml={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
              }}
            >
              Post
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid
        item
        xs={12}
        maxHeight="calc(100vh - 58px)"
        sx={{
          overflow: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      ></Grid>
    </Grid>
  );
};
