import React, { useState } from "react";
import { TextField } from "@material-ui/core";

export default function Shape({ label, type, onChange }) {
  return (
    <div>
      <TextField
        variant="outlined"
        label={label}
        onChange={(e) => onChange(e.target.value, type)}
        required
      />
    </div>
  );
}
