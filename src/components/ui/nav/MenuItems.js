import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
// import third party
import { Link } from "react-router-dom";

const MenuItems = () => {
  // use ref because gsap operates better with direct dom
  // declare variables
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  // use effect to call animations upon mounting
  useEffect(() => {
    // tweenmax library animations
    TweenMax.to(box1, 2, {
      opacity: 1,
      x: -130,
      ease: Power3.easeOut,
      delay: 2
    });
    TweenMax.to(box2, 2, {
      opacity: 1,
      x: 0,
      ease: Power3.easeOut,
      delay: 1
    });
    TweenMax.to(box3, 2, {
      opacity: 1,
      x: 130,
      ease: Power3.easeOut,
      delay: 2
    });
  }, []);

  return (
    <div className="link-container">
      <span
        ref={el => {
          box1 = el;
        }}
        className="li-items"
      >
        <Link to="/inspiration">Inspiration</Link>
      </span>
      <span
        ref={el => {
          box2 = el;
        }}
        className="li-items"
      >
        <Link to="/shop">Shop</Link>
      </span>
      <span
        ref={el => {
          box3 = el;
        }}
        className="li-items"
      >
        <Link to="/contact">Contact</Link>
      </span>
    </div>
  );
};

export default MenuItems;
