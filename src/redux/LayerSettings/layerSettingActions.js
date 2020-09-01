import { SELECTED_LAYER, SAVE_LAYER_SETTINGS } from "./layerSettingTypes";

export const setSelectedLayer = (layer_id, layer_name, first_layer) => {
  return {
    type: SELECTED_LAYER,
    payload: {
      layer_id: layer_id,
      layer_name: layer_name,
      first_layer: first_layer,
    },
  };
};

export const saveLayerSettings = (layer_id, settings) => {
  return {
    type: SAVE_LAYER_SETTINGS,
    payload: {
      layer_id,
      ...settings,
    },
  };
};
