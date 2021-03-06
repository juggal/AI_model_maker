import { ADD_LAYER, REMOVE_LAYER, REORDER_LAYER } from "./architectureTypes";

export const addLayer = (layer_id, layer_type, first_layer) => {
  return {
    type: ADD_LAYER,
    payload: {
      layer_id: layer_id,
      layer_type: layer_type,
      first_layer: first_layer,
    },
  };
};

export const removeLayer = (layer_id) => {
  return {
    type: REMOVE_LAYER,
    payload: {
      layer_id: layer_id,
    },
  };
};
