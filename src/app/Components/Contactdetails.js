"use client";


import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../Css/Contact.css";

const ContactDetails = () => {
  return (
    <div className="contact-box-horizontal animate__animated animate__fadeInUp">
      <div className="d-flex flex-wrap justify-content-between gap-3">
        <p className="d-flex align-items-center contact-item">
          <span className="icon-box me-2 rounded">
            <FaPhoneAlt />
          </span>
          +91 8949412005 , +91 9662263769
        </p>
        <p className="d-flex align-items-center contact-item">
          <span className="icon-box me-2 rounded">
            <FaEnvelope />
          </span>
          mtriphotels@gmail.com
        </p>
        <p className="d-flex align-items-center contact-item">
          <span className="icon-box me-2 rounded">
            <FaMapMarkerAlt />
          </span>
          1107 - A, 11 Floor, Sinergy Tower, Corporate road, Nr Vodafone house, Ahmedabad - 380015
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;
