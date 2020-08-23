import React from "react";

import SaveButton from "../../../Components/SaveButton";
import Size from "../../../Components/Size";
import BaseForm from "../../../Components/BaseForm";

export default function DropoutLayer() {
  return (
    <BaseForm>
      <Size label="Rate" min={0.1} max={0.9} steps={0.1} />
      <SaveButton />
    </BaseForm>
  );
}
