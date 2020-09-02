import { combineReducers } from "redux";
import architectureReducer from "./Architecture/architectureReducer";
import layerSettingReducer from "./LayerSettings/layerSettingReducer";
import compileSettingReducer from "./CompileSettings/compileSettingReducer";

const rootReducer = combineReducers({
  architecture: architectureReducer,
  layerSettings: layerSettingReducer,
  compileSettings: compileSettingReducer,
});

export default rootReducer;
