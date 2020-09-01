import {
  SELECTED_LAYER,
  SAVE_LAYER_SETTINGS,
  UPDATE_LAYER_SETTINGS,
} from "./layerSettingTypes";

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
    case UPDATE_LAYER_SETTINGS:
      return {
        ...state,
        settings: Object.assign(
          state.settings[
            state.settings.findIndex(
              (setting) => setting.layer_id === action.payload.layer_id
            )
          ],
          action.payload
        ),
      };
    default:
      return state;
  }
};

export default layerSettingsReducer;
