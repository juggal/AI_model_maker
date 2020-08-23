import React from "react";
import BaseForm from "./BaseForm";
import Size from "./Size";
import Shape from "./Shape";
import SaveButton from "./SaveButton";
import DropDown from "./DropDown";

export default function DenseLayer() {
  return (
    <BaseForm>
      <Size label="Units" min={1} max={2000} steps={1} />
      <Shape label="Input Shape" />
      <DropDown label="Activation" type="activation" />
      <SaveButton />
    </BaseForm>
  );
}