import { SELECTED_LAYER, SAVE_LAYER_SETTINGS } from "./layerSettingTypes";

export const setSelectedLayer = (layer_id, layer_name) => {
  return {
    type: SELECTED_LAYER,
    payload: {
      layer_id: layer_id,
      layer_name: layer_name,
    },
  };
};
