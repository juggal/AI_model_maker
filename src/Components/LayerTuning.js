import React from "react";

import BaseMenu from "./BaseMenu";
import DenseLayer from "./DenseLayer";
import DropoutLayer from "./DropoutLayer";

export default function LayerTuning() {
  return (
    <BaseMenu heading="Layer Tuning">
      {/* <DenseLayer /> */}
      <DropoutLayer />
    </BaseMenu>
  );
}
