import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import appReducer from "./appReducer";
import videoReducer from "./videoReducer";
import channelReducer from "./channelReducer";

const comonConfig = {
  storage: storage,
  stateReconsiler: autoMergeLevel2,
};
const videoConfig = {
  ...comonConfig,
  key: "yt",
  whilelist: [""],
};

const rootReducer = combineReducers({
  app: appReducer,
  video: persistReducer(videoConfig, videoReducer),
  channel: channelReducer,
});

export default rootReducer;
