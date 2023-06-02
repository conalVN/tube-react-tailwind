import actionTypes from "../action/actionTypes";

const initState = {
  isLogin: false,
  infoUser: null,
  statusSubscribe: false,
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: action.flag,
        infoUser: action.infoUser,
      };
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLogin: action.flag,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLogin: false,
      };
    case actionTypes.SUB_CHANNEL:
      return {
        ...state,
        statusSubscribe: action.status,
      };
    default:
      return state;
  }
};

export default appReducer;
