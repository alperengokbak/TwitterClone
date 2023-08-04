import Sidebar from "./HomePage/Sidebar";
import Feed from "./HomePage/Feed";
import { Stack } from "@mui/material";
import Widget from "./HomePage/Widget";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginAndRegister/LoginScreen";
import RegisterScreen from "./LoginAndRegister/RegisterScreen";
import { createContext, useEffect, useState } from "react";
import { LoginAuthentication } from "./LoginAuthentication";

export const AuthContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  const checkUser = async () => {
    const user = await LoginAuthentication();
    if (user) {
      setUser(user);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  if (!user) {
    return (
      <AuthContext.Provider value={{ user, setUser }}>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginScreen />}></Route>
            <Route path="/register" element={<RegisterScreen />}></Route>
          </Routes>
        </Router>
      </AuthContext.Provider>
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginScreen />}></Route>
          <Route path="/register" element={<RegisterScreen />}></Route>
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

function HomePage() {
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
