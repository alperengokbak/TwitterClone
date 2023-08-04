import Sidebar from "./HomePage/Sidebar";
import Feed from "./HomePage/Feed";
import { Stack } from "@mui/material";
import Widget from "./HomePage/Widget";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginScreen from "./LoginAndRegister/LoginScreen";
import RegisterScreen from "./LoginAndRegister/RegisterScreen";
import { useEffect, useContext } from "react";
import { LoginAuthentication } from "./LoginAuthentication";
import { AuthContext } from "./AuthenticationSystem";

function App() {
  const { user, setUser } = useContext(AuthContext);
  const checkUser = async () => {
    const user = await LoginAuthentication();
    if (user) {
      setUser(user);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <LoginScreen />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <RegisterScreen />}
        />
        {user ? (
          <Route path="/" element={<HomePage />} />
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
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
