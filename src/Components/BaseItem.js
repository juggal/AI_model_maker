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
import { removeLayer, setSelectedLayer } from "../redux";

// styling object for the component
const useStyles = makeStyles((theme) => ({
  layerSpacing: {
    margin: theme.spacing(2, 2),
  },
  listItem: {
    padding: theme.spacing(0.5, 8, 0.5, 2),
    marginRight: theme.spacing(2),
  },
  hover: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

function BaseItem({ id, text, index, removeLayer, setSelectedLayer }) {
  const classes = useStyles();
  return (
    <Paper elevation={2} className={classes.layerSpacing}>
      <ListItem className={classes.listItem}>
        <ListItemIcon>
          <IconButton edge="start" aria-label="drag layer">
            <DragHandleRounded />
          </IconButton>
        </ListItemIcon>
        <ListItemText
          className={classes.hover}
          onClick={() => setSelectedLayer(id, text)}
        >{`Layer ${index + 1}: ${text}`}</ListItemText>
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
    setSelectedLayer: (layer_id, layer_name) =>
      dispatch(setSelectedLayer(layer_id, layer_name)),
  };
};

export default connect(null, mapDispatchToProps)(BaseItem);
