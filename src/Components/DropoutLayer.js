import React from "react";

import SaveButton from "./SaveButton";
import Size from "./Size";
import BaseForm from "./BaseForm";

export default function DropoutLayer() {
  return (
    <BaseForm>
      <Size label="Rate" min={0.1} max={0.9} steps={0.1} />
      <SaveButton />
    </BaseForm>
  );
}
