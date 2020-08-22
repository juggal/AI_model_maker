import React from "react";
import BaseForm from "./BaseForm";
import Size from "./Size";
import Shape from "./Shape";
import DropDown from "./DropDown";
import SaveButton from "./SaveButton";

export default function ConvolutionLayer() {
  return (
    <BaseForm>
      <Size label="Filters" min={1} max={2000} steps={1} />
      <Shape label="Input Shape" />
      <Shape label="Kernal Size" />
      <Shape label="Stride Size" />
      <DropDown label="Padding" type="padding" />
      <DropDown label="Activation" type="activation" />
      <SaveButton />
    </BaseForm>
  );
}
