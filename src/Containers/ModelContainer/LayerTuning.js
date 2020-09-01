import React, { useState, useEffect, useRef } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import BaseMenu from "../../Components/BaseMenu";
import DenseLayer from "./LayerSettings/DenseLayer";
import DropoutLayer from "./LayerSettings/DropoutLayer";
import ConvolutionLayer from "./LayerSettings/CovolutionLayer";
import MaxPoolLayer from "./LayerSettings/MaxPoolLayer";

import { saveLayerSettings } from "../../redux";
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

function LayerTuning({ selectedLayer, saveLayerSettings, layerSettings }) {
  const classes = useStyles();

  const [currentLayer, setLayer] = useState("");
  const [fieldValues, setFieldValues] = useState({});
  const stateRef = useRef();
  stateRef.current = fieldValues;

  // update selected layer field values to state
  const handleFieldValues = (value, type) => {
    setFieldValues((prevState) => ({ ...prevState, [type]: value }));
  };

  // save the selected layer field values to store
  const save = () => {
    saveLayerSettings(selectedLayer.layer_id, stateRef.current);
  };

  // routines to execute on every layer change
  const handleLayerChange = () => {
    // reset states
    setFieldValues({});

    // fetch selected layer settings from store if exists
    const settings = layerSettings.filter(
      (layer) => layer.layer_id === selectedLayer.layer_id
    );

    // set currentLayer with fetched settings
    if (settings.length > 0) {
      setLayer(settingType(selectedLayer.layer_name, settings[0]));
    } else {
      setLayer(settingType(selectedLayer.layer_name, settings));
    }
  };

  // get layer component based on selected layer
  const settingType = (layerName, settings) => {
    switch (layerName) {
      case "Dense":
        return (
          <DenseLayer
            onChange={handleFieldValues}
            save={save}
            settings={settings}
            key={selectedLayer.layer_id}
            isFirst={selectedLayer.first_layer}
          />
        );

      case "Dropout":
        return (
          <DropoutLayer
            onChange={handleFieldValues}
            save={save}
            settings={settings}
            key={selectedLayer.layer_id}
          />
        );

      case "Flatten":
        return (
          <Typography variant="body" gutterBottom align="center">
            No Settings
          </Typography>
        );

      case "Convolution":
        return (
          <ConvolutionLayer
            onChange={handleFieldValues}
            save={save}
            settings={settings}
            key={selectedLayer.layer_id}
            isFirst={selectedLayer.first_layer}
          />
        );

      case "MaxPool":
        return (
          <MaxPoolLayer
            onChange={handleFieldValues}
            save={save}
            settings={settings}
            key={selectedLayer.layer_id}
          />
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    handleLayerChange();
  }, [selectedLayer]);

  return (
    <BaseMenu heading="Layer Tuning">
      <form className={classes.root}>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          align="left"
          gutterBottom
          className={classes.layerName}
        >
          {selectedLayer.layer_name}
        </Typography>
        {currentLayer}
      </form>
    </BaseMenu>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedLayer: state.layerSettings.selectedLayer,
    layerSettings: state.layerSettings.settings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveLayerSettings: (layer_id, settings) =>
      dispatch(saveLayerSettings(layer_id, settings)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LayerTuning);
