import React from "react";
// import icons
import { MdPhoneInTalk, MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
// import images
import imgWood from "../../assets/pictures.jpg";

const Contact = () => {
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
  const socialMedia = () => (
    <div>
      <a
        className="social_facebook link_nostyle"
        target="blank"
        href="https://www.facebook.com/R%C4%97minimo-centras-286353158077592"
      >
        <FaFacebookSquare style={{ fontSize: "40px" }} />
      </a>
    </div>
  );
  return (
    <>
      <div className="contact_wrapper">
        <h4 className="contact_subheader">working hours</h4>
        <div>Mon-Fri: 8:30-18:30</div>
        <div>Weekend: 9-30-14:30</div>
        <div style={{ marginTop: "20px" }}>
          <h4 className="contact_subheader">Contact info</h4>
          <div className="icon_text">
            <MdPhoneInTalk style={{ marginRight: "10px" }} /> (8-689) 36033
          </div>
          <div className="icon_text">
            <MdEmail style={{ marginRight: "10px" }} />
            domaskazakeviucius@gmail.com
          </div>
        </div>
      </div>
      <div className="social_media">
        <h4 className="contact_header">Find us on</h4>
        {socialMedia()}
      </div>
    </>
  );
};

export default Contact;
