import React from "react";
import Size from "../../../Components/Size";
import Shape from "../../../Components/Shape";
import SaveButton from "../../../Components/SaveButton";
import DropDown from "../../../Components/DropDown";

export default function DenseLayer({ onChange, save, settings, isFirst }) {
  return (
    <div>
      <Size
        label="Units"
        min={1}
        max={2000}
        steps={1}
        type="units"
        onChange={onChange}
        settings={settings.units}
      />
      <Shape
        label="Input Shape"
        type="input_shape"
        onChange={onChange}
        settings={settings.input_shape}
        isFirst={isFirst}
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
