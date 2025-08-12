import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";

const Footer2 = () => {
  return (
    <footer className="pb-4 mt-5">
      <div className="container text-start">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-6 col-12">
            <div className="mb-4">
                          <Image
                        src="/Assets/logo.png"
                        alt="MTrip Logo"
                        width={80}
                        height={40}
                      />
                        </div>

            <p className="sub-text">
              Exceptional hospitality, seamless travel experiences, <br></br> and premium
              stays since 2015. Your trusted travel partner in India and beyond.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <h5 className="mb-4 fw-bold">Our Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/our-hotels" className="sub-text text-decoration-none">
                  Our Hotels
                </a>
              </li>
              <li>
                <a href="/tours-travels" className="sub-text text-decoration-none">
                  Tours & Travels
                </a>
              </li>
              <li>
                <a href="/taxi-services" className="sub-text text-decoration-none">
                  Taxi Services
                </a>
              </li>
              <li>
                <a href="/about-us" className="sub-text text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact-us" className="sub-text text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <h5 className="mb-4 fw-bold">Contact Info</h5>
            <p>
              <FaMapMarkerAlt className="contact-icon me-2" />
              <span className="sub-text">
                1107 - A, 11 Floor, Sinergy Tower, Corporate road, Nr Vodafone house, Ahmedabad - 380015
              </span>
            </p>
            <p>
              <FaEnvelope className="contact-icon me-2" />
              <span className="sub-text">mtriphotels@gmail.com</span>
            </p>
            <p>
              <FaPhoneAlt className="contact-icon me-2" />
              <span className="sub-text">+91 8949412005, +91 9662263769</span>
            </p>
          </div>
        </div>

        <hr className="my-4" />
        <div className="row mt-4">
          <div className="col-md-6 col-12 text-start">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} MTrip. All rights reserved.
              Powered by{" "}
              <span className="d-block d-md-inline">
              <a
                href="https://gammabytetechnology.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
                style={{ color: "#01AEDA" }}
              >
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

export default Footer2;