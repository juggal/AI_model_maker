import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

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
  layerName: {
    padding: theme.spacing(1, 0),
  },
}));

function BaseForm({ layerName, children }) {
  const classes = useStyles();
  return (
    <form className={classes.root}>
      <Typography
        variant="subtitle2"
        color="textSecondary"
        align="left"
        gutterBottom
        className={classes.layerName}
      >
        {layerName}
      </Typography>
      {children}
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    layerName: state.layerSettings.selectedLayer.layer_name,
  };
};

export default connect(mapStateToProps)(BaseForm);
