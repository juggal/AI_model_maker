import React from "react";
import BaseForm from "./BaseForm";
import Size from "./Size";
import Shape from "./Shape";
import DropDown from "./DropDown";
import SaveButton from "./SaveButton";

export default function MaxPoolLayer() {
  return (
    <BaseForm>
      <Shape label="Pool Size" />
      <Shape label="Stride Size" />
      <DropDown label="Padding" type="padding" />
      <SaveButton />
    </BaseForm>
  );
}
