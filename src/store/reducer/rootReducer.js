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
const appConfig = {
  ...comonConfig,
  key: "yt-app",
  whilelist: ["infoUser"],
};
const videoConfig = {
  ...comonConfig,
  key: "yt-video",
  whilelist: [""],
};

const rootReducer = combineReducers({
  app: persistReducer(appConfig, appReducer),
  video: persistReducer(videoConfig, videoReducer),
  channel: channelReducer,
});

export default rootReducer;
