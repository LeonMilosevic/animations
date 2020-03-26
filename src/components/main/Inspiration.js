import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
// import third party
import { Power1 } from "gsap";
import Draggable from "gsap/Draggable";
import { Link } from "react-router-dom";
// import icons
import { MdClose } from "react-icons/md";
gsap.registerPlugin(Draggable);
const Inspiration = () => {
  const [modalOpen, setModalOpen] = useState(false);
  // array containing images to loop over and asign to img element
  const imgArr = [
    "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_24_fgewym.png",
    "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_23_kb8qfh.png",
    "https://res.cloudinary.com/clothify/image/upload/v1575472209/a2b_pjnchk.jpg",
    "https://res.cloudinary.com/clothify/image/upload/v1574116778/wish_fnfavj.jpg"
    // "https://res.cloudinary.com/clothify/image/upload/v1574116544/cart_ninize.jpg",
    // "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_24_fgewym.png",
    // "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_23_kb8qfh.png",
    // "https://res.cloudinary.com/clothify/image/upload/v1575472209/a2b_pjnchk.jpg",
    // "https://res.cloudinary.com/clothify/image/upload/v1574116778/wish_fnfavj.jpg",
    // "https://res.cloudinary.com/clothify/image/upload/v1574116544/cart_ninize.jpg",
    // "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_24_fgewym.png",
    // "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_23_kb8qfh.png",
    // "https://res.cloudinary.com/clothify/image/upload/v1575472209/a2b_pjnchk.jpg",
    // "https://res.cloudinary.com/clothify/image/upload/v1574116778/wish_fnfavj.jpg",
    // "https://res.cloudinary.com/clothify/image/upload/v1574116544/cart_ninize.jpg",
    // "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_24_fgewym.png",
    // "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_23_kb8qfh.png",
    // "https://res.cloudinary.com/clothify/image/upload/v1575472209/a2b_pjnchk.jpg",
    // "https://res.cloudinary.com/clothify/image/upload/v1574116778/wish_fnfavj.jpg",
    // "https://res.cloudinary.com/clothify/image/upload/v1574116544/cart_ninize.jpg"
  ];
  // declare ref for better dom manipulation with gsap
  let close = useRef(null);
  let container = useRef(null);

  // use effect for random funcs to avoid constant rerender of images when modal pops up

  useEffect(() => {
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

    const assignRandom = () => {
      // grab divs to assign random values
      const imageDivs = document.querySelectorAll(".div_image");
      const imgs = document.querySelectorAll(".inspiration_img");
      // assign to divs
      imageDivs.forEach(div => {
        div.style.top = `${randomFloatBetween(0, 60, 0)}%`;
        div.style.margin = `0 ${randomMarginX()}px;`;
      });
      // assign to imgs
      imgs.forEach(img => {
        img.style.width = `${randomFloatBetween(120, 250, 0)}px`;
        img.style.height = `${randomFloatBetween(170, 220, 0)}px`;
      });
    };
    assignRandom();
  }, []);

  // on mount start animations
  const animations = () => {
    // create variables needed to animate divs
    const imgs = document.querySelectorAll(".inspiration_img");
    const modalFunc = () => {
      imgs.forEach(img => {
        img.addEventListener("click", handleOpenModal);
      });
      document
        .getElementById("modal_close")
        .addEventListener("click", handleCloseModal);
    };

    const handleOpenModal = e => {
      const modalImg = document.getElementById("modal_img");
      const modalClose = document.getElementById("modal_close");
      modalImg.src = e.target.src;
      modalTlFunc(e.target, modalImg, modalClose);
      masterTl.pause();
    };

    const handleCloseModal = e => {
      e.preventDefault();
      let modalImg = e.target.parentElement.parentElement.nextSibling;
      const modalClose = document.getElementById("modal_close");
      // get the image from the main div to change its opacity back to 1
      let mainDivImage;
      imgs.forEach(img => {
        if (img.src === modalImg.src) {
          mainDivImage = img;
        }
      });
      modalTlReverseFunc(mainDivImage, modalImg, modalClose);
      masterTl.resume();
    };
    // create timelines
    const secondTl = new gsap.timeline();
    const firstTl = new gsap.timeline();
    const masterTl = new gsap.timeline({ paused: true });
    const modalTl = new gsap.timeline();
    const modalTlReverse = new gsap.timeline();

    // creating parametars for modal animation function
    const modalTlFunc = (target, modalImg, modalClose) => {
      return modalTl
        .to(target, {
          opacity: 0,
          duration: 0.5,
          onComplete: setModalOpen(true)
        })
        .from(modalImg, { opacity: 0, duration: 0.5 })
        .to(modalClose, { opacity: 1, duration: 0.5, delay: 1.5 });
    };

    const modalTlReverseFunc = (target, modalImg, modalClose) => {
      return modalTlReverse
        .from(modalImg, { opacity: 1, duration: 0.5 })
        .to(target, {
          opacity: 1,
          duration: 0.5
        })
        .to(modalClose, {
          opacity: 0,
          duration: 0.5,
          onComplete: setModalOpen(false)
        });
    };

    const firstTlFunc = () => {
      return firstTl
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

    const secondTlFunc = () => {
      // assign random time values to each image
      imgs.forEach(img => {
        gsap.to(img, {
          x: -5000,
          ease: Power1.easeInOut,
          duration: gsap.utils.random(80, 110), // add random duration to each image
          yoyoEase: Power1.easeInOut,
          repeat: -1,
          parent: secondTl
        });
      });

      return secondTl;
    };

    // chain to master timeline
    const masterTlFunc = () => {
      masterTl.add(firstTlFunc());
      masterTl.add(secondTlFunc(), "-=0.2");

      masterTl.play();
    };
    modalFunc();
    masterTlFunc();
    // modal functionality, addeventlistener because of function scope to pause animations
    // not possible to do it from outer scope
  };
  useEffect(() => {
    // call animations on mount
    animations();

    // make the div container draggable
    Draggable.create(container, {
      type: "x",
      edgeResistance: 0.5,
      autoScroll: 2,
      throwProps: true,
      zIndex: 1001
    });
  }, []);

  return (
    <>
      <div
        style={{ display: modalOpen ? "block" : "none" }}
        className="modal_container"
      >
        <Link id="modal_close" to="#" className="link_nostyle modal_close">
          <MdClose style={{ fontSize: "56px" }} />
        </Link>
        <img id="modal_img" src="" alt="" />
      </div>
      <Link
        id="close"
        ref={el => {
          close = el;
        }}
        className="link_nostyle back_icon"
        to="/"
      >
        <MdClose style={{ fontSize: "56px" }} />
      </Link>
      <div className="inspiration_wrapper">
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
                right: `0`
              }}
            >
              <img className="inspiration_img" src={img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Inspiration;
