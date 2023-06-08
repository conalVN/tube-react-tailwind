import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import actionTypes from "./actionTypes";

export const toggle = (flag) => ({
  type: actionTypes.TOGGLE_MENU,
  flag,
});

export const showMenu = (flag) => ({
  type: actionTypes.SHOW_MENU,
  flag,
});

export const login = (flag) => async (dispatch) => {
  try {
    signInWithPopup(auth, provider)
      .then((data) => {
        if (data?.user) {
          sessionStorage.setItem("access-token", data?.user?.accessToken);
          dispatch({
            type: actionTypes.LOGIN_SUCCESS,
            flag,
            infoUser: {
              displayName: data?.user?.displayName,
              photoURL: data?.user?.photoURL,
            },
            accessToken: data?.user?.accessToken,
          });
        } else {
          dispatch({
            type: actionTypes.LOGIN_FAIL,
            flag: false,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.LOGIN_FAIL,
          flag: false,
          accessToken: null,
          infoUser: null,
        });
      });
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      flag: false,
    });
  }
};

export const logout = () => async (dispatch) => {
  await auth.signOut();
  dispatch({
    type: actionTypes.LOGOUT,
  });
  sessionStorage.removeItem("access-token");
  localStorage.removeItem("");
};
