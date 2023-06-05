import actionTypes from "../action/actionTypes";

const initState = {
  videos: null,
  shorts: null,
  detail: null,
  comments: null,
  videosSerch: null,
  relatedVideos: null,
  nextPageToken: null,
  curIndex: 0,
};
const videoReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: action.payload.items || null,
        shorts: action.payload.shorts || null,
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
    case actionTypes.GET_RELATED_VIDEO_SUCCESS:
      return {
        ...state,
        relatedVideos: action.payload,
      };
    case actionTypes.GET_RELATED_VIDEO_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case actionTypes.SEARCH_VIDEO_SUCCESS:
      return {
        ...state,
        videosSerch: action.payload,
      };
    case actionTypes.SEARCH_VIDEO_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case actionTypes.SET_CUR_INDEX:
      return {
        ...state,
        curIndex: action.index,
      };
    default:
      return state;
  }
};

export default videoReducer;
