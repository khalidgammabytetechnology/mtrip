"use client";

import React from "react";
import BannerContaine from "../Components/BannerContaine";
import FaqSection from "../Components/FaqSection";
import StayBanner from "../Components/StayBanner";
import Footer2 from "../Components/Footer2";
import "../Css/contact.Us.css"
import ContactForm from "../Components/ContactForm";
import Contactdetails from "../Components/Contactdetails";
import Maps from "../Components/maps";



const ContactUs = () => {

  return (
    <div className="contact-wrapper">
      <div className="contact-top-section">
        <div className="contact-left">
          <BannerContaine />
        </div>
        <div className="contact-right">
          <ContactForm />
        </div>
      </div>

      <Contactdetails />
      <div>
        <Maps />
      </div>

      <FaqSection />
      <StayBanner />
      <Footer2 />
    </div>
  );
};

export default ContactUs;