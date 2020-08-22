import React from "react";
import { TextField } from "@material-ui/core";

export default function Shape(props) {
  return (
    <div>
      <TextField variant="outlined" label={props.label} required />
    </div>
  );
}
