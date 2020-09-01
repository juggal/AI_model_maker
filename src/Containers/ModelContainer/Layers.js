import React from "react";
import {
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AddRounded } from "@material-ui/icons";
import BaseMenu from "../../Components/BaseMenu";

import { addLayer } from "../../redux";
import { connect } from "react-redux";

// unique id generator
import uniqid from "uniqid";

function Layers({ addLayer }) {
  return (
    <BaseMenu heading="Layers" list>
      {["Dense", "Dropout", "Flatten", "Convolution", "MaxPool"].map(
        (text, index) => (
          <div key={text}>
            <ListItem>
              <ListItemText>{text}</ListItemText>
              <ListItemSecondaryAction>
                <IconButton
                  color="primary"
                  edge="end"
                  aria-label="add layer"
                  onClick={() => addLayer(uniqid("layer_"), text)}
                >
                  <AddRounded />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="middle" />
          </div>
        )
      )}
    </BaseMenu>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addLayer: (layer_id, layer_type) =>
      dispatch(addLayer(layer_id, layer_type)),
  };
};

export default connect(null, mapDispatchToProps)(Layers);
