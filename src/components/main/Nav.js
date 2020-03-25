import React from "react";
// third party
import { Link } from "react-router-dom";
// import components
import Letters from "../ui/nav/Letters";
import MenuItems from "../ui/nav/MenuItems";
// material ui
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import FavoriteIcon from "@material-ui/icons/Favorite";

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
      <Link className="wishlist" to="/wishlist">
        <FavoriteIcon style={{ fontSize: "32px", color: "#a31b16" }} />
      </Link>
    </>
  );
};

export default Nav;
