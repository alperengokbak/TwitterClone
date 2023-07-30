import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { Stack } from "@mui/material";
import Widget from "./Widget";

function App() {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        maxWidth: "1300px",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "0 10px",
      }}
    >
      <Sidebar />
      <Feed />
      <Widget />
    </Stack>
  );
}

export default App;
