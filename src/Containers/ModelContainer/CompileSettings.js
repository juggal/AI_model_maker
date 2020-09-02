import React, { useState } from "react";
import { ListItem, Button, Snackbar, makeStyles } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import BaseMenu from "../../Components/BaseMenu";
import DropDown from "../../Components/DropDown";

import { connect } from "react-redux";
import { saveCompileSettings } from "../../redux";

// add style object to the component
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  buttonAlign: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(3, 0, 0, 0),
  },
}));

function CompileSettings({ saveCompileSettings }) {
  const classes = useStyles();

  const [fieldValues, setFieldValues] = useState({});
  const [open, setOpen] = useState(false);

  // update fieldValues CompileSetting
  const handleFieldValues = (value, type) => {
    setFieldValues((prevState) => ({ ...prevState, [type]: value }));
  };

  // handle on button click
  const handleClick = () => {
    saveCompileSettings(fieldValues);

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <BaseMenu heading="Compile Settings" list>
      <form className={classes.root}>
        <DropDown
          label="Optimizer"
          type="optimizer"
          onChange={handleFieldValues}
          className={classes.root}
        />
        <DropDown label="Loss" type="loss" onChange={handleFieldValues} />
        <DropDown label="Metrics" type="metrics" onChange={handleFieldValues} />
        <div className={classes.buttonAlign}>
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={handleClick}
          >
            Save
          </Button>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "Top", horizontal: "Right" }}
          open={open}
          onClose={handleClose}
          key={{ vertical: "Top", horizontal: "Right" }}
          autoHideDuration={1000}
        >
          <Alert variant="filled" severity="success">
            Saved Successfully
          </Alert>
        </Snackbar>
      </form>
    </BaseMenu>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveCompileSettings: (settings) => dispatch(saveCompileSettings(settings)),
  };
};

export default connect(null, mapDispatchToProps)(CompileSettings);
