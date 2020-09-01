import React, { useState, useEffect } from "react";
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

export default function DropDown({ label, type, onChange }) {
  const [listSelect, setListSelect] = useState("");
  const [loaded, setLoaded] = useState(false);

  const handleListSelect = (event) => {
    setListSelect(event.target.value);
  };

  const list = () => {
    if (type === "activation") {
      return activations;
    } else if (type === "padding") {
      return paddings;
    }
  };

  useEffect(() => {
    if (loaded) {
      onChange(listSelect, type);
    }
    setLoaded(true);
  }, [listSelect]);

  return (
    <div>
      <TextField
        select
        variant="outlined"
        label={label}
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
