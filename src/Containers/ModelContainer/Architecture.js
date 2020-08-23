import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BaseMenu from "../../Components/BaseMenu";
import BaseItem from "../../Components/BaseItem";

// styling object for the component
const useStyles = makeStyles((theme) => ({
  list: {
    paddingTop: theme.spacing(1),
    maxHeight: 530,
    overflow: "auto",
  },
}));

export default function Architecture() {
  const classes = useStyles();
  return (
    <BaseMenu heading="Architecture" list listStyle={classes.list}>
      {[
        "Convolutional",
        "MaxPooling",
        "Flatten",
        "Dense",
        "Dense",
        "Dropout",
        "Dense",
      ].map((text, index) => (
        <BaseItem text={text} index={index} />
      ))}
    </BaseMenu>
  );
}
