import React from "react";
import Size from "../../../Components/Size";
import Shape from "../../../Components/Shape";
import SaveButton from "../../../Components/SaveButton";
import DropDown from "../../../Components/DropDown";

export default function DenseLayer() {
  return (
    <div>
      <Size label="Units" min={1} max={2000} steps={1} />
      <Shape label="Input Shape" />
      <DropDown label="Activation" type="activation" />
      <SaveButton />
    </div>
  );
}
