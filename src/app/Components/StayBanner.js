'use client';

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import "../Css/HeroSection.css";
import BookingPopup from "./BookingPopup";

const bannerData = {
  "/": {
    image: "/Assets/stayHome.jpg",
    title: "Your Perfect Stay Is Just A Click Away",
    description:
      "Book with MTrip today and start your journey with confidence, comfort, and unbeatable value.",
  },
  "/our-hotels": {
    image: "/Assets/stayHotels.jpeg",
    title: "Your perfect stay is just a click away.",
    description: "Choose your destination and book today!",
  },
  "/tours-travels": {
    image: "/Assets/stayTours.jpeg",
    title: "Discover India's beauty with our expert travel services. Plan your perfect trip today",
  },
  "/taxi-services": {
    image: "/Assets/stayTexi.jpg",
    title: "Book a ride with MTrip Hotels & enjoy a hassle-free journey!",
  },
  "/about-us": {
    image: "/Assets/aaa.jpeg",
    title: "Join the MTrip family and experience hospitality like never before!",
  },
  "/hotel-solution": {
    image: "/Assets/getin.jpeg",
    title: "📞 Get in Touch with Us",
    description: "We look forward to partnering with your hotel to deliver excellence in every room. Whether you’re furnishing a new property or upgrading your current setup, MTRIP Hotel Solution is here to serve you with professionalism and care.",
  },

};

const StayBanner = () => {

  const [showBooking, setShowBooking] = useState(false);

  const handleShow = () => setShowBooking(true);
  const handleClose = () => setShowBooking(false);

  const pathname = usePathname();
  const bannerInfo = bannerData[pathname];

  if (!bannerInfo) return null;

  return (
    <section
      className="stay-banner d-flex align-items-center text-white text-center text-md-start"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "500px",
        position: "relative",
      }}
    >
      <Image
        src={bannerInfo.image}
        alt="Banner"
        fill
        className="stay-banner-image"
        style={{ objectFit: "cover" }}
      />

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-md-8 col-lg-8 text-center">
            <h1 className="stay-title">{bannerInfo.title}</h1>
            {bannerInfo.description && (
              <p className="stay-des mt-3">{bannerInfo.description}</p>
            )}
            
              <button className="stay-Bookbtn mt-3" onClick={handleShow}>
                {pathname === "/hotel-solution" ? "Inquire Now" : "Book Now"}
              </button>
            
          </div>
        </div>
      </div>
      <BookingPopup show={showBooking} handleClose={handleClose} />

    </section>
  );
};

export default StayBanner;
