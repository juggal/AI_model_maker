import React, { useState, useEffect } from "react";
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

function LayerTuning({
  selectedLayer,
  saveLayerSettings,
  selectedLayerSettings,
}) {
  const classes = useStyles();

  const [settings, setSettings] = useState({});
  const [currentLayer, setLayer] = useState("");
  const [fieldValues, setFieldValues] = useState({});
  const [saving, setSaving] = useState(false);

  // update selected layer field values to state
  const handleFieldValues = (value, type) => {
    setFieldValues((prevState) => ({ ...prevState, [type]: value }));
  };

  // save the selected layer field values to store
  const save = () => {
    setSaving(true);
  };

  // routines to execute on every layer change
  const handleLayerChange = () => {
    // fetch selected layer settings from store if exists
    const settings = selectedLayerSettings.filter(
      (layer) => layer.layer_id === selectedLayer.layer_id
    );

    // set settings state
    setSettings(settings);

    //set current layer to new layer
    setLayer(settingType(selectedLayer.layer_name));

    // reset the field values state
    setFieldValues({});
  };

  // get layer component based on selected layer
  const settingType = (layerName) => {
    switch (layerName) {
      case "Dense":
        return (
          <DenseLayer
            onChange={handleFieldValues}
            save={save}
            settings={settings}
          />
        );

      case "Dropout":
        return (
          <DropoutLayer
            onChange={handleFieldValues}
            save={save}
            settings={settings}
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
          />
        );

      case "MaxPool":
        return (
          <MaxPoolLayer
            onChange={handleFieldValues}
            save={save}
            settings={settings}
          />
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    if (saving) {
      saveLayerSettings(selectedLayer.layer_id, fieldValues);
      setSaving(false);
      return;
    }
    handleLayerChange();
  }, [selectedLayer, saving]);

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
    selectedLayerSettings: state.layerSettings.settings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveLayerSettings: (layer_id, settings) =>
      dispatch(saveLayerSettings(layer_id, settings)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LayerTuning);
