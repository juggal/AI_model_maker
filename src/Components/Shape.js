import React from "react";
import { TextField } from "@material-ui/core";

export default function Shape({ label, type, onChange, settings, isFirst }) {
  return (
    <div>
      <TextField
        variant="outlined"
        label={label}
        value={settings}
        onChange={(e) => onChange(e.target.value, type)}
        disabled={type === "input_shape" && !isFirst}
        required
      />
    </div>
  );
}
