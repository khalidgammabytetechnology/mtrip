"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";
import BookingPopup from "./BookingPopup";
import "../Css/HeroSection.css";



const hotels = [
  {
    id: 1,
    label: "Featured",
    tag: "Bestseller",
    image: "/Assets/HotelMapleTree.jpg",
    location: "Prahalad Nagar, Ahmedabad",
    name: "Hotel Maple Tree",
  },
  {
    id: 2,
    label: "Featured",
    tag: "Trending",
    image: "/Assets/HotelMapleInn.jpg",
    location: "Sanyas Ashram, Ahmedabad",
    name: "Hotel Maple Inn",  
  },
  {
    id: 3,
    label: "Featured",
    tag: "Hot sell",
    image: "/Assets/HotelMukund.jpg",
    location: "S.G. Highway, Ahmedabad",
    name: "Hotel Mukund Inn",
  },
  {
    id: 4,
    label: "Featured",
    tag: "Bestseller",
    image: "/Assets/HotelMapleLeaf.jpg",
    location: "TRP Mall, Ahmedabad",
    name: "Hotel Maple Leaf",
  },
];

const HotelSection = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState("");

  const handleShow = (carType) => {
  setSelectedHotel(carType);
  setShowBooking(true);
};
  const handleClose = () => setShowBooking(false);

  return (
    <div className="position-relative py-3">
      <div className="hotel-bg-overlay position-absolute top-50 start-0 w-100 h-50 z-n1"></div>
      <div className="container py-5 text-center">
        <p className="hotel-title mb-1" style={{ fontFamily: "Yesteryear" }}>
          Our Hotels
        </p>
        <h2 className="hotel-subTitle mb-4">
          Meant for{" "}
          <span className="hotel-spanTitle" style={{ fontFamily: "Yesteryear" }}>
            Comfort
          </span>{" "}
          Meets{" "}
          <span className="hotel-spanTitle" style={{ fontFamily: "Yesteryear" }}>
            Convenience
          </span>
        </h2>

        <div className="row g-4">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="col-lg-3 col-md-6">
              <div className="card short-card border-0 shadow rounded-4 overflow-hidden position-relative">
                <div className="position-relative">
                  <Image
                    src={hotel.image}
                    className="card-img-top rounded-top-4"
                    alt={hotel.name}
                    width={500}
                    height={200}
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div className="card-body text-start px-4 py-3">
                  <p className="text-muted small mb-1 d-flex align-items-center">
                    <FaMapMarkerAlt className="hotel-location me-1" />
                    {hotel.location}
                  </p>
                  <h5 className="fw-bold mt-4">{hotel.name}</h5>

                  <hr className="my-1 mt-3" />

                  <div className="d-flex justify-content-center mt-4">
                    <button
                      className="btn-book text-white btn-sm px-2 rounded-pill"
                      onClick={() => handleShow(hotel.name)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link href="/our-hotels" passHref>
          <button className="btn-view-all text-white mt-4 px-5 py-2 rounded-pill">
            View All Hotels
          </button>
        </Link>
      </div>

      <BookingPopup show={showBooking} handleClose={handleClose} bookingItem={selectedHotel}/>
    </div>
  );
};

export default HotelSection;
