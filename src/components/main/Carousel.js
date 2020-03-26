import React from "react";
// import third party
import { Link } from "react-router-dom";
// import helpers
import { wishAddLocalStorage, animateFavorite } from "./helpers";
// imoprt icons
import { MdFavorite } from "react-icons/md";

const Carousel = props => {
  // listen for a click event on the link to distinguish between a tag and svg tag
  const checkListen = item => e => {
    if (e.target.tagName !== "IMG") {
      e.preventDefault();
      wishAddLocalStorage(item);
    }
  };

  return (
    <div className="carousel carousel_shop">
      {props.items.map((item, id) => (
        <Link
          onClick={checkListen(item)}
          key={id}
          to={{
            pathname: `/shop/${item.id}`,
            state: item
          }}
          className="carousel-item carousel-item_shop"
        >
          <span className="carousel_wishlistAdd">
            <MdFavorite
              onClick={animateFavorite}
              className="favorite_add"
              style={{ fontSize: "52px", color: "#a31b16" }}
            />
          </span>
          <img className="carousel-img" alt="" src={item.image} />
        </Link>
      ))}
    </div>
  );
};

export default Carousel;
