import React from "react";
// import materialize
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
// import shop api
import { woodenFrames, allFrames, plasticFrames } from "../api/shopItems";
// import images
import imgWood from "../../assets/pictures.jpg";
// import components
import Carousel from "./Carousel";
const Shop = () => {
  // create state for a theme so when the user chooses the theme, the theme will show on the page
  const [currentTheme, setCurrentTheme] = React.useState(allFrames);
  // init carousel from materialize
  React.useEffect(() => {
    let elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems);
  }, []);
  // declare variables so to change the themes accordingly
  const displayImgBackground = document.querySelector(".display-img");
  const shopNavLi = document.querySelectorAll(".shop_nav__li");
  const logoLetters = document.querySelectorAll(".letters_span");
  const mainNavLi = document.querySelectorAll(".li-items");
  // handle theme state functions
  const handleThemeWooden = () => {
    setCurrentTheme(woodenFrames);
    // changing theme to wooden
    displayImgBackground.style.filter = "none";
    displayImgBackground.style.backgroundImage = `
    linear-gradient(to top, rgba(191,153,106, 0.5), rgb(135,108,75, 0.5)),
    url(${imgWood})`;
    shopNavLi.forEach(el => {
      el.style.border = "10px solid #b59369";
    });
    logoLetters.forEach(letter => {
      letter.style.color = "rgb(222,177,123)";
    });
    mainNavLi.forEach(nav => {
      nav.style.borderBottom = "1px solid rgb(222,177,123)";
    });
  };

  const handleThemePlastic = () => {
    setCurrentTheme(plasticFrames);

    // changing theme to wooden
    displayImgBackground.style.filter = "none";
    displayImgBackground.style.backgroundImage = `
        linear-gradient(to top, rgba(230, 220, 207, 0.5), rgb(189, 179, 168, 0.5)),
        url(${imgWood})`;
    shopNavLi.forEach(el => {
      el.style.border = "10px solid #e6dccf";
    });
    logoLetters.forEach(letter => {
      letter.style.color = "#e6dccf";
    });
    mainNavLi.forEach(nav => {
      nav.style.borderBottom = "1px solid #e6dccf";
    });
  };

  const handleThemeAll = () => {
    setCurrentTheme(allFrames);
    // changing theme to general
    displayImgBackground.style.filter = "grayscale(1) brightness(50%)";
    displayImgBackground.style.backgroundImage = `url(${imgWood})`;
    shopNavLi.forEach(el => {
      el.style.border = "10px solid white";
    });
    logoLetters.forEach(letter => {
      letter.style.color = "white";
    });
    mainNavLi.forEach(nav => {
      nav.style.borderBottom = "1px solid white";
    });
  };

  return (
    <div className="shop_container">
      <Carousel items={currentTheme} />
      <div className="shop_nav">
        <div onClick={handleThemeWooden} className="shop_nav__li">
          Wooden frames
        </div>
        <div onClick={handleThemePlastic} className="shop_nav__li">
          Plastic frames
        </div>
        <div onClick={handleThemeAll} className="shop_nav__li">
          All frames
        </div>
      </div>
    </div>
  );
};

export default Shop;
