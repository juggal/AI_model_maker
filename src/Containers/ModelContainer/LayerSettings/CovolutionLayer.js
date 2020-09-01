import React from "react";
import Size from "../../../Components/Size";
import Shape from "../../../Components/Shape";
import DropDown from "../../../Components/DropDown";
import SaveButton from "../../../Components/SaveButton";

export default function ConvolutionLayer({
  onChange,
  save,
  settings,
  isFirst,
}) {
  return (
    <div>
      <Size
        label="Filters"
        min={1}
        max={2000}
        steps={1}
        type="filters"
        onChange={onChange}
        settings={settings.filters}
      />
      <Shape
        label="Input Shape"
        type="input_shape"
        onChange={onChange}
        settings={settings.input_shape}
        isFirst={isFirst}
      />
      <Shape
        label="Kernal Size"
        type="kernal_size"
        onChange={onChange}
        settings={settings.kernal_size}
      />
      <Shape
        label="Stride Size"
        type="stride_size"
        onChange={onChange}
        settings={settings.stride_size}
      />
      <DropDown
        label="Padding"
        type="padding"
        onChange={onChange}
        settings={settings.padding}
      />
      <DropDown
        label="Activation"
        type="activation"
        onChange={onChange}
        settings={settings.activation}
      />
      <SaveButton save={save} />
    </div>
  );
}
