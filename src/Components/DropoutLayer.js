import React, { useState } from "react";
import { Typography, Grid, Slider, Input, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import SaveButton from "./SaveButton";

// add styles object to the component
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiSlider-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    padding: theme.spacing(1, 1),
  },
  sliderInput: {
    width: 42,
  },
}));

export default function DropoutLayer() {
  const classes = useStyles();
  const [rate, setRate] = useState(0.1);

  const handleRateChange = (event, newValue) => {
    setRate(newValue);
  };

  const handleInputChange = (event) => {
    setRate(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (rate < 0.1) {
      setRate(0.1);
    } else if (rate > 0.9) {
      setRate(0.9);
    }
  };

  return (
    <form className={classes.root}>
      <div>
        <Typography variant="caption" gutterBottom>
          Rate
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Slider
              value={typeof rate === "number" ? rate : 0}
              step={0.1}
              min={0.1}
              max={0.9}
              valueLabelDisplay="auto"
              onChange={handleRateChange}
            />
          </Grid>
          <Grid item>
            <Input
              value={rate}
              margin="dense"
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                step: 0.1,
                min: 0.1,
                max: 0.9,
                type: "number",
              }}
              className={classes.sliderInput}
            />
          </Grid>
        </Grid>
      </div>
      <SaveButton />
    </form>
  );
}
