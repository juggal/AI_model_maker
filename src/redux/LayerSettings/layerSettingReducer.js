import { SELECTED_LAYER, SAVE_LAYER_SETTINGS } from "./layerSettingTypes";

const initialState = {
  settings: [],
  selectedLayer: {},
};

const layerSettingsReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default layerSettingsReducer;
