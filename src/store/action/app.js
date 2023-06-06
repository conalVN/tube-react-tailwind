import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import actionTypes from "./actionTypes";
import { getSubscriptions } from "./channel";

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
            infoUser: data?.user,
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
};

export const checkSubcribe = (channelId) => async (dispatch) => {
  try {
    // fetch(`${process.env.REACT_APP_BASE_URL}/v3/subscriptions`, {
    //   part: "snippet",
    //   forChannelId: channelId,
    //   mine: true,
    //   headers: {
    //     Authentication: `Bearer ${sessionStorage.getItem("access-token")}`,
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};
