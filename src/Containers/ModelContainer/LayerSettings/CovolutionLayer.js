import React from "react";
import Size from "../../../Components/Size";
import Shape from "../../../Components/Shape";
import DropDown from "../../../Components/DropDown";
import SaveButton from "../../../Components/SaveButton";

export default function ConvolutionLayer({ onChange }) {
  return (
    <div>
      <Size
        label="Filters"
        min={1}
        max={2000}
        steps={1}
        type="filters"
        onChange={onChange}
      />
      <Shape label="Input Shape" type="input_shape" onChange={onChange} />
      <Shape label="Kernal Size" type="kernal_size" onChange={onChange} />
      <Shape label="Stride Size" type="stride_size" onChange={onChange} />
      <DropDown label="Padding" type="padding" onChange={onChange} />
      <DropDown label="Activation" type="activation" onChange={onChange} />
      <SaveButton />
    </div>
  );
}
