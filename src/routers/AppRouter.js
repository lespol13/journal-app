import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { firebase } from "../firebase/firebaseConfig";
import AuthRouter from "./AuthRouter";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import JournalScreen from "../components/journal/JournalScreen";

const AppRouter = () => {
  const [isChecking, setIsChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setIsChecking(false);
    });
  }, [dispatch]);

  return !isChecking ? (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isAuth={isLoggedIn}
            path="/auth"
            component={AuthRouter}
          />
          <PrivateRoute
            exact
            isAuth={isLoggedIn}
            path="/"
            component={JournalScreen}
          />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  ) : (
    <div className="auth__main">
      <h1 className="auth__title-wait">Espere ...</h1>
    </div>
  );
};

export default AppRouter;
