import React, { useState } from "react";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  MenuRounded,
  ChevronLeftRounded,
  LayersRounded,
  BuildRounded,
  ToysRounded,
  VerticalAlignBottomRounded,
  GetAppRounded,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import clsx from "clsx";

// import views
import Model from "../Views/Model";
import { connect } from "react-redux";

// width of drawer component
const drawerWidth = 160;

// styling object for the component
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  title: {
    flexGrow: 1,
  },
  downloadButton: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Scaffold({ config }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const iconsList = [
    <LayersRounded />,
    <ToysRounded />,
    <BuildRounded />,
    <VerticalAlignBottomRounded />,
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleButtonClick = () => {
    console.log(JSON.stringify(config));
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            color="inherit"
            edge="start"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuRounded />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            AIModelMaker
          </Typography>
          <IconButton
            href={`data:text/json;charset=utf-8,${encodeURIComponent(
              JSON.stringify(config)
            )}`}
            download="filename.json"
            className={classes.downloadButton}
            onClick={handleButtonClick}
          >
            <GetAppRounded />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftRounded />
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Layers", "Compile", "Build", "Export"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{iconsList[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* hero goes content to be rendered */}
        <Model />
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    config: {
      architecture: state.architecture,
      layerSettings: state.layerSettings.settings,
      compileSettings: state.compileSettings,
    },
  };
};

export default connect(mapStateToProps)(Scaffold);
