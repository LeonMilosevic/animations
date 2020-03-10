import React, { useRef, useEffect } from "react";
// import third party
import { TweenMax, Power3 } from "gsap";
import { Link } from "react-router-dom";
// import icons
import CloseIcon from "@material-ui/icons/Close";

const Inspiration = () => {
  // array containing images to loop over and asign to img element
  const imgArr = [
    "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_24_fgewym.png",
    "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_23_kb8qfh.png",
    "https://res.cloudinary.com/clothify/image/upload/v1575472209/a2b_pjnchk.jpg",
    "https://res.cloudinary.com/clothify/image/upload/v1574116778/wish_fnfavj.jpg",
    "https://res.cloudinary.com/clothify/image/upload/v1574116544/cart_ninize.jpg"
  ];

  // declare ref for better dom manipulation with gsap
  let close = useRef(null);
  // on mount start animations
  useEffect(() => {
    TweenMax.to(close, {
      opacity: 1,
      ease: Power3.easeOut,
      duration: 0.1,
      delay: 0.5
    });
  }, []);
  return (
    <div className="inspiration_wrapper">
      <Link
        id="close"
        ref={el => {
          close = el;
        }}
        className="link_nostyle back_icon"
        to="/"
      >
        <CloseIcon style={{ fontSize: "56px" }} />
      </Link>
      <div className="inspiration_container">
        <div className="div_image">
          <img
            style={{
              position: "absolute",
              width: "150px",
              height: "150px"
            }}
            src="https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_24_fgewym.png"
            alt=""
          />
        </div>
        <div className="div_image">
          <img
            style={{
              position: "absolute",
              width: "150px",
              height: "150px"
            }}
            src="https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_23_kb8qfh.png"
            alt=""
          />
        </div>
        <div className="div_image">
          <img
            style={{
              position: "absolute",
              width: "150px",
              height: "150px"
            }}
            src="https://res.cloudinary.com/clothify/image/upload/v1575472209/a2b_pjnchk.jpg"
            alt=""
          />
        </div>
        <div className="div_image">
          <img
            style={{
              position: "absolute",
              width: "150px",
              height: "150px"
            }}
            src="https://res.cloudinary.com/clothify/image/upload/v1574116778/wish_fnfavj.jpg"
            alt=""
          />
        </div>
        <div className="div_image">
          <img
            style={{
              position: "absolute",
              width: "150px",
              height: "150px"
            }}
            src="https://res.cloudinary.com/clothify/image/upload/v1574116544/cart_ninize.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
