import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AddRounded } from "@material-ui/icons";

// styling object of the component
const useStyles = makeStyles((theme) => ({
  heading: {
    padding: theme.spacing(1),
  },
}));

export default function Layers() {
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
          Layers
        </Typography>
        <List>
          {["Dense", "Dropout", "Flatten", "Convolution", "MaxPool"].map(
            (text, index) => (
              <div>
                <ListItem button>
                  <ListItemText>{text}</ListItemText>
                  <ListItemIcon>
                    <AddRounded />
                  </ListItemIcon>
                </ListItem>
                <Divider variant="middle" />
              </div>
            )
          )}
        </List>
      </Paper>
    </div>
  );
}
