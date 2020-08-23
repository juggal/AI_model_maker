import { ADD_LAYER, REMOVE_LAYER, REORDER_LAYER } from "./architectureTypes";

const itnitialState = {
  layers: [],
};

const architectureReducer = (state = itnitialState, action) => {
  switch (action.type) {
    case ADD_LAYER:
      return {
        ...state,
        layers: state.layers.concat(action.payload),
      };

    case REMOVE_LAYER:
      return {
        ...state,
        layers: state.layers.filter(
          (layer) => layer.layer_id !== action.payload.layer_id
        ),
      };
    default:
      return state;
  }
};

export default architectureReducer;
