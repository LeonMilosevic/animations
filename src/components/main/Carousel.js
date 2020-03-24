import React from "react";
import { Link } from "react-router-dom";

const Carousel = props => {
  return (
    <div className="carousel">
      {props.items.map((el, id) => (
        <Link key={id} to="/" className="carousel-item" href="#one!">
          <img className="carousel-img" alt="" src={el.image} />
        </Link>
      ))}
    </div>
  );
};

export default Carousel;
