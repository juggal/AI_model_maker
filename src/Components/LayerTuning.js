import React, { useState } from "react";
import { ListItem, Slider, Select, MenuItem } from "@material-ui/core";
import {} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import BaseMenu from "./BaseMenu";
import DenseLayer from "./DenseLayer";

// add style object to component
const useStyles = makeStyles((theme) => ({
  listItmePadding: {},
}));

export default function LayerTuning() {
  const classes = useStyles();
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <BaseMenu heading="Layer Tuning">
      <DenseLayer />
    </BaseMenu>
  );
}
