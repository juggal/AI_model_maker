import React from "react";
import Size from "../../../Components/Size";
import Shape from "../../../Components/Shape";
import DropDown from "../../../Components/DropDown";
import SaveButton from "../../../Components/SaveButton";

export default function MaxPoolLayer() {
  return (
    <div>
      <Shape label="Pool Size" />
      <Shape label="Stride Size" />
      <DropDown label="Padding" type="padding" />
      <SaveButton />
    </div>
  );
}
