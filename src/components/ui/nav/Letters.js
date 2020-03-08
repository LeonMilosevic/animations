import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
// import lib
import { Link } from "react-router-dom";
const Letters = () => {
  // use ref because gsap operates better with direct dom
  // declare variables
  let letterR = useRef(null);
  let letterE = useRef(null);
  let letterM = useRef(null);
  let letterI = useRef(null);
  let letterN = useRef(null);
  let letterII = useRef(null);
  let letterMM = useRef(null);
  let letterO = useRef(null);
  let letterC = useRef(null);
  let letterEE = useRef(null);
  let letterNN = useRef(null);
  let letterT = useRef(null);
  let letterRR = useRef(null);
  let letterA = useRef(null);
  let letterS = useRef(null);
  // use effect to call after the component mounts
  useEffect(() => {
    // tweenmax code to show letters with delay
    TweenMax.to(letterR, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.2
    });
    TweenMax.to(letterE, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.3
    });
    TweenMax.to(letterM, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.4
    });
    TweenMax.to(letterI, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.5
    });
    TweenMax.to(letterN, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.6
    });
    TweenMax.to(letterII, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.7
    });
    TweenMax.to(letterMM, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.8
    });
    TweenMax.to(letterO, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.9
    });
    TweenMax.to(letterC, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 1.1
    });
    TweenMax.to(letterEE, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 1.2
    });
    TweenMax.to(letterNN, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 1.3
    });
    TweenMax.to(letterT, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 1.4
    });
    TweenMax.to(letterRR, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 1.5
    });
    TweenMax.to(letterA, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 1.6
    });
    TweenMax.to(letterS, 2, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 1.7
    });
  }, []);
  return (
    <div className="letters">
      <Link className="link_nostyle" to="/">
        <span
          className="letters_span"
          ref={el => {
            letterR = el;
          }}
        >
          r
        </span>
        <span
          className="letters_span"
          ref={el => {
            letterE = el;
          }}
        >
          ė
        </span>
        <span
          className="letters_span"
          ref={el => {
            letterM = el;
          }}
        >
          m
        </span>
        <span
          className="letters_span"
          ref={el => {
            letterI = el;
          }}
        >
          i
        </span>
        <span
          className="letters_span"
          ref={el => {
            letterN = el;
          }}
        >
          n
        </span>
        <span
          className="letters_span"
          ref={el => {
            letterII = el;
          }}
        >
          i
        </span>
        <span
          className="letters_span"
          ref={el => {
            letterMM = el;
          }}
        >
          m
        </span>
        <span
          className="letters_span"
          ref={el => {
            letterO = el;
          }}
        >
          o
        </span>
        <span>&nbsp;</span>
        <span
          className="letters_span"
          ref={el => {
            letterC = el;
          }}
        >
          c
        </span>
        <span
          className="letters_span"
          ref={el => {
            letterEE = el;
          }}
        >
          e
        </span>
        <span
          className="letters_span"
          ref={el => {
            letterNN = el;
          }}
        >
          n
        </span>
        <span
          className="letters_span"
          ref={el => {
            letterT = el;
          }}
        >
          t
        </span>
        <span
          className="letters_span"
          ref={el => {
            letterRR = el;
          }}
        >
          r
        </span>
        <span
          className="letters_span"
          ref={el => {
            letterA = el;
          }}
        >
          a
        </span>
        <span
          className="letters_span"
          ref={el => {
            letterS = el;
          }}
        >
          s
        </span>
      </Link>
    </div>
  );
};

export default Letters;
