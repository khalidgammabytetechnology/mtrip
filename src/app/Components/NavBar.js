"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import BookingPopup from "./BookingPopup";
import "../Css/NavBar.css";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => pathname === path;

  useEffect(() => {
    if (!menuOpen) return; // menu open tabhi close hoga jab open ho
    const handleScroll = () => {
      setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
      <div className="container d-flex justify-content-between align-items-center navbar-content">
        <Link
          className="navbar-brand fw-bold text-warning fs-4 d-flex align-items-center gap-2"
          href="/home"
        >
          <Image
            src="/Assets/logo.png"
            alt="MTrip Logo"
            width={80}
            height={40}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`menu-items collapse navbar-collapse justify-content-center py-4 ${
            menuOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3 text-center">
            {/* <li className="nav-item">
              <Link
                href="/home"
                className={`nav-link ${isActive("/home") ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
              Home
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                href="/our-hotels"
                className={`nav-link ${isActive("/our-hotels") ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                Our Hotels
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/tours-travels"
                className={`nav-link ${isActive("/tours-travels") ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                Tours & Travels
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/taxi-services"
                className={`nav-link ${isActive("/taxi-services") ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                Taxi Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/"
                className={`nav-link ${isActive("/") ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                Hotel Solution
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/about-us"
                className={`nav-link ${isActive("/about-us") ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/contact-us"
                className={`nav-link ${isActive("/contact-us") ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {pathname !== "/contact-us" && (
            <div className="d-flex justify-content-center align-items-center gap-3 mt-2 mt-lg-0">
              <button
                className="bookNow-btn rounded-pill px-3 py-1"
                onClick={handleShow}
              >
                Book Now <span className="ms-1">➤</span>
              </button>
              <BookingPopup show={showModal} handleClose={handleClose} bookingItem={"Mtrip"} />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
