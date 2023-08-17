import Feed from "./MainPage/Home/Feed";
import { Grid } from "@mui/material";
import { Widget } from "./MainPage/Home/Widget";
import { Sidebar } from "./MainPage/Sidebar/Sidebar";

export const HomePage = () => {
  //TODO - Separate the Sidebar component from the App.jsx file.
  // TODO - Feed boyutunu ayarla.
  return (
    <Grid container height="100vh">
      <Grid item xs={2} sm={2} md={4.5} lg={3} xl={3.8}>
        <Sidebar />
      </Grid>
      <Grid item xs={10} sm={10} md={7.5} lg={5} xl={4.2}>
        <Feed />
      </Grid>
      <Grid
        item
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          },
        }}
        lg={4}
        xl={4}
      >
        <Widget />
      </Grid>
    </Grid>
  );
};
