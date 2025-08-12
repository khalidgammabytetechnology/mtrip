'use client';

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/HeroSection.css";
import Link from "next/link";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingData = { name, email, phone, message: "Footer Callback Request" };

    try {
      const res = await fetch("/api/send-booking-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const result = await res.json();
      if (result.success) {
        setShowSuccess(true);
        setName("");
        setEmail("");
        setPhone("");
        setTimeout(() => setShowSuccess(false), 4000);
      } else {
        alert("Failed to send callback request.");
      }
    } catch (err) {
      alert("Error sending callback request.");
    }
  };

  return (
    <footer className="pb-4 mt-5 position-relative">
      <div className="container text-start">
        {showSuccess && (
          <div className="custom-alert-box">
            <strong>localhost:3000 says</strong>
            <p>Callback request sent successfully!</p>
            <button className="btn btn-sm btn-primary mt-2" onClick={() => setShowSuccess(false)}>
              OK
            </button>
          </div>
        )}

        <div className="row gy-4">
          {/* Company Info */}
          <div className="col-lg-3 col-md-6 col-12">
            <div className="mb-4">
              <Image src="/Assets/logo.png" alt="MTrip Logo" width={80} height={40} />
            </div>
            <p className="sub-text">
              Exceptional hospitality, seamless travel experiences, and premium stays since 2015. Your trusted travel partner in India and beyond.
            </p>
          </div>

          {/* Company Links */}
          <div className="col-lg-3 col-md-6 col-12">
            <h5 className="mb-4 fw-bold">Our Company</h5>
            <ul className="list-unstyled">
              <li><a href="/our-hotels" className="sub-text text-decoration-none">Our Hotels</a></li>
              <li><a href="/tours-travels" className="sub-text text-decoration-none">Tours & Travels</a></li>
              <li><a href="/taxi-services" className="sub-text text-decoration-none">Taxi Services</a></li>
              <li><a href="/about-us" className="sub-text text-decoration-none">About Us</a></li>
              <li><a href="/contact-us" className="sub-text text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6 col-12">
            <h5 className="mb-4 fw-bold">Contact Info</h5>
            <p><FaMapMarkerAlt className="contact-icon me-2" /><span className="sub-text">1107 - A, 11 Floor, Sinergy Tower, Corporate road, Nr Vodafone house, Ahmedabad - 380015</span></p>
            <p><FaEnvelope className="contact-icon me-2" /><span className="sub-text">mtriphotels@gmail.com</span></p>
            <p><FaPhoneAlt className="contact-icon me-2" /><span className="sub-text">+91 8949412005, +91 9662263769</span></p>
          </div>

          {/* Request A Callback */}
          <div className="col-lg-3 col-md-6 col-12">
            <h5 className="mb-4 fw-bold">Request A Callback</h5>
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-2">
                <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="input-group mb-2">
                <input type="email" className="form-control" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="input-group mb-2">
                <input type="tel" className="form-control" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
              <button className="submit-btn btn-primary d-flex align-items-center gap-2" type="submit">
                <span>Submit</span> <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>

        <hr className="my-4" />
        <div className="row mt-4">
          <div className="col-md-6 col-12 text-start">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} MTrip. All rights reserved. Powered by{" "}
              <span className="d-block d-md-inline">
              <a href="https://gammabytetechnology.com/" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{ color: "#01AEDA" }}>
                Gamma Byte Technology
              </a>.
              </span>
            </p>
          </div>
          <div className="col-md-6 col-12 text-md-end text-start mt-2 mt-md-0">
            <Link href="/terms" className="mb-0 d-inline me-3 text-decoration-none text-dark">Terms and Conditions</Link>
            <Link href="/privacy" className="mb-0 d-inline text-decoration-none text-dark">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;