import React from "react";

import BaseMenu from "../../Components/BaseMenu";
import DenseLayer from "./LayerContainer/DenseLayer";
import DropoutLayer from "./LayerContainer/DropoutLayer";
import ConvolutionLayer from "./LayerContainer/CovolutionLayer";
import MaxPoolLayer from "./LayerContainer/MaxPoolLayer";

export default function LayerTuning() {
  return (
    <BaseMenu heading="Layer Tuning">
      {/* <DenseLayer /> */}
      {/* <DropoutLayer /> */}
      {/* <ConvolutionLayer /> */}
      <MaxPoolLayer />
    </BaseMenu>
  );
}
