import actionTypes from "../action/actionTypes";

const initState = {
  videos: null,
  detail: null,
  comments: null,
  nextPageToken: null,
};
const videoReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: action.payload.items || null,
        nextPageToken: action.payload.nextPageToken || null,
      };
    case actionTypes.GET_VIDEOS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.GET_DETAIL_VIDEO_SUCCESS:
      return {
        ...state,
        detail: action.payload,
      };
    case actionTypes.GET_DETAIL_VIDEO_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case actionTypes.GET_COMMENT_SUCCESS:
      return {
        ...state,
        comments: action.payload,
      };
    case actionTypes.GET_COMMENT_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    default:
      return state;
  }
};

export default videoReducer;
