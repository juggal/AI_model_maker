import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// add style object to the component
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "& .MuiSlider-root": {
      margin: theme.spacing(1),
      width: "20ch",
    },
    padding: theme.spacing(1, 1.5),
  },
}));

export default function BaseForm(props) {
  const classes = useStyles();
  return <form className={classes.root}>{props.children}</form>;
}
