import React, { useState } from "react";
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

function Layers({ length, addLayer }) {
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
                  onClick={() =>
                    addLayer(uniqid("layer_"), text, length < 1 ? true : false)
                  }
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

const mapStateToProps = (state) => {
  return {
    length: state.architecture.layers.length,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addLayer: (layer_id, layer_type, isFirst) =>
      dispatch(addLayer(layer_id, layer_type, isFirst)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layers);
