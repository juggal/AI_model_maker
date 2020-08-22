import React, { useState } from "react";
import { Paper, Typography, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// add style object to component
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}));

export default function BaseMenu(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h6" noWrap align="center">
        {props.heading}
      </Typography>
      {props.list ? (
        <List classes={{ root: props.listStyle }}>{props.children}</List>
      ) : (
        props.children
      )}
    </Paper>
  );
}
