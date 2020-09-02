import React from "react";
import { Grid } from "@material-ui/core";

import { ModelContainers } from "../Containers/";
const { Layers, LayerTuning, Architecture, CompileSettings } = ModelContainers;

export default function Model() {
  return (
    <Grid container spacing={1} direction="row" justify="space-evenly">
      <Grid item>
        <Layers />
      </Grid>
      <Grid item>
        <LayerTuning />
      </Grid>
      <Grid item>
        <Architecture />
      </Grid>
      <Grid item>
        <CompileSettings />
      </Grid>
    </Grid>
  );
}
