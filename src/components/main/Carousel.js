import React from "react";
// import third party
import { Link } from "react-router-dom";
import gsap from "gsap";
import { Power1 } from "gsap";
// import helpers
import { wishAddLocalStorage } from "./helpers";
// imoprt icons
import FavoriteIcon from "@material-ui/icons/Favorite";

const Carousel = props => {
  // listen for a click event on the link to distinguish between a tag and svg tag
  const checkListen = item => e => {
    if (e.target.tagName !== "IMG") {
      e.preventDefault();
      wishAddLocalStorage(item);
    }
  };

  const animateFavorite = e => {
    let tl = new gsap.timeline();
    tl.to(e.target.parentElement, {
      scale: 1.4,
      duration: 0.2,
      ease: Power1,
      filter: "drop-shadow( 20px 20px 10px rgba(0, 0, 0, .7)) blur(5px)",
      opacity: 0.85
    });
    tl.to(e.target.parentElement, {
      scale: 1,
      duration: 0.2,
      ease: Power1,
      filter: "drop-shadow(2px 5px 3px rgba(0, 0, 0, 0.7)) blur(0px)",
      opacity: 1
    });
  };
  return (
    <div className="carousel carousel_shop">
      {props.items.map((item, id) => (
        <Link
          onClick={checkListen(item)}
          key={id}
          to="#"
          className="carousel-item carousel-item_shop"
          href="#one!"
        >
          <span className="carousel_wishlistAdd">
            <FavoriteIcon
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
