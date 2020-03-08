import React from "react";
// import components
import Letters from "../ui/nav/Letters";
import MenuItems from "../ui/nav/MenuItems";
// material ui
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    opacity: 0.7
  }
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <AppBar style={{ backgroundColor: "#141313" }} position="static">
          <Toolbar></Toolbar>
        </AppBar>
      </div>
      <Letters />
      <MenuItems />
    </>
  );
};

export default Nav;
