import * as types from "./actionTypes";
import { auth, googleAuthProvider } from "../../firebase";


const signupRequest = () => {
  return {
    type: types.SIGNUP_REQUEST,
  };
};
const signupSuccess = (user) => {
  return {
    type: types.SIGNUP_SUCCESS,
    payload: user,
  };
};
const signupFailure = (error) => {
  return {
    type: types.SIGNUP_FAILURE,
    payload: error,
  };
};

const loginRequest = () => {
  return {
    type: types.LOGIN_REQUEST,
  };
};
const loginSuccess = (user) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: user,
  };
};
const loginFailure = (error) => {
  return {
    type: types.LOGIN_FAILURE,
    payload: error,
  };
};

const logoutRequest = () => {
  return {
    type: types.LOGOUT_REQUEST,
  };
};
const logoutSuccess = () => {
  return {
    type: types.LOGOUT_SUCCESS,
  };
};
const logoutFailure = (error) => {
  return {
    type: types.LOGOUT_FAILURE,
    payload: error,
  };
};

export const setUser = (user)=>({
  type: types.SET_USER,
  payload:user,
})


const googleSigninRequest = () => {
  return {
    type: types.GOOGLE_SIGNIN_REQUEST,
  };
};
const googleSigninSuccess = (user) => {
  return {
    type: types.GOOGLE_SIGNIN_SUCCESS,
    payload: user,
  };
};
const googleSigninFailure = (error) => {
  return {
    type: types.GOOGLE_SIGNIN_FAILURE,
    payload: error,
  };
};



export const signupInit = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(signupRequest());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName,
        });
        alert("Login Success!!")
        dispatch(signupSuccess(user));
      })
      .catch((error) => {
        alert("Login Failed!!.. Data already registerd !!")
        dispatch(signupFailure(error))
      });
  };
};

export const loginInit = (email, password) => {
  return function (dispatch) {
    dispatch(loginRequest());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        alert("Login Success!!")
        dispatch(loginSuccess(user));
      })
      .catch((error) => {
        alert("Login Failed!!.. Wrong information!!!")
        dispatch(loginFailure(error.massage))
      });
  };
};

export const logoutInit = () => {
  return function (dispatch) {
    dispatch(logoutRequest());
    auth
      .signOut()
      .then((res) => dispatch(logoutSuccess()))
      .catch((error) => dispatch(logoutFailure(error.massage)));
  };
};



export const googleSigninInit = () => {
  return function (dispatch) {
    dispatch(googleSigninRequest());
    auth
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(googleSigninSuccess(user));
      })
      .catch((error) => {
        dispatch(googleSigninFailure(error.massage))
      });
  };
};