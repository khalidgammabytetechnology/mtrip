'use client';

import React from "react";
import {
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "../Css/TopBar.css";

const TopBar = () => {
  return (
    <div className="top-main text-white py-1 small d-none d-lg-block">
      <div className="container-fluid px-3">
        <div className="row align-items-center text-center text-md-start">
          {/* Left Side */}
          <div className="col-12 col-md-6 d-flex flex-column flex-md-row flex-wrap align-items-center justify-content-center justify-content-md-start gap-1 gap-md-3 mb-2 mb-md-0">
            <span className="top-header-text d-flex align-items-center gap-1">
              <FaEnvelope />
              <span className="text-truncate">mtriphotels@gmail.com</span>
            </span>
          </div>

          {/* Right Side */}
          <div className="col-12 col-md-6 d-flex flex-column flex-md-row flex-wrap align-items-center justify-content-center justify-content-md-end gap-1 gap-md-3">
            <span className="top-header-text d-flex align-items-center gap-1">
              <FaPhone />
              <span className="text-truncate">+91 8949412005, +91 9662263769</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
