import React from "react";
import {
  Paper,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { DeleteRounded, DragHandleRounded } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";
import { removeLayer } from "../redux";

// styling object for the component
const useStyles = makeStyles((theme) => ({
  layerSpacing: {
    margin: theme.spacing(2, 2),
  },
  list: {
    paddingTop: theme.spacing(1),
    maxHeight: 530,
    overflow: "auto",
  },
  listItem: {
    padding: theme.spacing(0.5, 8, 0.5, 2),
  },
}));

function BaseItem({ id, text, index, removeLayer }) {
  const classes = useStyles();
  return (
    <Paper elevation={2} className={classes.layerSpacing}>
      <ListItem className={classes.listItem}>
        <ListItemIcon>
          <IconButton edge="start" aria-label="drag layer">
            <DragHandleRounded />
          </IconButton>
        </ListItemIcon>
        <ListItemText>{`Layer ${index + 1}: ${text}`}</ListItemText>
        <ListItemSecondaryAction>
          <IconButton
            color="secondary"
            edge="end"
            aria-label="delete layer"
            onClick={() => removeLayer(id)}
          >
            <DeleteRounded />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Paper>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeLayer: (layer_id) => dispatch(removeLayer(layer_id)),
  };
};

export default connect(null, mapDispatchToProps)(BaseItem);
