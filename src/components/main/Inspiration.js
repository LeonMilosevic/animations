import React, { useRef, useEffect } from "react";
import gsap from "gsap";
// import third party
import { Power1 } from "gsap";
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
  const randomFloatBetween = (min, max, precision) => {
    if (typeof precision == "undefined") {
      precision = 2;
    }
    return parseFloat(
      Math.min(min + Math.random() * (max - min), max).toFixed(precision)
    );
  };

  const randomMarginX = () => {
    let num = Math.floor(Math.random() * 20) + 1; // this will get a number between 1 and 99;
    return (num *= Math.floor(Math.random() * 2) === 1 ? 1 : -1); // this will add minus sign in 50% of cases
  };
  // declare ref for better dom manipulation with gsap
  let close = useRef(null);
  let container = useRef(null);

  // on mount start animations

  useEffect(() => {
    // create variables needed to animate divs
    let imgs = document.querySelectorAll(".inspiration_img");
    // declare timelines
    let masterTl = new gsap.timeline();
    let startAnimationTl = new gsap.timeline();

    // on start slide images to the display window
    const startTl = () => {
      return startAnimationTl
        .to(close, {
          opacity: 1,
          ease: Power1.easeOut,
          duration: 0.1,
          delay: 0.5
        })
        .to(imgs[2], {
          x: -1000,
          ease: Power1.easeOut,
          duration: 1,
          delay: 0.5
        })
        .to(imgs[0], {
          x: -1400,
          ease: Power1.easeOut,
          duration: 0.5
        })
        .to(imgs[1], {
          x: -1100,
          ease: Power1.easeOut,
          duration: 1.1
        });
    };
    // after first timeline animation, start second animation on all images
    const animateAllTl = () => {
      // create new timeline
      let secondTl = gsap.timeline();
      let modalTl = gsap.timeline();
      // get modal div and pop up image
      const modalBlock = document.querySelector(".modal_block");
      const modalClose = document.querySelector(".modal_close");
      // loop thru images and add animation and functionality for modal
      imgs.forEach(img => {
        // modal functionality
        img.addEventListener("click", () => {
          console.log(img.parentElement);
          // calculate window hight
          let height = window.innerHeight / 2;
          // pause the timeline
          secondTl.pause();
          // play modal timeline
          modalTl
            .to(img.parentElement, {
              opacity: 1,
              y: height,
              duration: 3
            })
            // animating modal block
            .to(modalBlock, {
              opacity: 0.4,
              display: "block",
              duration: 1
            })
            // animate cancel button
            .to(modalClose, {
              display: "block",
              x: 300,
              ease: Power1.easeInOut,
              duration: 1
            });
        });
        gsap.to(img, {
          x: -5000,
          ease: Power1.easeInOut,
          duration: randomFloatBetween(60, 110), // add random duration to each image
          yoyoEase: Power1.easeInOut,
          repeat: -1,
          parent: secondTl
        });
      });

      return secondTl;
    };
    // chain all timelines in to one

    const chainAllTl = () => {
      masterTl.add(startTl());
      masterTl.add(animateAllTl(), "-=0.2");
    };
    // call timeline
    chainAllTl();
    // make the div container draggable
    Draggable.create(container, {
      type: "x",
      edgeResistance: 0.5,
      autoScroll: 2,
      throwProps: true
    });
  }, []);

  return (
    <div className="inspiration_wrapper">
      <div className="modal_block"></div>
      <div className="modal_close"></div>
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
              top: `${randomFloatBetween(0, 60, 0)}%`,
              right: `0`,
              margin: `0 ${randomMarginX()}px`
            }}
          >
            <img
              className="inspiration_img"
              style={{
                width: randomFloatBetween(120, 250, 0),
                height: randomFloatBetween(170, 220, 0)
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
