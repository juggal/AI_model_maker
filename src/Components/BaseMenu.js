import React from "react";
import { Paper, Typography, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// add style object to component
const useStyles = makeStyles((theme) => ({
  heading: {
    padding: theme.spacing(1),
  },
}));

export default function BaseMenu(props) {
  const classes = useStyles();
  return (
    <Paper>
      <Typography
        variant="h6"
        noWrap
        align="center"
        className={classes.heading}
      >
        {props.heading}
      </Typography>
      <List>{props.children}</List>
    </Paper>
  );
}
