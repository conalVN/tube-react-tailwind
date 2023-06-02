import actionTypes from "./actionTypes";

export const getDetailChannel = (id) => async (dispatch) => {
  try {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/v3/channels?${new URLSearchParams({
        key: process.env.REACT_APP_API_KEY,
        part: "snippet, statistics, contentDetails",
        id: id,
      })}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: actionTypes.GET_DETAIL_CHANNEL_SUCCESS,
          payload: data?.items[0],
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.GET_DETAIL_CHANNEL_FAIL,
          payload: err,
        });
      });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_DETAIL_CHANNEL_FAIL,
      payload: error,
    });
  }
};
