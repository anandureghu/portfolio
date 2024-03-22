import React from "react";
import "./ContactSection.scss";

const ContactSection: React.FC = () => {
  return (
    <div className="contact">
      <div className="contact__content">
        <div className="contact__content--title">Say Hi👋</div>
        <div className="contact__content--details">
          <input type="text" placeholder="Your name" />
          <textarea placeholder="Description"></textarea>
          <button>Send mail</button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
