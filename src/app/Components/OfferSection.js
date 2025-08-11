"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const destinations = [
  {
    image: "/Assets/feature1.png",
    description: "Heaven on earth with serene landscapes and shikara rides",
    name: "Jammu - Kashmir",
    place: "Jammu - Kashmir",
    info: "Best Time: Mar-Jun • Famous: Shikara Ride, Kahwa Tea",
  },
  {
    image: "/Assets/feature2.png",
    description: "Royal palaces, deserts, and heritage cities",
    name: "Rajasthan",
    place: "Rajasthan",
    info: "Best Time: Oct-Feb • Famous: Dal-Baati, Fort Tours",
  },
  {
    image: "/Assets/feature3.png",
    description: "Backwaters, greenery, Ayurveda, and culture",
    name: "Kerala",
    place: "Kerala",
    info: "Best Time: Sep-Mar • Famous: Houseboats, Ayurveda",
  },
  {
    image: "/Assets/feature4.png",
    description: "Snowy hills, adventure sports, and peaceful valleys",
    name: "Himachal Pradesh",
    place: "Himachal Pradesh",
    info: "Best Time: Apr-Jun • Famous: Trekking, Temples",
  },
  {
    image: "/Assets/feature5.png",
    description: "The Taj Mahal, Red Fort, India Gate",
    name: "Agra & Delhi",
    place: "Agra & Delhi",
    info: "Best Time: Oct-Mar • Famous: Monuments, Street Food",
  },
  {
    image: "/Assets/feature4.png",
    description: "Beaches, parties, forts, and fun",
    name: "Goa",
    place: "Goa",
    info: "Best Time: Apr-Jun • Famous: Trekking, Temples",
  },
  {
    image: "/Assets/feature5.png",
    description: "High-altitude deserts, monasteries, and scenic drives",
    name: "Leh - Ladakh",
    place: "Leh - Ladakh",
    info: "Best Time: Oct-Mar • Famous: Monuments, Street Food",
  },
  {
    image: "/Assets/feature4.png",
    description: "Wildlife, tea estates, tribal culture, and natural beauty",
    name: "Assam & Northeast",
    place: "Assam & Northeast",
    info: "Best Time: Apr-Jun • Famous: Trekking, Temples",
  },
  {
    image: "/Assets/feature5.png",
    description: "Waterfalls, living root bridges, caves, and misty hills",
    name: "Shillong & Meghalaya",
    place: "Shillong & Meghalaya",
    info: "Best Time: Oct-Mar • Famous: Monuments, Street Food",
  },
  {
    image: "/Assets/feature4.png",
    description: "Cultural charm with Himalayan views and spiritual experiences",
    name: "Nepal",
    place: "Nepal",
    info: "Best Time: Apr-Jun • Famous: Trekking, Temples",
  },
];

const chunkArray = (arr, size) => {
  return arr.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size));
    return acc;
  }, []);
};

const OfferSection = () => {
  const [groupedDestinations, setGroupedDestinations] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const updateGrouping = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      setGroupedDestinations(chunkArray(destinations, 1));
    } else {
      setGroupedDestinations(chunkArray(destinations, 5));
    }
  };

  useEffect(() => {
    updateGrouping();
    window.addEventListener("resize", updateGrouping);
    return () => window.removeEventListener("resize", updateGrouping);
  }, []);

  const goToNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % groupedDestinations.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setActiveIndex((prev) =>
      prev === 0 ? groupedDestinations.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 10000);
    return () => clearInterval(interval);
  }, [groupedDestinations]);

  return (
    <div className="container py-5 text-center">
      <p className="text-warning fw-semibold mb-1">Explore India</p>
      <h2 className="fw-bold mb-4">
        Explore India With <span className="text-warning">MTrip</span> Hotels & Tours
      </h2>

      <div id="destinationsCarousel" className="position-relative">
        <div
          className="carousel-inner position-relative overflow-hidden"
          style={{ minHeight: "250px" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="position-absolute w-100"
            >
              <div className="row justify-content-center">
                {groupedDestinations[activeIndex]?.map((dest, idx) => (
                  <div className="col-12 col-md-4 col-lg-2 mb-4" key={idx}>
                    <div
                      className="destination-card px-2 position-relative"
                      style={{ cursor: "pointer" }}
                    >
                      {/* Hover Popup */}
                      <div
                        className="position-absolute top-0 start-50 translate-middle-x bg-white shadow rounded p-2 text-sm text-dark"
                        style={{
                          minWidth: "180px",
                          zIndex: 10,
                          opacity: 0,
                          transform: "translate(-50%, -120%)",
                          transition: "opacity 0.3s ease",
                          pointerEvents: "none",
                        }}
                      >
                        <strong>{dest.name}</strong>
                        <br />
                        <small>{dest.info}</small>
                      </div>

                      <div style={{ position: "relative", display: "inline-block", textAlign: "center" }}>
                        <Image
                          src={dest.image}
                          alt={dest.description}
                          className="destination-image mb-3"
                          style={{
                            width: "130px",
                            maxWidth: "200px",
                            height: "auto",
                            margin: "0 auto",
                            display: "block",
                            borderRadius: "50%",
                          }}
                          width={200}
                          height={200}
                        />

                        {/* Overlay Wrapper */}
                        <div
                          style={{
                            position: "absolute",
                            bottom: "0",
                            top: "50%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            textAlign: "center",
                          }}
                        >
                          <Image
                            src="/Assets/orange-paint.png"
                            alt="overlay"
                            width={190}
                            height={150}
                            style={{
                              display: "block",
                              margin: "0 auto",
                              marginTop: "-35px",

                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              color: "#fff",
                              fontWeight: "bold",
                              fontSize: "14px",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {dest.place}
                          </div>
                        </div>
                      </div>


                      <p className="text-muted small">{dest.description}</p>
                    </div>

                    <style jsx>{`
                      .destination-card:hover > div {
                        opacity: 1 !important;
                        pointer-events: auto;
                      }
                    `}</style>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          onClick={goToPrev}
          style={{
            position: "absolute",
            top: "45%",
            left: "10px",
            transform: "translateY(-50%)",
            zIndex: 1,
            background: "#ffa500",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            color: "#fff",
          }}
        >
          <FaChevronLeft />
        </button>

        <button
          className="carousel-control-next"
          type="button"
          onClick={goToNext}
          style={{
            position: "absolute",
            top: "45%",
            right: "10px",
            transform: "translateY(-50%)",
            zIndex: 1,
            background: "#ffa500",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            color: "#fff",
          }}
        >
          <FaChevronRight />
        </button>
      </div>

      <Link href="/tours-travels" passHref>
        <button className="btn-view-all text-white mt-4 px-5 py-2 rounded-pill">
          View More
        </button>
      </Link>
    </div>
  );
};

export default OfferSection;
