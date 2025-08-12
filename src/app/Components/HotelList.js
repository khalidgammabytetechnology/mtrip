"use client";

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaStar,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Button, Card } from "react-bootstrap";
import "../Css/OurHotel.css";
import StayBanner from "./StayBanner";
import ImagePopup from './ImagePopup';
import Footer from "./Footer";
import BookingPopup from "./BookingPopup";

const hotels = [
  {
    name: "Hotel Maple Tree Prahaladnagar",
    location:
      "2nd Floor, Puspak Complex, Opp. Prahalad Nagar Garden, Near KFC Restaurant, Ahmedabad - 380015",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.331652063752!2d72.50051349678955!3d23.011591900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b94fde97571%3A0xfc06cf3047550b45!2sPushpak%20Complex!5e0!3m2!1sen!2sin!4v1752501979436!5m2!1sen!2sin",
    email: "hotelmapletree24@gmail.com",
    phone1: "+91 7490013769",
    phone2: "07943989245",
    images: [
      "/Assets/02.jpg",
      "/Assets/HotelMapleTree1.jpg",
      "/Assets/03.jpg",
      "/Assets/04.jpg",
      "/Assets/05.jpg",
      "/Assets/06.jpg",
      "/Assets/07.jpg",
      "/Assets/08.jpg",
    ],
    rating: 5,
    intervalDuration: 3000,

  },
  {
    name: "Hotel Maple Inn Ashram road",
    location:
      "1st Floor, Devnandan Mall, Opp. Sanyas Ashram, Ashram Road, Ahmedabad - 380006",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9914722297476!2d72.56799602650693!3d23.02408532917263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e845658fe79d5%3A0x7e1c0cd6b357ad4c!2sReliable%20First!5e0!3m2!1sen!2sin!4v1752502097203!5m2!1sen!2sin",
    email: "hotelmapleinn11@gmail.com",
    phone1: "+91 95759 57592",
    phone2: "07926585545",
    images: [
      "/Assets/HotelAshram1.jpg",
      "/Assets/HotelAshram2.jpg",
      "/Assets/HotelAshram3.jpg",
      "/Assets/HotelAshram4.jpg",
      "/Assets/HotelAshram5.jpg",
      "/Assets/HotelAshram6.jpg",
      "/Assets/HotelAshram7.jpg",
      "/Assets/HotelAshram8.jpg",
      "/Assets/HotelAshram9.jpg",
    ],
    rating: 5,
    intervalDuration: 2000,

  },
  {
    name: "Hotel Mukund Inn S.G HIGHWAY",
    location:
      "S.G. Highway, Near Honest Restaurant, Opp. Parshwanath Business Park, Ahmedabad - 380015",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29378.674972057757!2d72.46489847431643!3d23.011492000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b285a24aa79%3A0xe5a4c401e7aaf96a!2sHonest%20Restaurant!5e0!3m2!1sen!2sin!4v1752502229499!5m2!1sen!2sin",
    email: "hotelmukundinn@gmail.com",
    phone1: "+91 74900 23769",
    phone2: "07940049521",
    images: [
      "/Assets/21.jpg",
      "/Assets/17.jpg",
      "/Assets/19.jpg",
      "/Assets/18.jpg",
      "/Assets/20.jpg",
      "/Assets/09.jpg",
      "/Assets/11.jpg",
      "/Assets/12.jpg",
      "/Assets/13.jpg",
      "/Assets/HotelMLeaf7.jpg",
      "/Assets/HotelMLeaf9.jpg",
    ],
    rating: 5,
    intervalDuration: 3000,
  },
  {
    name: "Hotel Maple Leaf BOPAL",
    location: "TRP Mall, Centre Court, Bopal, Ahmedabad",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7960396409203!2d72.46794447650713!3d23.031259879167674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b9cc462b20d%3A0x8665f62dc2582893!2sTRP%20Mall!5e0!3m2!1sen!2sin!4v1752502297810!5m2!1sen!2sin",
    email: "hotelmapleleaf25@gmail.com",
    phone1: "+91 98983 53769",
    images: [
      "/Assets/HotelMLeaf1.jpg",
      "/Assets/HotelMLeaf2.jpg",
      "/Assets/HotelMLeaf3.jpg",
      "/Assets/HotelMLeaf4.jpg",
      "/Assets/HotelMLeaf5.jpg",
      "/Assets/HotelMLeaf6.jpg",
      "/Assets/HotelMLeaf8.jpg",
      "/Assets/HotelMLeaf10.jpg",
      "/Assets/HotelMLeaf11.jpg",
      "/Assets/HotelMLeaf12.jpg",
    ],
    rating: 5,
    intervalDuration: 2000,
  },
  {
    name: "Hotel Maple",
    location: "Bopal, Ahmedabad",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7939413042036!2d72.4706376!3d23.031336900000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b800e4ba6c5%3A0x63cc31126fed77d4!2sHotel%20Maple!5e0!3m2!1sen!2sin!4v1754981966965!5m2!1sen!2sin",
    email: "hotelmaple2022@gmail.com",
    phone1: "+91 74878 94242",
    images: [
      "/Assets/HotelMapleBopal1.jpg",
      "/Assets/HotelMapleBopal2.jpg",
      "/Assets/HotelMapleBopal3.jpg",
      "/Assets/HotelMapleBopal4.jpg",
      "/Assets/HotelMapleBopal5.jpg",
      "/Assets/HotelMapleBopal6.jpg",
      "/Assets/HotelMapleBopal7.jpg",

    ],
    rating: 5,
    intervalDuration: 3000,
  },
  {
    name: "MTRIP Hotel Ellis Bridge",
    location: "Ellis Bridge, Ahmedabad - 380006",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7343.958247588185!2d72.56092769733435!3d23.024538716689484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f7868fbdfb%3A0x8140bcb2e0cd79ef!2sEllisbridge%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1752502368033!5m2!1sen!2sin",
    email: "mtriphotels95@gmail.com",
    phone1: "+91 98982 53769",
    images: [
      "/Assets/MtripHotel.jpg",
      "/Assets/MtripHotel1.jpg",
      "/Assets/MtripHotel9.jpg",
      "/Assets/MtripHotel2.jpg",
      "/Assets/MtripHotel3.jpg",
      "/Assets/MtripHotel4.jpg",
      "/Assets/MtripHotel5.jpg",
      "/Assets/MtripHotel6.jpg",
      "/Assets/MtripHotel7.jpg",
      "/Assets/MtripHotel8.jpg",
      "/Assets/MtripHotel10.jpg",

    ],
    rating: 5,
    intervalDuration: 2000,
  },
  {
    name: "Hotel Bilva Tree SCIENCITY",
    location:
      "Anushri Accolade, Opp. Science City, Science City Road, Ahmedabad",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.470987130591!2d72.49698598922058!3d23.079848425331427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9cc0db25e9ef%3A0x724c586075fa03c6!2sAnushri%20Accolade%2C%20Science%20City%20Rd%2C%20opp.%20Shell%20Petrol%20Pump%2C%20Sola%2C%20Ahmedabad%2C%20Gujarat%20380060!5e0!3m2!1sen!2sin!4v1752502398514!5m2!1sen!2sin",
    email: "hotelbilvatree@gmail.com",
    phone1: "+91 98989 52148",
    images: [
      "/Assets/HotelBilva1.jpg",
      "/Assets/HotelBilva2.jpg",
      "/Assets/HotelBilva3.jpg",
      "/Assets/HotelBilva4.jpg",
      "/Assets/HotelBilva5.jpg",
      "/Assets/HotelBilva6.jpg",
      "/Assets/HotelBilva7.jpg",
      "/Assets/HotelBilva8.jpg",
      "/Assets/HotelBilva9.jpg",
      
    ],
    rating: 5,
    intervalDuration: 3000,
  },
];

