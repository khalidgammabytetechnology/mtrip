import React from "react";
import { Modal } from "react-bootstrap";
import "../Css/OurHotel.css";

const ImagePopup = ({ show, images, currentIndex, handleClose, setCurrentIndex }) => {
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg" className="image-popup-modal">
      <Modal.Body className="popup-body">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="popup-image"
        />

        <button className="popup-nav prev-btn" onClick={handlePrev}>
          «
        </button>

        <button className="popup-nav next-btn" onClick={handleNext}>
          »
        </button>

        <button className="popup-close" onClick={handleClose}>
          ✕
        </button>
      </Modal.Body>
    </Modal>
  );
};

export default ImagePopup;
