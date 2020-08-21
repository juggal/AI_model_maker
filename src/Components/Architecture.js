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
import BaseMenu from "./BaseMenu";

// styling object for the component
const useStyles = makeStyles((theme) => ({
  heading: {
    padding: theme.spacing(1),
  },
  itemSpacing: {
    margin: theme.spacing(2, 2),
  },
  listItem: {
    padding: theme.spacing(0.5, 8, 0.5, 2),
  },
}));

export default function Architecture() {
  const classes = useStyles();
  return (
    <BaseMenu heading="Architecture">
      {[
        "Convolutional",
        "MaxPooling",
        "Flatten",
        "Dense",
        "Dense",
        "Dropout",
        "Dense",
      ].map((text, index) => (
        <Paper elevation={2} className={classes.itemSpacing}>
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
              >
                <DeleteRounded />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Paper>
      ))}
    </BaseMenu>
  );
}
