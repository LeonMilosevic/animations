import React from "react";
// import materialize
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
// import third party
import { Link } from "react-router-dom";
// import images
import imgWood from "../../assets/machine.jpg";
const Shop = () => {
  // create state for a theme so when the user chooses the theme, the theme will show on the page
  const [theme, setTheme] = React.useState({
    all: true,
    wooden: false,
    plastic: false,
    third: false
  });
  // init carousel from materialize
  React.useEffect(() => {
    let elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems);
  }, []);
  // arrays of elems
  const allThemeArr = [
    "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_24_fgewym.png",
    "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_23_kb8qfh.png",
    "https://res.cloudinary.com/clothify/image/upload/v1575472209/a2b_pjnchk.jpg",
    "https://res.cloudinary.com/clothify/image/upload/v1574116778/wish_fnfavj.jpg"
  ];
  const woodenThemeArr = [
    "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_24_fgewym.png",
    "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_24_fgewym.png",
    "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_24_fgewym.png",
    "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_24_fgewym.png",
    "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_24_fgewym.png",
    "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_24_fgewym.png"
  ];
  const plasticThemeArr = [
    "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_23_kb8qfh.png",
    "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_23_kb8qfh.png",
    "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_23_kb8qfh.png",
    "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_23_kb8qfh.png",
    "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_23_kb8qfh.png",
    "https://res.cloudinary.com/clothify/image/upload/v1578599563/Asset_23_kb8qfh.png"
  ];
  const thirdThemeArr = [
    "https://res.cloudinary.com/clothify/image/upload/v1575472209/a2b_pjnchk.jpg",
    "https://res.cloudinary.com/clothify/image/upload/v1575472209/a2b_pjnchk.jpg",
    "https://res.cloudinary.com/clothify/image/upload/v1575472209/a2b_pjnchk.jpg",
    "https://res.cloudinary.com/clothify/image/upload/v1575472209/a2b_pjnchk.jpg",
    "https://res.cloudinary.com/clothify/image/upload/v1575472209/a2b_pjnchk.jpg",
    "https://res.cloudinary.com/clothify/image/upload/v1575472209/a2b_pjnchk.jpg",
    "https://res.cloudinary.com/clothify/image/upload/v1575472209/a2b_pjnchk.jpg",
    "https://res.cloudinary.com/clothify/image/upload/v1575472209/a2b_pjnchk.jpg"
  ];
  // declare variables so to change the themes accordingly
  const displayImgBackground = document.querySelector(".display-img");
  const shopNavLi = document.querySelectorAll(".shop_nav__li");
  const logoLetters = document.querySelectorAll(".letters_span");
  const mainNavLi = document.querySelectorAll(".li-items");
  // handle theme state functions
  const handleThemeWooden = () => {
    setTheme({ wooden: true, all: false, plastic: false, third: false });
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
    setTheme({ wooden: false, all: false, plastic: true, third: false });
  };

  const handleThemeThird = () => {
    setTheme({ wooden: false, all: false, plastic: false, third: true });
  };

  const handleThemeAll = () => {
    setTheme({ wooden: false, all: true, plastic: false, third: false });
  };

  const carousel = arr => (
    <div className="carousel">
      {arr.map((el, id) => (
        <Link key={id} to="/" className="carousel-item" href="#one!">
          <img className="carousel-img" alt="" src={el} />
        </Link>
      ))}
    </div>
  );

  return (
    <div className="shop_container">
      {theme.wooden
        ? carousel(woodenThemeArr)
        : theme.plastic
        ? carousel(plasticThemeArr)
        : theme.third
        ? carousel(thirdThemeArr)
        : theme.all
        ? carousel(allThemeArr)
        : carousel(allThemeArr)}
      <div className="shop_nav">
        <div onClick={handleThemeWooden} className="shop_nav__li">
          Wooden frames
        </div>
        <div onClick={handleThemePlastic} className="shop_nav__li">
          Plastic frames
        </div>
        <div onClick={handleThemeThird} className="shop_nav__li">
          Thrid frames
        </div>
        <div onClick={handleThemeAll} className="shop_nav__li">
          All frames
        </div>
      </div>
    </div>
  );
};

export default Shop;