const HotelCard = ({ hotel }) => {

  const [showBooking, setShowBooking] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [popupImageIndex, setPopupImageIndex] = useState(0);

  const handleShow = () => setShowBooking(true);
  const handleClose = () => setShowBooking(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = hotel.images;

  useEffect(() => {
    const intervalTime = hotel.intervalDuration || 3000;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [hotel.name]);

  const handleImageClick = (index) => {
    setPopupImageIndex(index);
    setIsImagePopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsImagePopupOpen(false);
  };

  return (
    <Card className="hotel-card mb-4 p-3 shadow-sm border-0 rounded-4">
      <div className="row g-0 align-items-center">
        <div className="col-12 col-md-4 position-relative mb-3 mb-md-0">
          <div style={{ width: "100%", height: "250px", overflow: "hidden" }}>
            <div
              className="image-scroll-container"
              style={{
                width: "100%",
                height: "250px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div
                className="image-strip"
                style={{
                  display: "flex",
                  width: `${images.length * 100}%`,
                  transition: "transform 0.8s ease-in-out",
                  transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
                }}
              >
                {images.map((imgSrc, i) => (
                  <img
                    key={i}
                    src={imgSrc}
                    alt={`${hotel.name} ${i + 1}`}
                    style={{
                      width: `${100 / images.length}%`,
                      height: "250px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                    onClick={() => handleImageClick(i)}
                    quality={50}
                    className="rounded-3"
                    loading="lazy"
                  />
                ))}
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  color: "#fff",
                  padding: "4px 10px",
                  fontSize: "12px",
                  borderRadius: "20px",
                }}
              >
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        </div>

        <div className="card-right col-12 col-md-8">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-2">
            <div>
              <h5 className="fw-bold mb-1">{hotel.name}</h5>
              <div className="d-flex align-items-center text-warning mb-1 gap-1">
                {[...Array(hotel.rating)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>
            </div>
          </div>

          <div className="card-location-section bg-light rounded p-2 mb-2 d-flex flex-column flex-md-row gap-2">
            <div className="info-box flex-grow-1 d-flex align-items-center gap-2 p-1 rounded">
              <FaMapMarkerAlt className="card-icons" size={16} />
              <span className="small text-muted" style={{ width: "300px" }}>{hotel.location}</span>
            </div>
            <div className="info-box flex-grow-1 d-flex align-items-center gap-2 p-1 rounded">
              <FaPhoneAlt className="card-icons" size={16} />
              <div className="small text-muted">{hotel.phone1}<br />{hotel.phone2}</div>
            </div>
            <div className="info-box flex-grow-1 d-flex align-items-center gap-2 p-1 rounded">
              <MdOutlineEmail className="card-icons" size={18} />
              <span className="small text-muted">{hotel.email}</span>
            </div>
          </div>
          <hr />

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end gap-2">
            <p className="hotel-from-txt mb-1"></p>
            <div className="d-flex gap-2">
              <Button variant="warning" className="px-3 rounded-pill text-white"
                onClick={handleShow}
              >Book Now</Button>
              <Button variant="outline-secondary" className="px-3 rounded-pill"
                onClick={() => window.open(hotel.mapLink, "_blank")}
              >View Direction</Button>
            </div>
          </div>
        </div>
        <BookingPopup show={showBooking} handleClose={handleClose} bookingItem={hotel.name}/>

        <ImagePopup
          show={isImagePopupOpen}
          images={images}
          currentIndex={popupImageIndex}
          handleClose={handleClosePopup}
          setCurrentIndex={setPopupImageIndex}
        />
      </div>
    </Card>
  );
};

const HotelList = () => {
  return (
    <div>
      <div className="container py-3">
        {hotels.map((hotel, idx) => (
          <HotelCard key={idx} hotel={hotel} />
        ))}
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

export default HotelList;
