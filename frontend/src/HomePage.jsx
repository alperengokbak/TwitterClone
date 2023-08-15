import Feed from "./MainPage/Home/Feed";
import { Grid } from "@mui/material";
import { Widget } from "./MainPage/Home/Widget";
import { Sidebar } from "./MainPage/Sidebar/Sidebar";

export const HomePage = () => {
  //TODO - Separate the Sidebar component from the App.jsx file.
  return (
    <Grid container height="100vh">
      <Grid item xs={2} sm={2} md={3.1} lg={2.7} xl={3.7}>
        <Sidebar />
      </Grid>
      <Grid item xs={10} sm={10} md={5.5} lg={5.6} xl={4.4}>
        <Feed />
      </Grid>
      <Grid
        item
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          },
        }}
        md={3.4}
        lg={3.7}
        xl={3.6}
      >
        <Widget />
      </Grid>
    </Grid>
  );
};
