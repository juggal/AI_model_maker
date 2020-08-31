import React from "react";
import Shape from "../../../Components/Shape";
import DropDown from "../../../Components/DropDown";
import SaveButton from "../../../Components/SaveButton";

export default function MaxPoolLayer({ onChange, save }) {
  return (
    <div>
      <Shape label="Pool Size" type="pool_size" onChange={onChange} />
      <Shape label="Stride Size" type="stride_size" onChange={onChange} />
      <DropDown label="Padding" type="padding" onChange={onChange} />
      <SaveButton save={save} />
    </div>
  );
}
