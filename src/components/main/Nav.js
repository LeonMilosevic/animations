import React from "react";
// third party
import { Link } from "react-router-dom";
// import components
import Letters from "../ui/nav/Letters";
import MenuItems from "../ui/nav/MenuItems";
import { MdFavorite } from "react-icons/md";

const Nav = () => {
  return (
    <>
      <nav
        style={{
          backgroundColor: "#141313",
          position: "static",
          opacity: 0.7
        }}
      >
        <div className="nav-wrapper"></div>
      </nav>

      <Letters />
      <MenuItems />
      <Link className="wishlist" to="/wishlist">
        <MdFavorite style={{ fontSize: "32px", color: "#a31b16" }} />
      </Link>
    </>
  );
};

export default Nav;
