import actionTypes from "../action/actionTypes";

const initState = {
  isLogin: false,
  infoUser: null,
  statusSubscribe: false,
  isToggle: false,
  isShowMenu: false,
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
    case actionTypes.TOGGLE_MENU:
      return {
        ...state,
        isToggle: action.flag,
      };
    case actionTypes.SHOW_MENU:
      return {
        ...state,
        isShowMenu: action.flag,
      };
    default:
      return state;
  }
};

export default appReducer;
