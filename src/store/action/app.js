import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import actionTypes from "./actionTypes";

export const login = (flag) => async (dispatch) => {
  try {
    signInWithPopup(auth, provider).then((data) => {
      console.log(data?.user);
      if (data?.user) {
        sessionStorage.setItem("access-token", data?.user?.accessToken);
        dispatch({
          type: actionTypes.LOGIN_SUCCESS,
          flag,
          infoUser: data?.user,
        });
      } else {
        dispatch({
          type: actionTypes.LOGIN_SUCCESS,
          flag: false,
        });
      }
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
