import React from "react";
import Size from "../../../Components/Size";
import Shape from "../../../Components/Shape";
import DropDown from "../../../Components/DropDown";
import SaveButton from "../../../Components/SaveButton";

export default function MaxPoolLayer({ onChange }) {
  return (
    <div>
      <Shape label="Pool Size" type="pool_size" onChange={onChange} />
      <Shape label="Stride Size" type="stride_size" onChange={onChange} />
      <DropDown label="Padding" type="padding" onChange={onChange} />
      <SaveButton />
    </div>
  );
}
