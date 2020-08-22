import React, { useState } from "react";
import {
  Slider,
  Input,
  TextField,
  MenuItem,
  Typography,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SaveButton from "./SaveButton";

// add style object to the component
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    padding: theme.spacing(1, 1.5),
  },
  sliderInput: {
    width: 42,
  },
}));

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

export default function DenseLayer() {
  const classes = useStyles();
  const [unit, setUnit] = useState(0);
  const [activation, setActivation] = useState("");

  const handleActivationChange = (event) => {
    setActivation(event.target.value);
  };

  const handleUnitChange = (event, newValue) => {
    setUnit(newValue);
  };

  const handleInputChange = (event) => {
    setUnit(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (unit < 0) {
      setUnit(0);
    } else if (unit > 2000) {
      setUnit(2000);
    }
  };
  return (
    <form className={classes.root}>
      <div>
        <Typography variant="caption" gutterBottom>
          Units
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Slider
              value={typeof unit === "number" ? unit : 0}
              step={1}
              min={0}
              max={2000}
              valueLabelDisplay="auto"
              onChange={handleUnitChange}
            />
          </Grid>
          <Grid item>
            <Input
              value={unit}
              margin="dense"
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                step: 1,
                min: 0,
                max: 2000,
                type: "number",
              }}
              className={classes.sliderInput}
            />
          </Grid>
        </Grid>
      </div>
      <div>
        <TextField
          select
          variant="outlined"
          label="Activation"
          value={activation}
          onChange={handleActivationChange}
          required
        >
          {activations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField variant="outlined" label="Input Shape" required />
      </div>
      <SaveButton />
    </form>
  );
}
