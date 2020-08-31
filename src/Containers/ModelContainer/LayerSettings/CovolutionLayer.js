import React from "react";
import Size from "../../../Components/Size";
import Shape from "../../../Components/Shape";
import DropDown from "../../../Components/DropDown";
import SaveButton from "../../../Components/SaveButton";

export default function ConvolutionLayer() {
  return (
    <div>
      <Size label="Filters" min={1} max={2000} steps={1} />
      <Shape label="Input Shape" />
      <Shape label="Kernal Size" />
      <Shape label="Stride Size" />
      <DropDown label="Padding" type="padding" />
      <DropDown label="Activation" type="activation" />
      <SaveButton />
    </div>
  );
}
