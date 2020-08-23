import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BaseMenu from "../../Components/BaseMenu";
import BaseItem from "../../Components/BaseItem";

import { connect } from "react-redux";

// styling object for the component
const useStyles = makeStyles((theme) => ({
  list: {
    paddingTop: theme.spacing(1),
    maxHeight: 530,
    overflow: "auto",
  },
}));

function Architecture({ layers }) {
  const classes = useStyles();
  return (
    <BaseMenu heading="Architecture" list listStyle={classes.list}>
      {layers.map((layer, index) => (
        <BaseItem
          id={layer.layer_id}
          text={layer.layer_type}
          index={index}
          key={layer.id}
        />
      ))}
    </BaseMenu>
  );
}

const mapStateToProps = (state) => {
  return {
    layers: state.architecture.layers,
  };
};

export default connect(mapStateToProps)(Architecture);
