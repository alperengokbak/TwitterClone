import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { Stack } from "@mui/material";
import Widget from "./Widget";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginAndRegister/LoginScreen";
import RegisterScreen from "./LoginAndRegister/RegisterScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/homepage"
          element={
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
          }
        ></Route>
        <Route path="/login" element={<LoginScreen />}></Route>
        <Route path="/register" element={<RegisterScreen />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
