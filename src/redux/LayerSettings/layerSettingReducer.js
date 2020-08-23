import { SELECTED_LAYER, SAVE_LAYER_SETTINGS } from "./layerSettingTypes";

const initialState = {
  layerSettings: [],
  selectedLayer: {},
};

const layerSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_LAYER:
      return {
        ...state,
        selectedLayer: action.payload,
      };
    default:
      return state;
  }
};

export default layerSettingsReducer;
