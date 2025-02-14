
import { createSlice } from "@reduxjs/toolkit";
import { showMessage } from "app/store/fuse/messageSlice";
import firebaseService from "app/services/firebaseService";
import config from "../../services/firebaseService/firebaseServiceConfig";
import firebase from "firebase/compat/app";
import "firebase/auth";
import jwtService from "app/services/jwtService";
import { setUser, setUserData , setUserDataFirebase } from "./userSlice";
import history from "@history";
import { setLoginLoader } from "./loadersSlice";
import { setLoggedIn } from "./sharedData";
import { displayPopup, handleResponse, isString } from "./commonMethods";
import ds from "../../services/DataService";
import { InvestRoles } from "./constants";
import authRoles from "../authRoles";

export const submitLogin = (body) => async (dispatch) => {
  return ds
    .loginService(body)
    .then((res) => {
      dispatch(setLoginLoader(false));
      if (res && res.user && res.user.userId && res.user.role) {
        localStorage.setItem("cred", "1");
        localStorage.removeItem("loggedout");
        dispatch(setLoggedIn(true));
        dispatch(handleResponse("SUCCESSLOGIN", true));
        jwtService.setSession("ASD_8762hGSADGY9GAHSDG"); // res.user.userId
        const body = {
          userid: res.user.userId,
          role: [res.user.role],
// role: res.user.role == ZombRoles.superadmin ? authRoles.zombSuperAdmin :
          //   res.user.role == ZombRoles.admin ? authRoles.zombAdmin :
          //     res.user.role == ZombRoles.manager ? authRoles.zombManager :
          //       res.user.role == ZombRoles.player ? authRoles.zombUser :
          //         [], // guest
          roleid: res.user.role,
          roleName:
            res.user.role === InvestRoles.superadmin
              ? "Super Admin"
              : res.user.role === InvestRoles.admin
              ? "Admin"
              : res.user.role === InvestRoles.user
              ? "User"
              : "",
          data: {
            displayName: res.user.firstName
              ? `${res.user.firstName} ${res.user.lastName}`
              : "User",
            photoURL: "",
            email: res.user.email ? res.user.email : "",
            shortcuts: [], // setShortcutMenus(res.user.role),
          },
        };
        localStorage.setItem("ghuid", JSON.stringify(body));
        dispatch(setUser(body));
        dispatch(loginSuccess());
        dispatch(signedInDefaultRedirect(res.user.role));
      } else {
        if (res && res.error) {
          dispatch(displayPopup(res.error, "warning", 3000));
        } else {
          dispatch(handleResponse("TRYLATER", false));
        }
      }
    })
    .catch((e) => {
      dispatch(setLoggedIn(true));
      dispatch(setLoginLoader(false));
      const msg =
        e && e.response && e.response.data && isString(e.response.data)
          ? e.response.data
          : e &&
            e.response &&
            e.response.data &&
            e.response.data.data &&
            isString(e.response.data.data)
          ? e.response.data.data
          : "Something Went Wrong";
// console.log the error here
      dispatch(displayPopup(msg ? msg : "Something Went Wrong", "error", 2000));
    });
};
// this function is not working properly
export const submitLoginWithFireBase = (model) => async (dispatch) => {
  try {
    if (!firebaseService.auth) {
      console.warn(
        'Firebase Service didn"t initialize, check your configuration'
      );
  
      return () => false;
    }
    const { email, password, displayName } = model;
    /** return firebaseService.auth
.signInWithEmailAndPassword(email,password)    
.then((response) => {
      dispatch(setLoginLoader(true));
      dispatch(setUserDataFirebase(user));
  }
      ); */
    dispatch(setLoginLoader(true));
    // firebase.initializeApp(config);
    const userCredential = await firebaseService.auth().signInWithEmailAndPassword(email,password);
    const user = userCredential.user;

    const userData = {
      userid: user.uid,
      roleid: res.user.role,
      roleName:
        res.user.role === InvestRoles.superadmin
          ? "Super Admin"
          : res.user.role === InvestRoles.admin
          ? "Admin"
          : res.user.role === InvestRoles.user
          ? "User"
          : "",
      data: {
        displayName: user.displayName ? user.displayName : "User",
        photoURL: user.photoURL ? user.photoURL : "",
        email: user.email ? user.email : "",
        shortcuts: [], // setShortcutMenus(user.role),
      },
    };

    localStorage.setItem("cred", "1");
    localStorage.removeItem("loggedout");
    dispatch(setLoggedIn(true));
    dispatch(handleResponse("SUCCESSLOGIN", true));
    jwtService.setSession(user.uid);
    localStorage.setItem("ghuid", JSON.stringify(userData));
    dispatch(setUser(userData));
    dispatch(loginSuccess());
    dispatch(signedInDefaultRedirect(userData.roleid));
  } catch (error) {
    dispatch(setLoggedIn(false));
    dispatch(setLoginLoader(false));

    const msg =
      error && error.message && isString(error.message)
        ? error.message
        : "Something Went Wrong";

    dispatch(displayPopup(msg ? msg : "Something Went Wrong", "error", 2000));
  }
};

export const signedInDefaultRedirect = (id) => (dispatch, getState) => {
  const role = getState().auth.user.roleid ? getState().auth.user.roleid : id;
  history.push({
    pathname: "/venapp/dashboard",
  // pathname: '/apps/jic/items',
  });
  // if (Roles.admin == role || Roles.charity == role) {
  //   history.push({
  //     pathname: '/apps/dashboards/redc',
  //   });
  // }
  // else {
  //   history.push({
  //     pathname: '/apps/redc/requests',
  //   });
  // }
};

export const checkGimminie = (roleid) => (dispatch) => {
  const isSignIn =
    location.pathname == "" ||
    location.pathname == "/" ||
    location.pathname == "/login";
  const token = localStorage.getItem("userguid")
    ? localStorage.getItem("userguid")
    : false;
  if (!token) {
    localStorage.clear();
// if (isSignIn) {
    //   localStorage.clear();
    // } else {
    //   // dispatch(logoutUser());
    // }
    return;
  }
  if (isSignIn) {
    dispatch(signedInDefaultRedirect(roleid));
  }
};

const initialState = {
  success: false,
  errors: [],
};

const loginSlice = createSlice({
  name: "auth/login",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.success = true;
      state.errors = [];
    },
    loginError: (state, action) => {
      state.success = false;
      state.errors = action.payload;
    },
  },
  extraReducers: {},
});

export const { loginSuccess, loginError } = loginSlice.actions;

export default loginSlice.reducer;

// Helper function to get role name based on role id
function getRoleName(roleId) {
  switch (roleId) {
    case InvestRoles.superadmin:
      return "Super Admin";
    case InvestRoles.admin:
      return "Admin";
    case InvestRoles.user:
      return "User";
    default:
      return "";
  }
}

// This code includes the `submitLoginWithFirebase` function, which uses Firebase authentication. Replace the role-related logic with your actual roles and naming conventions. Adjust the Firebase configuration based on your project setup.