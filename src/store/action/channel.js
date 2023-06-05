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

// export const checkSubscribeChannel = (id) => async (dispatch) => {
//   try {
//     fetch(
//       `${process.env.REACT_APP_BASE_URL}/v3/subscriptions?${new URLSearchParams(
//         {
//           key: process.env.REACT_APP_API_KEY,
//           part: "snippet, subscriberSnippet, contentDetails",
//           forChannelId: id,
//           mine: true,
//           access_token: sessionStorage.getItem("access-token"),
//         }
//       )}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         dispatch({
//           type: actionTypes.CHECK_SUBS_SUCCESS,
//           payload: data,
//         });
//       })
//       .catch((err) => {
//         dispatch({
//           type: actionTypes.CHECK_SUBS_FAIL,
//           payload: err,
//         });
//       });
//   } catch (error) {
//     dispatch({
//       type: actionTypes.CHECK_SUBS_FAIL,
//       payload: error,
//     });
//   }
// };
