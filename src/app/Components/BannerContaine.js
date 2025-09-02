"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import "../Css/BannerContaine.css";

const bannerSlides = [
  // Home page slides (5)
  {
    path: "/home",
    image: "/Assets/01.jpg",
    maintitle: "Explore the World",
    title: "Welcome To MTrip Hotels",
    subtitle: "Your Trusted Travel Partner Since 2015",
    text: "Exceptional Hospitality, Seamless Travel, & Premium Stays",
  },
  {
    path: "/home",
    image: "/Assets/HotelMapleInn.jpg",
    maintitle: "Explore the World",
    title: "Welcome To MTrip Hotels",
    subtitle: "Your Trusted Travel Partner Since 2015",
    text: "Exceptional Hospitality, Seamless Travel, & Premium Stays",
  },
  {
    path: "/home",
    image: "/Assets/HotelMLeaf3.jpg",
    maintitle: "Explore the World",
    title: "Welcome To MTrip Hotels",
    subtitle: "Your Trusted Travel Partner Since 2015",
    text: "Exceptional Hospitality, Seamless Travel, & Premium Stays",
  },
  {
    path: "/home",
    image: "/Assets/Hotelbg.jpg",
    maintitle: "Explore the World",
    title: "Welcome To MTrip Hotels",
    subtitle: "Your Trusted Travel Partner Since 2015",
    text: "Exceptional Hospitality, Seamless Travel, & Premium Stays",
  },
  {
    path: "/home",
    image: "/Assets/HotelMLeaf8.jpg",
    maintitle: "Explore the World",
    title: "Welcome To MTrip Hotels",
    subtitle: "Your Trusted Travel Partner Since 2015",
    text: "Exceptional Hospitality, Seamless Travel, & Premium Stays",
  },

  // Other pages
  {
    path: "/our-hotels",
    image: "/Assets/HotelMLeaf8.jpg",
    maintitle: "MTrips Hotels",
    title: "Comfort & Convenience at MTrip Hotels",
    subtitle: "Prime locations, exceptional service, and luxury stays.",
  },
  {
    path: "/tours-travels",
    image: "/Assets/tourTravel.jpeg",
    title: "Explore Incredible India with MTrip Like Never Before!",
    subtitle: "Domestic Tours with Aryavrat Tourism.",
  },
  {
    path: "/taxi-services",
    image: "/Assets/services-bg.jpg",
    title: "Ride With Comfort",
    subtitle: "Reliable Taxi Services",
    text: "Get to your destination safely and on time",
  },
  {
    path: "/",
    image: "/Assets/solutionbg.jpg",
    title: "Welcome to MTRIP Hotel Solution",
    subtitle: "Your Trusted Partner in Premium Hotel Linen & Guest Room Amenities",
  },
  {
    path: "/about-us",
    image: "/Assets/About-Us.png",
    title: "About MTrip",
    subtitle: "Who We Are",
    text: "Discover our journey and values",
  },
  {
    path: "/contact-us",
    image: "/Assets/background.jpg",
    title: "Contact Us",
    subtitle: "We're Here to Help",
    text: "Reach out for support and inquiries",
  },
];

const BannerContaine = () => {
  const pathname = usePathname();

  // Get slides for current page
  const pageSlides = bannerSlides.filter((slide) => slide.path === pathname);

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = pageSlides[currentIndex] || pageSlides[0];

  useEffect(() => {
    if (pathname === "/home") {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % pageSlides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [pathname, pageSlides.length]);

  return (
    <div className="banner-container position-relative">
      <Image
        src={currentSlide.image}
        alt="Background"
        className="back-img position-absolute top-0 start-0 bottom-0 hero-bg"
        fill
        style={{
          objectFit: "cover",
          zIndex: -2,
          borderRadius: "30px",
          width: "100%",
        }}
      />

      <div className="position-absolute top-0 start-0 hero-overlay"></div>

      <div className="container position-relative text-white hero-content z-1 text-center">
        {currentSlide.maintitle && (
          <p className="expore-text mb-2">{currentSlide.maintitle}</p>
        )}

        <h1 className="d-flex justify-content-center align-items-center gap-2 flex-wrap">

          {currentSlide.title?.split("MTrip")[0]}
          <span className="brand-text" style={{ fontFamily: "Yesteryear" }}>
            MTrip
          </span>
          {currentSlide.title?.split("MTrip")[1]}
        </h1>

        <h4 className="fw-semibold mb-3">{currentSlide.subtitle}</h4>

        {currentSlide.text && <p className="mb-4">{currentSlide.text}</p>}
        {pathname !== "/" && (
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link href="/our-hotels" passHref>
              <button className="bookStay-btn px-4 py-2 text-white fw-semibold">
                Book Your Stay
              </button>
            </Link>

            <Link href="/tours-travels" passHref>
              <button className="expore-btn btn-outline-light px-4 py-2 fw-semibold">
                Explore Our Tours
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BannerContaine;

