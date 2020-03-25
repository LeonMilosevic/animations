import React, { useState } from "react";
// import helpers
import { getWishLocalStorage } from "./helpers";
// import images
import imgWood from "../../assets/machine.jpg";

const Wishlist = () => {
  const [wishlist, setWishList] = useState([]);
  const [displayPic, setDisplayPic] = useState({});
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
    setWishList(getWishLocalStorage());
  }, []);

  const handleDisplayPic = item => {
    setDisplayPic(item);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col s12 m7 l7">
          {wishlist.length > 0 && (
            <div className="grid_container">
              {wishlist.slice(0, 15).map((item, id) => (
                <div
                  key={id}
                  onClick={() => handleDisplayPic(item)}
                  className="grid_item"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
              ))}
            </div>
          )}
        </div>
        <div className="col s12 m3 l3">
          <div className="display_box">
            <div
              style={{ backgroundImage: `url(${displayPic.image})` }}
              className="display_box_img"
            ></div>
            <div className="display_box_textbox">
              <div className="display_box_textbox__title">
                {displayPic.title}
              </div>
              <div className="display_box_textbox__description">
                {displayPic.description}
              </div>
              <div className="display_box_textbox__price">
                {displayPic.price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
