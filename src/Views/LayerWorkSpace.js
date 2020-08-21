import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import {} from "@material-ui/core/styles";

import Layers from "../Components/Layers";
import Architecture from "../Components/Architecture";

export default function LayerWorkSpace() {
  return (
    <Grid container spacing={1} direction="row" justify="space-evenly">
      <Grid item>
        <Layers />
      </Grid>
      <Grid item></Grid>
      <Grid item>
        <Architecture />
      </Grid>
    </Grid>
  );
}
