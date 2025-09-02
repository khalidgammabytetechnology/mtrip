"use client";

import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/HeroSection.css";

// Component imports
import HotelSection from "../Components/HotelSection";
import OfferSection from "../Components/OfferSection";
import CabServicesSection from "../Components/CabServicesSection";
import WhyChooseSection from "../Components/WhyChooseSection";
import TestimonialSection from "../Components/TestimonialSection";
import StayBanner from "../Components/StayBanner";
import Footer from "../Components/Footer";
import BannerContaine from "../Components/BannerContaine";

const Home = () => {
  return (
    <div>
      <BannerContaine />

      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side - Images */}
            <div className="col-12 col-lg-6 mb-4 mb-lg-0 position-relative">
              <div className="image-stack position-relative">
                {/* Decorative Vector */}
                <div
                  className="position-absolute d-none d-sm-block" // hide on xs
                  style={{
                    left: "-60px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 0,
                  }}
                >
                  <Image
                    src="/Assets/about-vector.png"
                    alt="Decorative Vector"
                    width={80}
                    height={80}
                  />
                </div>

                {/* Main Image */}
                <Image
                  src="/Assets/hotel-list3.jpg"
                  alt="Main"
                  className="img-fluid rounded shadow-lg main-img w-100"
                  width={500}
                  height={350}
                  style={{ objectFit: "cover" }}
                />

                {/* Overlay Image (optional, style to prevent overflow) */}
                <Image
                  src="/Assets/hotel-list2.jpg"
                  alt="Overlay"
                  className="img-fluid rounded overlay-img w-100 mt-4"
                  width={500}
                  height={350}
                  style={{ objectFit: "cover" }}
                />

                {/* Experience Box */}
                <div
                  className="experience-box position-absolute text-center bg-white px-3 py-2 rounded shadow"
                  style={{
                    bottom: "10px",
                    right: "10px",
                    zIndex: 2,
                    fontSize: "0.8rem",
                  }}
                >
                  <h5 className="experience-num mb-0 fw-bold">25</h5>
                  <small>Years of Experience</small>
                </div>

                {/* Ribbon */}
                <div
                  className="ribbon position-absolute"
                  style={{ top: "45.2%", right: "43%", zIndex: 2 }}
                >
                  25,000+ Customers Worldwide
                </div>
              </div>
            </div>

            {/* Right Side - Text */}
            <div className="col-lg-6 text-center text-lg-start position-relative">
              {/* Text content */}
              <p
                className="text-orange mb-1"
                style={{ fontFamily: "Yesteryear", fontSize: "25px" }}
              >
                About Us
              </p>

              <h2 className="about-title fw-bold">
                About{" "}
                <span
                  className="about-title-span text-orange"
                  style={{ fontFamily: "Yesteryear" }}
                >
                  MTrip
                </span>{" "}
                Hotels
              </h2>

              <p className="about-des text-muted mt-3">
                Since 2015, MTrip Hotels has been dedicated to providing
                exceptional hospitality, seamless travel experiences, and
                top-tier accommodations. Whether you're traveling for business
                or leisure, our handpicked hotels ensure a memorable stay. Our
                mission is to redefine travel by combining luxury,
                affordability, and excellent service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HotelSection />
      <OfferSection />
      <CabServicesSection />
      <WhyChooseSection image="/Assets/HotelSolution.avif"/>
      <TestimonialSection />
      <StayBanner />
      <Footer />
    </div>
  );
};

export default Home;
