import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";

const Nav = () => {
  let letterS = useRef(null);
  let letterU = useRef(null);
  let letterN = useRef(null);
  let letterNN = useRef(null);
  let letterY = useRef(null);
  let letterM = useRef(null);
  let letterO = useRef(null);
  let letterR = useRef(null);
  let letterNNN = useRef(null);
  let letterI = useRef(null);
  let letterNNNN = useRef(null);
  let letterG = useRef(null);
  let letterSS = useRef(null);
  let letterA = useRef(null);
  let letterSSS = useRef(null);
  useEffect(() => {
    TweenMax.to(letterS, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.2
    });
    TweenMax.to(letterU, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.3
    });
    TweenMax.to(letterN, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.4
    });
    TweenMax.to(letterNN, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.5
    });
    TweenMax.to(letterY, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.6
    });
    TweenMax.to(letterM, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.7
    });
    TweenMax.to(letterO, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.8
    });
    TweenMax.to(letterR, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.9
    });
    TweenMax.to(letterNNN, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 1
    });
    TweenMax.to(letterI, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 1.1
    });
    TweenMax.to(letterNNNN, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 1.2
    });
    TweenMax.to(letterG, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 1.3
    });
    TweenMax.to(letterSS, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 1.4
    });
    TweenMax.to(letterA, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 1.5
    });
    TweenMax.to(letterSSS, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 1.6
    });
  }, []);
  return (
    <div>
      <h1 id="ml2" className="ml2">
        <span
          ref={el => {
            letterS = el;
          }}
        >
          r
        </span>
        <span
          ref={el => {
            letterU = el;
          }}
        >
          ė
        </span>
        <span
          ref={el => {
            letterN = el;
          }}
        >
          m
        </span>
        <span
          ref={el => {
            letterNN = el;
          }}
        >
          i
        </span>
        <span
          ref={el => {
            letterY = el;
          }}
        >
          n
        </span>
        <span
          ref={el => {
            letterM = el;
          }}
        >
          i
        </span>
        <span
          ref={el => {
            letterO = el;
          }}
        >
          m
        </span>
        <span
          ref={el => {
            letterR = el;
          }}
        >
          o
        </span>
        <span
          ref={el => {
            letterNNN = el;
          }}
        >
          c
        </span>
        <span
          ref={el => {
            letterI = el;
          }}
        >
          e
        </span>
        <span
          ref={el => {
            letterNNNN = el;
          }}
        >
          n
        </span>
        <span
          ref={el => {
            letterG = el;
          }}
        >
          t
        </span>
        <span
          ref={el => {
            letterSS = el;
          }}
        >
          r
        </span>
        <span
          ref={el => {
            letterA = el;
          }}
        >
          a
        </span>
        <span
          ref={el => {
            letterSSS = el;
          }}
        >
          s
        </span>
      </h1>
      <button id="button">Click me</button>
    </div>
  );
};

export default Nav;
