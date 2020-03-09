import React from "react";
// import icons
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import FacebookIcon from "@material-ui/icons/Facebook";

const Contact = () => {
  const socialMedia = () => (
    <div>
      <a
        className="social_facebook link_nostyle"
        target="blank"
        href="https://www.facebook.com/R%C4%97minimo-centras-286353158077592"
      >
        <FacebookIcon style={{ fontSize: "40px" }} />
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
            <PhoneInTalkIcon style={{ marginRight: "10px" }} /> (8-689) 36033
          </div>
          <div className="icon_text">
            <AlternateEmailIcon style={{ marginRight: "10px" }} />
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
