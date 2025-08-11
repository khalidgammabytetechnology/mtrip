"use client";

import React, { useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMapMarkerAlt, FaCarSide, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import BookingPopup from "./BookingPopup";

const cars = [
  {
    id: 1,
    image: "/Assets/carserv1.webp",
    type: "Hatchback",
    cars: "Swift, Tiago, Wagon R",
    availability: "Available Now",
  },
  {
    id: 2,
    image: "/Assets/carserv3.jpg",
    type: "Sedans",
    cars: "Audi A4, Honda City, Maruti Dzire ",
    availability: "Available Now",
  },
  {
    id: 3,
    image: "/Assets/carserv4.webp",
    type: "Luxury SUVs",
    cars: "Mercedes-Benz GLS, BMW X7",
    availability: "Limited Availability",
  },
  {
    id: 4,
    image: "/Assets/carserv2.webp",
    type: "Tempo Traveler & Urbania",
    cars: "Force Motors & Tata Winger",
    availability: "Pre-booking Required",
  },
];

const CabServicesSection = () => {

  const [showBooking, setShowBooking] = useState(false);
  const [selectedCar, setSelectedCar] = useState("");

  const handleShow = (carType) => {
  setSelectedCar(carType);
  setShowBooking(true);
};
  const handleClose = () => setShowBooking(false);

  return (
    <div className="cab-service">
      <div className="container py-5">
        <div className="row justify-content-between align-items-center mb-4">
          <div className="col-md-6">
            <p className="cab-title mb-1" style={{ fontFamily: "Yesteryear", fontSize: "25px" }}>Cab Services</p>
            <h2 className="cab-subTitle fw-bold mb-3">
              Premium <span className="text-orange" style={{ fontFamily: "Yesteryear" }}>Cab</span> Services
            </h2>
          </div>
          <div className="col-md-6 text-md-end text-start">
            <p className="text-muted mb-0">
              At MTrip Hotels & Tours, we offer reliable and comfortable cab
              services for corporate travelers, business executives, and
              tourists across India. Choose from Sedans, SUVs, Tempo Travelers,
              and more!
            </p>
          </div>
        </div>

        <div className="row g-4">
          {cars.map((car) => (
            <div key={car.id} className="col-lg-3 col-md-6 col-sm-12">
              <div className="card border-0 shadow-sm h-100">
                <Image
                  src={car.image}
                  alt={car.type}
                  className="card-img-top"
                  style={{ objectFit: "cover", height: "200px" }}
                  width={500}
                  height={200}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between mt-4">
                    <h6 className="car-location d-flex align-items-center">
                      <FaCarSide className="me-2 text-orange" />
                      {car.type}
                    </h6>
                  </div>
                  <h6 className="city  text-muted small mt-3">{car.cars}</h6>

                  <h6 className="text-orange small mt-2">
                    <FaCheckCircle className="me-1 text-orange" /> {car.availability}
                  </h6>
                  <hr />
                  <div className="d-flex flex-row justify-content-center align-items-center mb-2 text-muted small">

                    <button className="car-btnBook btn-sm w-50"
                      onClick={() => handleShow(car.type)}>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-4">
          <Link href="/taxi-services" passHref>
            <button className="btn-view-all text-white px-5 py-2 rounded-pill">
              View More
            </button>
          </Link>
        </div>
      </div>

      <BookingPopup show={showBooking} handleClose={handleClose}  bookingItem={selectedCar}/>
    </div>
  );
};

export default CabServicesSection;
