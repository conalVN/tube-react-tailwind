import actionTypes from "./actionTypes";
import * as actions from "../action";

export const getPopularVideo = () => async (dispatch) => {
  try {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/v3/videos?${new URLSearchParams({
        key: process.env.REACT_APP_API_KEY,
        part: "snippet, contentDetails, statistics",
        chart: "mostPopular",
        regionCode: "VN",
        maxResults: 50,
      })}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          dispatch({
            type: actionTypes.GET_VIDEOS_SUCCESS,
            payload: data,
          });
        } else {
          dispatch({
            type: actionTypes.GET_VIDEOS_FAIL,
            payload: data,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.GET_VIDEOS_FAIL,
          payload: err,
        });
      });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_VIDEOS_FAIL,
      payload: error,
    });
  }
};

export const getDetailVideo = (id) => async (dispatch) => {
  try {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/v3/videos?${new URLSearchParams({
        key: process.env.REACT_APP_API_KEY,
        part: "contentDetails, snippet, statistics",
        id: id,
      })}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: actionTypes.GET_DETAIL_VIDEO_SUCCESS,
          payload: data?.items[0],
        });
        dispatch(actions.getDetailChannel(data?.items[0]?.snippet?.channelId));
      })
      .catch((err) =>
        dispatch({
          type: actionTypes.GET_DETAIL_VIDEO_FAIL,
          payload: err,
        })
      );
  } catch (error) {
    dispatch({
      type: actionTypes.GET_DETAIL_VIDEO_FAIL,
      payload: error,
    });
  }
};

export const getComment = (id) => async (dispatch) => {
  try {
    fetch(
      `${
        process.env.REACT_APP_BASE_URL
      }/v3/commentThreads?${new URLSearchParams({
        key: process.env.REACT_APP_API_KEY,
        part: "id, snippet, replies",
        videoId: id,
        order: "time",
      })}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: actionTypes.GET_COMMENT_SUCCESS,
          payload: data?.items,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.GET_COMMENT_FAIL,
          payload: err,
        });
      });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_COMMENT_FAIL,
      payload: error,
    });
  }
};
