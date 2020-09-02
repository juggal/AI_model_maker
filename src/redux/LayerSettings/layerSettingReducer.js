import {
  SELECTED_LAYER,
  SAVE_LAYER_SETTINGS,
  UPDATE_LAYER_SETTINGS,
} from "./layerSettingTypes";

const initialState = {
  settings: [],
  selectedLayer: {},
};

const layerSettingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_LAYER:
      return {
        ...state,
        selectedLayer: action.payload,
      };
    case SAVE_LAYER_SETTINGS:
      return {
        ...state,
        settings: state.settings.concat(action.payload),
      };
    case UPDATE_LAYER_SETTINGS:
      const updatedSettings = state.settings.map((setting) => {
        if (setting.layer_id === action.payload.layer_id) {
          return action.payload;
        }
        return setting;
      });
      return {
        ...state,
        settings: updatedSettings,
      };

    default:
      return state;
  }
};

export default layerSettingReducer;
