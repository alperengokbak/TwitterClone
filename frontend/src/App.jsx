import { Sidebar } from "./HomePage/Sidebar/Sidebar";
import Feed from "./HomePage/Feed/Feed";
import { Grid } from "@mui/material";
import { Widget } from "./HomePage/Widget/Widget";
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
  //TODO - To remove the white space that is below the code blocks.
  return (
    <Grid container padding="0 10px">
      <Grid item xs={2} sm={2} md={3.1} lg={2.7} xl={3.7}>
        <Sidebar />
      </Grid>
      <Grid item xs={10} sm={10} md={5.5} lg={5.3} xl={4.3}>
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
        lg={4}
        xl={4}
      >
        <Widget />
      </Grid>
    </Grid>
  );
};
