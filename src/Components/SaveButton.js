import React, { useState } from "react";
import { Button, Snackbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";

//  add style object to the component
const useStyles = makeStyles((theme) => ({
  buttonAlign: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(3, 0, 0, 0),
  },
}));

function SaveButton({ layers, selectedLayerId, save }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleClick = (layers, selectedLayerId) => {
    // search for if current selected layer exists
    // in layers array
    const index = layers.findIndex((layer) => {
      if (layer.layer_id === selectedLayerId) {
        return true;
      }
    });
    // set message based on if layer exists or not
    if (index === -1) {
      setMessage("Save Failed");
    } else {
      save();
      setMessage("Save successfully");
    }
    // open the snackbar
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.buttonAlign}>
      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={() => handleClick(layers, selectedLayerId)}
      >
        Save
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: "Top", horizontal: "Right" }}
        open={open}
        onClose={handleClose}
        message={message}
        key={{ vertical: "Top", horizontal: "Right" }}
        autoHideDuration={3000}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    layers: state.architecture.layers,
    selectedLayerId: state.layerSettings.selectedLayer.layer_id,
  };
};

export default connect(mapStateToProps)(SaveButton);
