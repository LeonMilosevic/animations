import React, { useRef, useEffect } from "react";
// import third party
import { TweenMax, Power3 } from "gsap";
import { Link } from "react-router-dom";
// import icons
import CloseIcon from "@material-ui/icons/Close";

const Inspiration = () => {
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
    </div>
  );
};

export default Inspiration;
