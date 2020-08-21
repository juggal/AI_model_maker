import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import { DeleteRounded, DragHandleRounded } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

// styling object for the component
const useStyles = makeStyles((theme) => ({
  heading: {
    padding: theme.spacing(1),
  },
  itemSpacing: {
    margin: theme.spacing(2, 2),
  },
  listItem: {
    padding: theme.spacing(0.5, 1),
  },
}));

export default function Architecture() {
  const classes = useStyles();
  return (
    <div>
      <Paper>
        <Typography
          variant="h6"
          noWrap
          align="center"
          className={classes.heading}
        >
          Architecture
        </Typography>
        <List>
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
                <IconButton>
                  <DragHandleRounded />
                </IconButton>
                <ListItemText>{`Layer ${index + 1}: ${text}`}</ListItemText>
                <IconButton>
                  <DeleteRounded />
                </IconButton>
              </ListItem>
            </Paper>
          ))}
        </List>
      </Paper>
    </div>
  );
}
