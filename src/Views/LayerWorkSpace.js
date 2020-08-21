import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import {} from "@material-ui/core/styles";

import Layers from "../Components/Layers";
import LayerTuning from "../Components/LayerTuning";
import Architecture from "../Components/Architecture";

export default function LayerWorkSpace() {
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
