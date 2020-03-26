import React, { useState, useRef } from "react";
// import gsap
import { gsap, Power1 } from "gsap";
// import helpers
import { getWishLocalStorage, removeWishLocalStorage } from "./helpers";
// import images
import imgWood from "../../assets/machine.jpg";
// import icons
import { MdDelete } from "react-icons/md";

const Wishlist = () => {
  // declare states
  const [wishlist, setWishList] = useState([]);
  const [displayPic, setDisplayPic] = useState({});
  // declare vars
  let displayBox = useRef(null);
  // check for the theme, if not change it
  React.useEffect(() => {
    // declare variables so to change the themes accordingly
    const displayImgBackground = document.querySelector(".display-img");
    if (displayImgBackground.style.filter === "none") {
      const shopNavLi = document.querySelectorAll(".shop_nav__li");
      const logoLetters = document.querySelectorAll(".letters_span");
      const mainNavLi = document.querySelectorAll(".li-items");
      // changing theme to general
      displayImgBackground.style.filter = "grayscale(1) brightness(50%)";
      displayImgBackground.style.backgroundImage = `url(${imgWood})`;
      shopNavLi.forEach(el => {
        el.style.border = "15px solid pink";
      });
      logoLetters.forEach(letter => {
        letter.style.color = "white";
      });
      mainNavLi.forEach(nav => {
        nav.style.borderBottom = "1px solid white";
      });
    }
    // populate state with items from ls
    setWishList(getWishLocalStorage);
  }, []);
  // onclick change the display pic of a selected item
  const handleDisplayPic = (item, event) => {
    if (event.target.tagName === "DIV") {
      setDisplayPic(item);
      // animate with gsap
      let tl = new gsap.timeline();
      tl.to(displayBox, { opacity: 1, duration: 0.5, ease: Power1 });
    }
  };

  const removeItem = (id, e) => {
    // it can be clicked on svg or path
    const targetPath = e.target.parentElement;
    const targetSvg = e.target.parentElement.parentElement;
    let tl = new gsap.timeline();
    if (targetSvg.tagName === "DIV") {
      tl.to(targetSvg, {
        opacity: 0,
        duration: 0.5,
        ease: Power1
      });
      setTimeout(() => {
        removeWishLocalStorage(id, () => setWishList(getWishLocalStorage));
      }, 1000);
    } else if (targetPath.tagName === "DIV") {
      tl.to(targetPath, {
        opacity: 0,
        duration: 0.5,
        ease: Power1
      });
      setTimeout(() => {
        removeWishLocalStorage(id, () => setWishList(getWishLocalStorage));
      }, 1000);
    }
  };
  return (
    <div className="container-fluid">
      {wishlist.length === 0 ? (
        <h1 className="wishlist_empty">Empty</h1>
      ) : (
        <div className="row">
          <div className="col s12 m7 l7">
            {wishlist.length > 0 && (
              <div className="grid_container">
                {wishlist.slice(0, 15).map((item, id) => (
                  <div
                    key={id}
                    onClick={event => handleDisplayPic(item, event)}
                    className="grid_item"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <MdDelete
                      className="grid_item__remove"
                      onClick={e => removeItem(item.id, e)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="col s12 m3 l3">
            <div
              className="display_box"
              ref={el => {
                displayBox = el;
              }}
            >
              <div
                style={{ backgroundImage: `url(${displayPic.image})` }}
                className="display_box_img"
              ></div>
              <div className="display_box_textbox">
                <div className="display_box_textbox__wrap">
                  <div className="display_box_textbox__title">
                    {displayPic.title}
                  </div>
                  <div className="display_box_textbox__description">
                    {displayPic.description}
                  </div>
                  <div className="display_box_textbox__price">
                    &euro;{displayPic.price}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
