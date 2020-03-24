import React from "react";
// import materialize
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
// import shop api
import { woodenFrames, allFrames, plasticFrames } from "../api/shopItems";
// import images
import imgWood from "../../assets/machine.jpg";
// import components
import Carousel from "./Carousel";
const Shop = () => {
  // create state for a theme so when the user chooses the theme, the theme will show on the page
  const [currentTheme, setCurrentTheme] = React.useState(woodenFrames);
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
      el.style.border = "15px solid #b59369";
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
  };

  const handleThemeAll = () => {
    setCurrentTheme(allFrames);
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
