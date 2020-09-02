import { SAVE_COMPILE_SETTINGS } from "./compileSettingTypes";

const initialState = {
  settings: {},
};

const compileSettingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_COMPILE_SETTINGS:
      return {
        ...state,
        settings: action.payload,
      };
    default:
      return state;
  }
};

export default compileSettingReducer;
