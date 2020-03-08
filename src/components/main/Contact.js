import React from "react";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

const Contact = () => {
  return (
    <>
      <div className="contact_wrapper">
        <h2 className="contact_header">Contact info</h2>
        <h4 className="contact_subheader">working hours</h4>
        <div>Mon-Fri: 8:30-18:30</div>
        <div>Weekend: 9-30-14:30</div>
        <h4 className="contact_subheader">Contact info</h4>
        <div>
          <PhoneInTalkIcon /> (8-689) 36033
        </div>
        <div>
          <AlternateEmailIcon />
          domaskazakeviucius@gmail.com
        </div>
      </div>
      <div className="social_media">
        <h4 className="contact_header">Social Media</h4>
      </div>
    </>
  );
};

export default Contact;
