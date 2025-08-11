// pages/tours-travels.js

import React from 'react';
import BannerContaine from "../Components/BannerContaine";
import TravelsServices from '../Components/TravelsServices';
import FeaturedDestinations from '../Components/FeaturedDestinations';
import WhyChooseSection from '../Components/WhyChooseSection';
import StayBanner from "../Components/StayBanner";
import Footer from "../Components/Footer";

const ToursTravels = () => {
  return (
    <div>
      {/* Banner Section */}
      <div>
        <BannerContaine />
      </div>

      {/* Travel Services */}
      <div>
        <TravelsServices />
      </div>

      {/* Featured Destinations */}
      <div>
        <FeaturedDestinations />
      </div>

      {/* Travel Partner Section */}
      <div className="travel-partner-section py-5">
        <div className="travel-partner-inner">

          {/* Left: Logo */}
          <div className="partner-logo">
            <img
              src="/Assets/logo1.png"
              alt="Aryavarta Tourism Logo"
              className="partner-logo-img"
            />
          </div>

          {/* Right: Text */}
          <div className="partner-content">
            <h2 className="travel-partner-title fw-bold mb-3 text-center">
              Our Travel Partner
            </h2>
            <p className="travel-partner-description mb-2 text-center">
              Explore India like never before with MTrip’s exclusive tour packages, in partnership with <span className="partner-name">Aryavarta Tourism</span>.
              From the majestic Himalayas in the North to the tranquil backwaters of Kerala in the South, our expertly curated journeys cover the most iconic and hidden gems across the country. Enjoy seamless travel, premium stays, and authentic cultural experiences. Let MTrip and Aryavarta take you on an unforgettable Indian adventure.
            </p>
          </div>

        </div>
      </div>

      <div>
        <WhyChooseSection image="/Assets/tourT.jpg" />
      </div>

      <div>
        <StayBanner />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ToursTravels;
