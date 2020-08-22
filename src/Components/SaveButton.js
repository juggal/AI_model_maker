import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//  add style object to the component
const useStyles = makeStyles((theme) => ({
  buttonAlign: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(3, 0, 0, 0),
  },
}));

export default function SaveButton() {
  const classes = useStyles();
  return (
    <div className={classes.buttonAlign}>
      <Button size="small" color="primary" variant="contained">
        Save
      </Button>
    </div>
  );
}
