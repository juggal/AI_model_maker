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

const metrics = [
  {
    value: "Accuracy",
    label: "Accuracy",
  },
  {
    value: "MeanSquaredError",
    label: "MeanSquaredError",
  },
  {
    value: "TruePositives",
    label: "TruePositives",
  },
  {
    value: "TrueNegatives",
    label: "TrueNegatives",
  },
  {
    value: "FalsePositives",
    label: "FalsePositives",
  },
  {
    value: "FalseNegatives",
    label: "FalseNegatives",
  },
];
const optimizers = [
  {
    value: "adam",
    label: "Adam",
  },
  {
    value: "sgd",
    label: "SGD",
  },
];
const losses = [
  {
    value: "binary_crossentropy",
    label: "binary_crossentropy",
  },
  {
    value: "categorical_crossentropy",
    label: "categorical_crossentropy",
  },
  {
    value: "sparse_crossentropy",
    label: "sparse_crossentropy",
  },
  {
    value: "mean_squared_error",
    label: "mean_squared_error",
  },
];

export default function DropDown({ label, type, onChange, settings }) {
  const [listSelect, setListSelect] = useState(settings || "");
  const [loaded, setLoaded] = useState(false);

  const handleListSelect = (event) => {
    setListSelect(event.target.value);
  };

  const list = (type) => {
    switch (type) {
      case "activation":
        return activations;
      case "padding":
        return paddings;
      case "optimizer":
        return optimizers;
      case "loss":
        return losses;
      case "metrics":
        return metrics;
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
        {list(type).map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}
