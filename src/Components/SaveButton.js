import React, { useState } from "react";
import { Button, Snackbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";

//  add style object to the component
const useStyles = makeStyles((theme) => ({
  buttonAlign: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(3, 0, 0, 0),
  },
}));

export default function SaveButton() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.buttonAlign}>
      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={handleClick}
      >
        Save
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: "Top", horizontal: "Right" }}
        open={open}
        onClose={handleClose}
        message="Saved Successfully"
        key={{ vertical: "Top", horizontal: "Right" }}
      />
    </div>
  );
}
