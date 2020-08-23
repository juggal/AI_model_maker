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

// add style object to component
const useStyles = makeStyles((theme) => ({}));

export default function Layers() {
  const classes = useStyles();
  return (
    <BaseMenu heading="Layers" list>
      {["Dense", "Dropout", "Flatten", "Convolution", "MaxPool"].map(
        (text, index) => (
          <div>
            <ListItem>
              <ListItemText>{text}</ListItemText>
              <ListItemSecondaryAction>
                <IconButton color="primary" edge="end" aria-label="add layer">
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
