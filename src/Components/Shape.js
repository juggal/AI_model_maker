import React, { useState } from "react";
import { TextField } from "@material-ui/core";

export default function Shape(props) {
  const [shape, setShape] = useState("");
  return (
    <div>
      <TextField
        variant="outlined"
        label={props.label}
        onChange={(e) => setShape(e.target.value)}
        required
      />
    </div>
  );
}
