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

function LayerTuning({ selectedLayer, saveLayerSettings }) {
  const classes = useStyles();

  const [currentSetting, setSetting] = useState("");
  const [fieldValues, setFieldValues] = useState({});

  const handleFieldValues = (value, type) => {
    setFieldValues((prevState) => ({ ...prevState, [type]: value }));
  };

  const save = () => {
    // saveLayerSettings(selectedLayer.layer_id, fieldValues);
    console.log(fieldValues);
  };

  useEffect(() => {
    setFieldValues({});
    setSetting(settingType(selectedLayer.layer_name));
  }, [selectedLayer]);

  const settingType = (layerName) => {
    switch (layerName) {
      case "Dense":
        return <DenseLayer onChange={handleFieldValues} save={save} />;

      case "Dropout":
        return <DropoutLayer onChange={handleFieldValues} save={save} />;

      case "Flatten":
        return (
          <Typography variant="body" gutterBottom align="center">
            No Settings
          </Typography>
        );

      case "Convolution":
        return <ConvolutionLayer onChange={handleFieldValues} save={save} />;

      case "MaxPool":
        return <MaxPoolLayer onChange={handleFieldValues} save={save} />;
      default:
        return null;
    }
  };

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
        {currentSetting}
      </form>
    </BaseMenu>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedLayer: state.layerSettings.selectedLayer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveLayerSettings: (layer_id, settings) =>
      dispatch(saveLayerSettings(layer_id, settings)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LayerTuning);
