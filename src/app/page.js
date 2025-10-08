// "use client";

// import React from "react";
// import Image from "next/image";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../app/Css/HeroSection.css";

// // Component imports
// import HotelSection from "./Components/HotelSection";
// import OfferSection from "./Components/OfferSection";
// import CabServicesSection from "./Components/CabServicesSection";
// import WhyChooseSection from "./Components/WhyChooseSection";
// import TestimonialSection from "./Components/TestimonialSection";
// import StayBanner from "./Components/StayBanner";
// import Footer from "./Components/Footer";
// import BannerContaine from "./Components/BannerContaine";

// const Home = () => {
//   return (
//     <div>
//       <BannerContaine />

//       <section className="about-section py-5">
//         <div className="container">
//           <div className="row align-items-center">
//             {/* Left Side - Images */}
//             <div className="col-12 col-lg-6 mb-4 mb-lg-0 position-relative">
//               <div className="image-stack position-relative">
//                 {/* Decorative Vector */}
//                 <div
//                   className="position-absolute d-none d-sm-block" // hide on xs
//                   style={{
//                     left: "-60px",
//                     top: "50%",
//                     transform: "translateY(-50%)",
//                     zIndex: 0,
//                   }}
//                 >
//                   <Image
//                     src="/Assets/about-vector.png"
//                     alt="Decorative Vector"
//                     width={80}
//                     height={80}
//                   />
//                 </div>

//                 {/* Main Image */}
//                 <Image
//                   src="/Assets/hotel-list3.jpg"
//                   alt="Main"
//                   className="img-fluid rounded shadow-lg main-img w-100"
//                   width={500}
//                   height={350}
//                   style={{ objectFit: "cover" }}
//                 />

//                 {/* Overlay Image (optional, style to prevent overflow) */}
//                 <Image
//                   src="/Assets/hotel-list2.jpg"
//                   alt="Overlay"
//                   className="img-fluid rounded overlay-img w-100 mt-4"
//                   width={500}
//                   height={350}
//                   style={{ objectFit: "cover" }}
//                 />

//                 {/* Experience Box */}
//                 <div
//                   className="experience-box position-absolute text-center bg-white px-3 py-2 rounded shadow"
//                   style={{
//                     bottom: "10px",
//                     right: "10px",
//                     zIndex: 2,
//                     fontSize: "0.8rem",
//                   }}
//                 >
//                   <h5 className="experience-num mb-0 fw-bold">25</h5>
//                   <small>Years of Experience</small>
//                 </div>

//                 {/* Ribbon */}
//                 <div
//                   className="ribbon position-absolute"
//                   style={{ top: "45.2%", right: "43%", zIndex: 2 }}
//                 >
//                   25,000+ Customers Worldwide
//                 </div>
//               </div>
//             </div>

//             {/* Right Side - Text */}
//             <div className="col-lg-6 text-center text-lg-start position-relative">
//               {/* Text content */}
//               <p
//                 className="text-orange mb-1"
//                 style={{ fontFamily: "Yesteryear", fontSize: "25px" }}
//               >
//                 About Us
//               </p>

//               <h2 className="about-title fw-bold">
//                 About{" "}
//                 <span
//                   className="about-title-span text-orange"
//                   style={{ fontFamily: "Yesteryear" }}
//                 >
//                   MTrip
//                 </span>{" "}
//                 Hotels
//               </h2>

//               <p className="about-des text-muted mt-3">
//                 Since 2015, MTrip Hotels has been dedicated to providing
//                 exceptional hospitality, seamless travel experiences, and
//                 top-tier accommodations. Whether you're traveling for business
//                 or leisure, our handpicked hotels ensure a memorable stay. Our
//                 mission is to redefine travel by combining luxury,
//                 affordability, and excellent service.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <HotelSection />
//       <OfferSection />
//       <CabServicesSection />
//       <WhyChooseSection image="/Assets/HotelSolution.avif"/>
//       <TestimonialSection />
//       <StayBanner />
//       <Footer />
//     </div>
//   );
// };

// export default Home;

"use client";

import React, { useState } from "react";
import BannerContaine from "./Components/BannerContaine";
import StayBanner from "./Components/StayBanner";
import Footer from "./Components/Footer";
import Image from "next/image";
import "../app/Css/HotelSolution.css";
import BookingPopup from "./Components/BookingPopup";

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
  const [showBooking, setShowBooking] = useState(false);

  const handleShow = () => setShowBooking(true);
  const handleClose = () => setShowBooking(false);

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

      {/* ================= Dear Hotel Owner Section ================= */}
<section className="dear-owner-section py-5">
  <div className="container">
    <h3 className="Pms fw-bold mb-5 text-center text-orange">Property Management System</h3>
    <div className="row align-items-center">
      {/* Left Images */}
      <div className="col-lg-6 text-center mb-4 mb-lg-0">
        <img
          src="/Assets/DB.png"
          alt="Our Product Header"
          className="product-header-img img-fluid"
        />
      </div>

      {/* Right Text */}
      <div className="col-lg-6 text-center text-lg-start">
        <h2 className="dear-title mb-3">DEAR HOTEL OWNER</h2>
        <div className="feature-text mb-3">
          The hotel PMS system you’ve been looking for—cloud-backed,
          mobile-first, and built for owners who hate complexity. If you’re sick and
          tired of software that’s too expensive or needs a rocket scientist to run,
          keep reading. Because what you’re about to discover will save your time,
          money, and headaches—and keep every bit of your data securely backed up to
          the cloud. Now you can track operations from your phone, whether you’re in
          the office or on vacation.
        </div>
        <hr />
        <div className="feature-text mb-3">
          Our cloud-based hotel management system and property management
          software for hotels of all sizes—no rocket science required.
        </div>
        <button
          className="btn px-4 py-2 fw-semibold demo-btn" onClick={handleShow}
        >
          Request a Free Demo
        </button>
      </div>
    </div>
  </div>
</section>

{/* ================= Why Hoteliers Love Us Section ================= */}
<section className="why-hoteliers-section py-5 bg-light">
  <div className="container text-center">
    <h3 className="section-title mb-5">Why Hoteliers Love Us</h3>
    <div className="row g-4 justify-content-center">
      {[
        {
          img: "/Assets/DB1.png",
          title: "Desktop-Based + Mobile Access",
          desc: "Your hotel management is always at your fingertips.",
        },
        {
          img: "/Assets/DB2.png",
          title: "Pathik - Automation",
          desc: "No more wasting time on filing guest entry on PATHIK portal.",
        },
        {
          img: "/Assets/DB3.png",
          title: "Auto Document Scan",
          desc: "You no longer need to type name, address & other details for each guest.",
        },
        {
          img: "/Assets/DB4.png",
          title: "Cloud Data Backup",
          desc: "No more worrying about losing data. Your records are safe, secure, and always accessible.",
        },
      ].map((item, idx) => (
        <div className="col-12 col-sm-6 col-lg-3" key={idx}>
          <div className="feature-card1 h-100 text-center p-4 shadow-sm border-0">
            <div className="icon-blob mx-auto mb-3">
              <img src={item.img} alt={item.title} className="img-fluid" />
            </div>
            <h5 className="fw-bold mb-2">{item.title}</h5>
            <p className="text-muted small mb-0">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
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
          <BookingPopup show={showBooking} handleClose={handleClose} />
        </div>
      </section>
      <StayBanner />
      <Footer />
    </div>
  );
};

export default HotelSolution;

