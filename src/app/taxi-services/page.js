"use client";

import React, { useState } from "react";
import Image from "next/image";
import BannerContaine from "../Components/BannerContaine";
import StayBanner from "../Components/StayBanner";
import Footer from "../Components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/TaxiServices.css";
import BookingPopup from "../Components/BookingPopup";

const carOptions = [
  {
    title: "Sedans",
    models: "Honda City, Maruti Dzire",
    description:
      "Ideal for solo and business travelers looking for smooth and efficient rides.",
    image: "/Assets/carserv3.jpg",
  },
  {
    title: "Luxury SUVs",
    models: "Mercedes-Benz GLS, BMW X7",
    description:
      "Perfect for families and executive travelers seeking extra space and style.",
    image: "/Assets/carserv4.webp",
  },
  {
    title: "Tempo Traveler & Urbania",
    models: "Tempo Traveler & Urbania",
    description:
      "Spacious and comfortable vehicles ideal for group travel and tours and travels.",
    image: "/Assets/carserv2.webp",
  },
  {
    title: "Hatchback",
    models: "Swift, Tiago,",
    description:
      "Ideal for individuals or couples seeking a sleek, sporty drive with style.",
    image: "/Assets/carserv1.webp",
  },
];

const benefits = [
  {
    title: "Professional & Experienced Drivers",
    description: "Trained for safe, courteous, and efficient rides.",
  },
  {
    title: "Punctual & Reliable Service",
    description: "Always on time — for every pickup and drop-off.",
  },
  {
    title: "Affordable & Transparent Pricing",
    description: "No hidden charges, just honest, value-driven fares.",
  },
  {
    title: "24/7 Availability",
    description: "Book a ride anytime, day or night.",
  },
  {
    title: "Comfort & Safety Assured",
    description:
      "All vehicles are clean, sanitized, and well-maintained for your peace of mind.",
  },
];

const TaxiServices = () => {

  const [showBooking, setShowBooking] = useState(false);
const [selectedCar, setSelectedCar] = useState("");
  const handleShow = (carType) => {
  setSelectedCar(carType);
  setShowBooking(true);
};
  const handleClose = () => setShowBooking(false);

  return (
    <div>
      <BannerContaine />

      <section className="cab-services py-5">
        <div className="container">
          <div className="row justify-content-between align-items-center mb-4">
            <div className="col-md-6">
              <p
                className="mb-1 text-orange"
                style={{ fontFamily: "Yesteryear", fontSize: "25px" }}
              >
                Cab Services
              </p>
              <h2 className="fw-bold">
                Premium{" "}
                <span className="text-orange" style={{ fontFamily: "Yesteryear" }}>
                  Cab
                </span>{" "}
                Services
              </h2>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="cab-subTitle text-muted mb-0">
                At MTrip Hotels & Tours, we offer reliable and comfortable cab
                services for corporate travelers, business executives, and
                tourists across India. Choose from Sedans, SUVs, Tempo
                Travelers, and more!
              </p>
            </div>
          </div>

          <div className="row g-4">
            {carOptions.map((car, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                <div className="card taxi-card h-100 border-0 shadow-sm overflow-hidden">
                  <Image
                    src={car.image}
                    alt={car.title}
                    className="card-img-top"
                    style={{ objectFit: "cover" }}
                    height={180}
                    width={300}
                  />
                  <div className="card-body px-3 pt-3 pb-4">
                    <h6 className="carOption-title mb-2">{car.title}</h6>
                    <p className="text-muted small mb-3">{car.models}</p>
                    <hr className="my-2" />
                    <p className="text-muted small mb-3 mt-3">
                      {car.description}
                    </p>
                    <hr />
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-orange btn-sm px-3 rounded-pill"
                        onClick={() => handleShow(car.title)}>
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-muted text-center mt-4">
            <span className="text-danger" style={{ fontSize: "18px", fontWeight: 600 }}>
              *
            </span>{" "}
            Additional premium vehicles are available on request.
          </p>
        </div>
      </section>

      <section className="choose-texi py-5">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row align-items-center w-100" style={{ maxWidth: "1200px" }}>
            {/* Image Side */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="position-relative choose-img-wrapper">
                <Image
                  src="/Assets/texi.jpeg"
                  alt="Taxi"
                  className="choose-img img-fluid w-100"
                  style={{ objectFit: "cover", borderRadius: "12px" }}
                  height={800}
                  width={800}
                />
                <div
                  className="position-absolute text-white bg-orange diamond-badge d-flex justify-content-center align-items-center"
                  style={{ bottom: "20px", left: "20px" }}
                >
                  <span
                    className="text-center badge-text"
                    style={{ fontFamily: "Yesteryear" }}
                  >
                    Never stop Exploring
                  </span>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="col-lg-6">
              <div className="choose-right-txt">
                <p
                  className="text-orange mb-1"
                  style={{ fontFamily: "Yesteryear", fontSize: "25px" }}
                >
                  Why MTrip
                </p>
                <h2 className="fw-bold mb-3">
                  Why Choose{" "}
                  <span
                    className="text-orange"
                    style={{ fontFamily: "Yesteryear" }}
                  >
                    MTrip
                  </span>
                  ?
                </h2>
                <p className="text-muted mb-4">
                  We make travel easy, affordable, and memorable with reliable
                  service and trusted partnerships.
                </p>

                {benefits.map((item, idx) => (
                  <div className="d-flex mb-3" key={idx}>
                    <div className="me-3 flex-shrink-0">
                      <Image
                        src="/Assets/plane.png"
                        alt="Plane Icon"
                        width={60}
                        height={60}
                        className="img-fluid"
                      />
                    </div>
                    <div>
                      <h6 className="mb-1 fw-bold">{item.title}</h6>
                      <p className="mb-0 text-muted small">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <BookingPopup show={showBooking} handleClose={handleClose} bookingItem={selectedCar} />
      </section>
      <StayBanner />
      <Footer />
    </div>
  );
};

export default TaxiServices;
