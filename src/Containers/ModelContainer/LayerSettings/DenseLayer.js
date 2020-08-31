import React from "react";
import Size from "../../../Components/Size";
import Shape from "../../../Components/Shape";
import SaveButton from "../../../Components/SaveButton";
import DropDown from "../../../Components/DropDown";

export default function DenseLayer({ onChange }) {
  return (
    <div>
      <Size
        label="Units"
        min={1}
        max={2000}
        steps={1}
        type="units"
        onChange={onChange}
      />
      <Shape label="Input Shape" type="input_shape" onChange={onChange} />
      <DropDown label="Activation" type="activation" onChange={onChange} />
      <SaveButton />
    </div>
  );
}
