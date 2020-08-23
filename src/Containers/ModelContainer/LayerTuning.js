import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import BaseMenu from "../../Components/BaseMenu";
import DenseLayer from "./LayerSettings/DenseLayer";
import DropoutLayer from "./LayerSettings/DropoutLayer";
import ConvolutionLayer from "./LayerSettings/CovolutionLayer";
import MaxPoolLayer from "./LayerSettings/MaxPoolLayer";

function LayerTuning({ selectedLayer }) {
  const settingType = (layerName) => {
    switch (layerName) {
      case "Dense":
        return <DenseLayer />;

      case "Dropout":
        return <DropoutLayer />;

      case "Flatten":
        return "No settings";

      case "Convolution":
        return <ConvolutionLayer />;

      case "MaxPool":
        return <MaxPoolLayer />;
      default:
        return null;
    }
  };

  const [currentSetting, setSetting] = useState("");
  useEffect(() => {
    setSetting(settingType(selectedLayer.layer_name));
  }, [selectedLayer]);

  return <BaseMenu heading="Layer Tuning">{currentSetting}</BaseMenu>;
}

const mapStateToProps = (state) => {
  return {
    selectedLayer: state.layerSettings.selectedLayer,
  };
};

export default connect(mapStateToProps)(LayerTuning);
