import React, { useRef, useEffect } from "react";
import gsap from "gsap";
// import third party
import { TweenMax, Power3 } from "gsap";
import Draggable from "gsap/Draggable";
import { Link } from "react-router-dom";
// import icons
import CloseIcon from "@material-ui/icons/Close";

gsap.registerPlugin(Draggable);
const Inspiration = () => {
  // array containing images to loop over and asign to img element
  const imgArr = [
    "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_24_fgewym.png",
    "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_23_kb8qfh.png",
    "https://res.cloudinary.com/clothify/image/upload/v1575472209/a2b_pjnchk.jpg",
    "https://res.cloudinary.com/clothify/image/upload/v1574116778/wish_fnfavj.jpg",
    "https://res.cloudinary.com/clothify/image/upload/v1574116544/cart_ninize.jpg",
    "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_24_fgewym.png",
    "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_23_kb8qfh.png",
    "https://res.cloudinary.com/clothify/image/upload/v1575472209/a2b_pjnchk.jpg",
    "https://res.cloudinary.com/clothify/image/upload/v1574116778/wish_fnfavj.jpg",
    "https://res.cloudinary.com/clothify/image/upload/v1574116544/cart_ninize.jpg",
    "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_24_fgewym.png",
    "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_23_kb8qfh.png",
    "https://res.cloudinary.com/clothify/image/upload/v1575472209/a2b_pjnchk.jpg",
    "https://res.cloudinary.com/clothify/image/upload/v1574116778/wish_fnfavj.jpg",
    "https://res.cloudinary.com/clothify/image/upload/v1574116544/cart_ninize.jpg",
    "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_24_fgewym.png",
    "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_23_kb8qfh.png",
    "https://res.cloudinary.com/clothify/image/upload/v1575472209/a2b_pjnchk.jpg",
    "https://res.cloudinary.com/clothify/image/upload/v1574116778/wish_fnfavj.jpg",
    "https://res.cloudinary.com/clothify/image/upload/v1574116544/cart_ninize.jpg"
  ];
  // random position function so the images will be displayed at random all the time
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const randomMarginX = () => {
    var num = Math.floor(Math.random() * 20) + 1; // this will get a number between 1 and 99;
    return (num *= Math.floor(Math.random() * 2) === 1 ? 1 : -1); // this will add minus sign in 50% of cases
  };
  // declare ref for better dom manipulation with gsap
  let close = useRef(null);
  let container = useRef(null);
  // on mount start animations

  useEffect(() => {
    TweenMax.to(close, {
      opacity: 1,
      ease: Power3.easeOut,
      duration: 0.1,
      delay: 0.5
    });

    TweenMax.to(container, {
      x: -2200,
      ease: Power3.easeInOut,
      duration: 10,
      delay: 0.5,
      yoyoEase: Power3.easeIn,
      repeat: -1
    });

    Draggable.create(container, {
      type: "x",
      autoScroll: 1,
      throwProps: true
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
      <div
        ref={el => {
          container = el;
        }}
        className="inspiration_container"
      >
        {imgArr.map((img, id) => (
          <div
            className="div_image"
            key={id}
            style={{
              top: `${randomIntFromInterval(1, 80)}%`,
              right: `0`,
              margin: `0 ${randomMarginX()}px`
            }}
          >
            <img
              style={{
                width: randomIntFromInterval(70, 200),
                height: randomIntFromInterval(100, 150)
              }}
              src={img}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inspiration;
