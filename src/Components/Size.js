import React, { useState } from "react";
import { Typography, Grid, Slider, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// add style object to component
const useStyles = makeStyles((theme) => ({
  sliderInput: {
    width: 42,
  },
}));

export default function Size(props) {
  const classes = useStyles();
  const [size, setSize] = useState(props.min);
  const handleSizeChange = (event, newValue) => {
    setSize(newValue);
  };

  const handleInputChange = (event) => {
    setSize(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (size < props.min) {
      setSize(props.min);
    } else if (size > props.max) {
      setSize(props.max);
    }
  };

  return (
    <div>
      <Typography variant="caption" gutterBottom>
        {props.label}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof size === "number" ? size : 0}
            step={props.steps}
            min={props.min}
            max={props.max}
            valueLabelDisplay="auto"
            onChange={handleSizeChange}
          />
        </Grid>
        <Grid item>
          <Input
            value={size}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: props.steps,
              min: props.min,
              max: props.max,
              type: "number",
            }}
            className={classes.sliderInput}
          />
        </Grid>
      </Grid>
    </div>
  );
}
