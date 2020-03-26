import React from "react";
// import images
import imgWood from "../../assets/pictures.jpg";

const Home = () => {
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
  }, []);
  return (
    <div className="page">
      <h1>Home text</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore odit
        facere fugiat ea, distinctio omnis ad, tenetur, commodi accusantium ipsa
        praesentium officiis dicta vitae veniam pariatur eligendi. Blanditiis,
        corporis error!
      </p>
    </div>
  );
};

export default Home;
