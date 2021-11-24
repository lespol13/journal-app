import Swal from "sweetalert2";

import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import { uiStartLoading, uiFinishLoading } from "./ui";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(uiStartLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(login(user.uid, user.displayName));
        dispatch(uiFinishLoading());
      })
      .catch((error) => {
        console.log(error);
        dispatch(uiFinishLoading());
        Swal.fire("Error", error.message, "error");
      });
  };
};

export const startRegister = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Error", error.message, "error");
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const startLogout = () => {
  return async (dispacth) => {
    await firebase.auth().signOut();
    dispacth(logout());
  };
};

export const logout = () => ({ type: types.logout });
