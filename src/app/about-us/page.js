"use client";

import React from "react";
import Image from "next/image";
import BannerContaine from "../Components/BannerContaine";
import StayBanner from "../Components/StayBanner";
import Counter from "../Components/countBar";
import "../Css/About.css";
import Footer2 from "../Components/Footer2";

const founders = [
  {
    name: "Naresh Patel",
    title: "Founder",
    description:
      "With a vision to redefine hospitality and travel, Naresh Patel founded MTrip Hotels & Tours in 2015. His extensive experience in the hotel and travel industry has been instrumental in establishing the brand as a trusted name.",
    image: "/Assets/ff3.png",
  },
  {
    name: "Prem Patel",
    title: "Co-Founder",
    description:
      "As the Co-Founder of MTrip Hotels & Tours, Prem Patel plays a key role in driving innovation and growth. With a strong background in travel management and customer service, he ensures that MTrip Hotels provides the best-in-class hospitality and tour experiences.",
    image: "/Assets/ff2.jpg",
  },
];

const AboutUs = () => {
  return (
    <div>
      <BannerContaine />

      {/* About Section */}
      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Image Section */}
            <div className="col-lg-6 text-center">
              <Image
                src="/Assets/about-left.jpg"
                alt="About MTrip Hotels"
                className="about-image"
                width={500}
                height={400}
              />
            </div>

            {/* Text Content */}
            <div className="col-lg-6">
              <p
                className="brand-text text-orange"
                style={{ fontSize: "24px" }}
              >
                Our Story
              </p>
              <h2 className="fw-bold mb-4">
                About <span className="brand-text">MTrip</span> Hotels
              </h2>
              <p className="about-right-txt text-muted mb-3">
                Welcome to MTrip Hotels, your trusted partner in the hotel and
                travel industry since 2015. With years of experience, we are
                dedicated to providing exceptional hospitality, seamless travel
                experiences, and top-tier accommodations for our guests.
              </p>
              <p className="about-right-txt text-muted mb-3">
                At MTrip Hotels, we prioritize comfort, quality, and customer
                satisfaction. Whether you're traveling for business or leisure,
                our carefully curated selection of hotels ensures a memorable
                stay. We collaborate with leading hospitality brands and offer
                exclusive deals, making travel convenient and enjoyable for all.
              </p>
              <p className="about-right-txt text-muted mb-0">
                Our mission is to redefine travel by combining luxury,
                affordability, and excellent service. With a deep understanding
                of the industry, we continue to expand our network, offering
                guests the best travel solutions worldwide. Experience the
                difference with MTrip Hotels – where every journey is
                unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder-section py-5">
        <div className="container">
          <div className="row justify-content-center g-4">
            {founders.map((founder, idx) => (
              <div className="col-md-6 col-lg-5" key={idx}>
                <div className="founder-card text-center p-4 h-100">
                  <div className="position-relative">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      className="founder-img mb-3"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div>
                    <div className="founder-sec d-flex justify-content-between align-items-center">
                      <div className="text-center flex-grow-1">
                        <p className="text-orange fw-semibold mb-0">
                          {founder.title}
                        </p>
                        <h5 className="fw-bold">{founder.name}</h5>
                      </div>
                      <div className="vector-quote">
                        <Image
                          src="/Assets/Vector.png"
                          alt="Quote Icon"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                    <p className="text-muted mt-2">{founder.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Counter/>
      <StayBanner />
      <Footer2 />
    </div>
  );
};

export default AboutUs;
