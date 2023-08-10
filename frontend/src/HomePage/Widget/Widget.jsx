import React from "react";
import { Grid, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Widget = () => {
  return (
    <Grid container padding={"0 20px"} direction={"column"}>
      <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
        <TextField
          variant="outlined"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#808080" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            width: "100%",
            borderRadius: "30px",
          }}
        />
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
        <Typography variant={"h6"} sx={{ fontWeight: "bold" }}>
          What's happening
        </Typography>
      </Grid>
    </Grid>
  );
};
