import React from "react";

import SaveButton from "../../../Components/SaveButton";
import Size from "../../../Components/Size";

export default function DropoutLayer({ onChange, save, settings }) {
  return (
    <div>
      <Size
        label="Rate"
        min={0.1}
        max={0.9}
        steps={0.1}
        type="rate"
        onChange={onChange}
        setting={settings.rate}
      />
      <SaveButton save={save} />
    </div>
  );
}
