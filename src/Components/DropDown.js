import React, { useState } from "react";
import { TextField, MenuItem } from "@material-ui/core";

// list of activation functinons
const activations = [
  {
    value: "relu",
    label: "Relu",
  },
  {
    value: "sigmoid",
    label: "Sigmoid",
  },
  {
    value: "softmax",
    label: "Softmax",
  },
  {
    value: "tanh",
    label: "tanh",
  },
];

// list of padding
const paddings = [
  {
    value: "valid",
    label: "Valid",
  },
  {
    value: "same",
    label: "Same",
  },
];

export default function DropDown(props) {
  const [listSelect, setListSelect] = useState("");

  const handleListSelect = (event) => {
    setListSelect(event.target.value);
  };

  const list = () => {
    if (props.type === "activation") {
      return activations;
    } else if (props.type === "padding") {
      return paddings;
    }
  };
  return (
    <div>
      <TextField
        select
        variant="outlined"
        label={props.label}
        value={listSelect}
        onChange={handleListSelect}
        required
      >
        {list().map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}
