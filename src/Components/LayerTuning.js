import React from "react";

import BaseMenu from "./BaseMenu";
import DenseLayer from "./DenseLayer";
import DropoutLayer from "./DropoutLayer";
import ConvolutionLayer from "./CovolutionLayer";
import MaxPoolLayer from "./MaxPoolLayer";

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
