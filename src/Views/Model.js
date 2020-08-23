import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import {} from "@material-ui/core/styles";

import { ModelContainers } from "../Containers/";
const { Layers, LayerTuning, Architecture } = ModelContainers;

export default function Model() {
  return (
    <Grid container spacing={1} direction="row" justify="space-around">
      <Grid item>
        <Layers />
      </Grid>
      <Grid item>
        <LayerTuning />
      </Grid>
      <Grid item>
        <Architecture />
      </Grid>
    </Grid>
  );
}