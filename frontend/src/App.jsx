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
import { HomePage } from "./HomePage";

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
  // TODO - Create a profile page and provide navigation to it, but only if the user is logged in
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
