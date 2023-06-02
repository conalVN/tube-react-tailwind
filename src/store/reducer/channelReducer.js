import actionTypes from "../action/actionTypes";

const initState = {
  detailChannel: null,
};

const channelReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_DETAIL_CHANNEL_SUCCESS:
      return {
        ...state,
        detailChannel: action.payload,
      };
    case actionTypes.GET_DETAIL_CHANNEL_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default channelReducer;
