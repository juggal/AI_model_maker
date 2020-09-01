import React, { useState, useEffect } from "react";
import { Typography, Grid, Slider, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// add style object to component
const useStyles = makeStyles((theme) => ({
  sliderInput: {
    width: 42,
  },
}));

export default function Size({ label, min, max, steps, type, onChange }) {
  const classes = useStyles();
  const [size, setSize] = useState(min);
  const [loaded, setLoaded] = useState(false);
  const handleSizeChange = (event, newValue) => {
    setSize(newValue);
  };

  const handleInputChange = (event) => {
    const newValue =
      event.target.value === "" ? "" : Number(event.target.value);
    setSize(newValue);
  };

  const handleBlur = () => {
    if (size < min) {
      setSize(min);
    } else if (size > max) {
      setSize(max);
    }
  };

  useEffect(() => {
    if (loaded) {
      onChange(size, type);
    }
    setLoaded(true);
  }, [size]);

  return (
    <div>
      <Typography variant="caption" gutterBottom>
        {label}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof size === "number" ? size : 0}
            step={steps}
            min={min}
            max={max}
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
              step: steps,
              min: min,
              max: max,
              type: "number",
            }}
            className={classes.sliderInput}
          />
        </Grid>
      </Grid>
    </div>
  );
}
