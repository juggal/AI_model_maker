import { combineReducers } from "redux";
import architectureReducer from "./Architecture/architectureReducer";
import layerSettingReducer from "./LayerSettings/layerSettingReducer";

const rootReducer = combineReducers({
  architecture: architectureReducer,
  layerSettings: layerSettingReducer,
});

export default rootReducer;
