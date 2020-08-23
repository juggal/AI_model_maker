import React from "react";
import BaseForm from "../../../Components/BaseForm";
import Size from "../../../Components/Size";
import Shape from "../../../Components/Shape";
import DropDown from "../../../Components/DropDown";
import SaveButton from "../../../Components/SaveButton";

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
