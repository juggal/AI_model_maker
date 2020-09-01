import React from "react";
import Shape from "../../../Components/Shape";
import DropDown from "../../../Components/DropDown";
import SaveButton from "../../../Components/SaveButton";

export default function MaxPoolLayer({ onChange, save, settings }) {
  return (
    <div>
      <Shape
        label="Pool Size"
        type="pool_size"
        onChange={onChange}
        settings={settings.pool_size}
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
      <SaveButton save={save} />
    </div>
  );
}
