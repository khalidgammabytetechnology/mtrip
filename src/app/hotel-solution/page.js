"use client";

import React from "react";
import BannerContaine from "../Components/BannerContaine";
import StayBanner from "../Components/StayBanner";
import Footer from "../Components/Footer";
import Image from "next/image";
import "../Css/HotelSolution.css";

const data = [
  {
    title: "Hotel Bed Linen You Can Trust",
    description:
      "We offer a wide range of premium-quality bed linens made from durable, soft, and high thread-count fabric. Our linen collection is designed to withstand industrial washing while providing a plush and comfortable feel for guests.",
    sectionTitle: "Our bed linen range includes:",
    items: [
      { label: "Bedsheets in all sizes (Single, Double, Queen, King)", image: "/Assets/Bed1.jpg" },
      { label: "Pillow covers and duvet covers", image: "/Assets/Bed2.jpg" },
      { label: "Bed runners and mattress protectors", image: "/Assets/Bed3.jpg" },
      { label: "Custom embroidery and branding options available", image: "/Assets/embroidery.jpg" },
    ],
  },
  {
    title: "Guest Room Amenities for Modern Hospitality",
    description:
      "We understand the importance of small comforts that leave lasting impressions. Our in-room amenities are selected to ensure convenience, hygiene, and luxury for every guest.",
    sectionTitle: "We provide:",
    items: [
      { label: "Hair Dryers (Wall-mounted or portable)", image: "/Assets/ra1.jpeg" },
      { label: "Electric Kettle Sets with hospitality trays, mugs, tea & coffee kits", image: "/Assets/ra2.jpeg" },
      { label: "Mini Fridges - compact and energy efficient", image: "/Assets/ra3.jpeg" },
      { label: "Door Locks - smart card or RFID-based for guest safety", image: "/Assets/ra4.jpg" },
      { label: "Bath Kits - including soap, shampoo, shower caps, dental & shaving kits", image: "/Assets/ra5.webp" },
    ],
  },
  {
    title: "Mattress Solutions for Every Comfort Need",
    description:
      "Comfort starts with a good night\u2019s sleep. We supply hotel-grade mattresses built for both durability and support, available in all sizes and designs.",
    sectionTitle: "Types available:",
    items: [
      { label: "Memory Foam Mattresses", image: "/Assets/mattress1.jpg" },
      { label: "Spring Mattresses", image: "/Assets/mattress2.webp" },
      { label: "Orthopedic Mattresses", image: "/Assets/mattress3.webp" },
      { label: "Customized mattress sizes as per hotel room layout", image: "/Assets/mattress4.avif" },
    ],
  },
  {
    title: "Soft Furnishings & Towel Range",
    description:
      "Add warmth and aesthetic appeal to your rooms with our high-quality soft furnishings and towel sets.",
    sectionTitle: "Available Products:",
    items: [
      { label: "Comforters, Cushions & Cushion Covers", image: "/Assets/cushions1.jpg" },
      { label: "Blankets, Bolsters", image: "/Assets/blankets.jpg" },
      { label: "Bath Towels, Hand Towels, Face Towels", image: "/Assets/cushions.jpg" },
    ],
  },
];

const benefits = [
  {
    title: "Premium Quality Products",
    description: "Tested for hotel-grade durability and comfort.",
  },
  {
    title: "Affordable Rates",
    description: "Competitive pricing with bulk order benefits.",
  },
  {
    title: "Pan-India Delivery",
    description: "Timely dispatch and logistics across the country.",
  },
  {
    title: "Custom Branding",
    description: "Logos, embroidery, and personalized packaging.",
  },
  {
    title: "Trusted by Hoteliers",
    description:
      "Serving all types of hotel businesses with satisfaction.",
  },
  {
    title: "Reliable Support",
    description:
      "Friendly and efficient after-sales service.",
  },
];

const Section = ({ title, description, sectionTitle, items }) => (
  <section className="hotel-section1 py-5">
    <div className="container">
      <div className="text-center mb-4">
        <h2 className="fw-bold mb-3 text-orange">{title}</h2>
        <p className="text-muted mb-3">{description}</p>
      </div>
      <h5 className="text-center fw-semibold mb-4">{sectionTitle}</h5>
      <div className={`row g-4 ${
          title === "Soft Furnishings & Towel Range" ? "justify-content-center" : ""
        }`}>
        {items.map((item, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <div className="card1 h-100 shadow-sm border-0">
              <img
                src={item.image}
                alt={item.label}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card1-body">
                <p className="mb-0 small text-center text-muted">{item.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HotelSolution = () => {
  return (
    <div>
      <BannerContaine />

      <section className="intro-section1 py-5 bg-white">
        <div className="container text-center">
          <h1 className="fw-bold mb-3">
            Welcome to <span className="brand-text">MTRIP Hotel Solution</span>
          </h1>
          <p className="text-muted">
            At MTRIP Hotel Solution, we are proud to be one of India’s most reliable suppliers of hotel linens and
            in-room amenities. With a strong focus on quality, affordability, and service, we help hotels create
            exceptional guest experiences through well-crafted products designed for daily use in the hospitality
            industry.
          </p>
          <p className="text-muted">
            Whether you operate a luxury resort, a business hotel, a boutique stay, or a budget-friendly accommodation,
            MTRIP provides tailored solutions to meet your unique needs.
          </p>
        </div>
      </section>

      {data.map((section, idx) => (
        <Section key={idx} {...section} />
      ))}

      <section className="choose-texi1 py-4">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row align-items-center w-100" style={{ maxWidth: "1200px" }}>
            {/* Image Side */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="position-relative choose-img-wrapper1">
                <Image
                  src="/Assets/solution.jpg"
                  alt="Taxi"
                  className="choose-img1 img-fluid w-100"
                  style={{ objectFit: "cover", height:"45.5vh", borderRadius: "15px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)"}}
                  height={700}
                  width={700}
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
                    MTrip Hotel Solution
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
      </section>
      <StayBanner />
      <Footer />
    </div>
  );
};

export default HotelSolution;
