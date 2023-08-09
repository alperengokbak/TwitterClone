import { Sidebar } from "./HomePage/Sidebar/Sidebar";
import Feed from "./HomePage/Feed/Feed";
import { Grid } from "@mui/material";
import Widget from "./HomePage/Widget/Widget";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginScreen from "./LoginAndRegister/LoginScreen";
import RegisterScreen from "./LoginAndRegister/RegisterScreen";
import { useEffect, useContext } from "react";
import { LoginAuthentication } from "./AuthenticationSystem/LoginAuthentication";
import { AuthContext } from "./AuthenticationSystem/AuthenticationSystem";

export const App = () => {
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
};

const HomePage = () => {
  return (
    <Grid container padding="0 10px">
      <Grid item xs={1.3} sm={1.3} md={1.3} lg={1.3} xl={3.7}>
        <Sidebar />
      </Grid>
      <Grid item xs={6.2} sm={6.2} md={6.2} lg={6.2} xl={3.8}>
        <Feed />
      </Grid>
      <Grid item xs={4.5} sm={4.5} md={4.5} lg={4.5} xl={4.5}>
        <Widget />
      </Grid>
    </Grid>
  );
};
