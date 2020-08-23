import React from "react";

import BaseMenu from "../../Components/BaseMenu";
import DenseLayer from "./LayerSettings/DenseLayer";
import DropoutLayer from "./LayerSettings/DropoutLayer";
import ConvolutionLayer from "./LayerSettings/CovolutionLayer";
import MaxPoolLayer from "./LayerSettings/MaxPoolLayer";

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
