import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import "../Css/BookingPopup.css";

const BookingPopup = ({ show, handleClose, bookingItem }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [alertMsg, setAlertMsg] = useState("");
  const [alertType, setAlertType] = useState(""); // "success" | "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingData = { name, phone, email, message, bookingItem: bookingItem || "N/A" };

    try {
      const res = await fetch("/api/send-booking-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      const result = await res.json();
      if (result.success) {
        setAlertMsg("Inquiry sent successfully!");
        setAlertType("success");
        setTimeout(() => setAlertMsg(""), 3000);
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        handleClose();
      } else {
        setAlertMsg("Failed to send inquiry.");
        setAlertType("error");
        setTimeout(() => setAlertMsg(""), 3000);
      }
    } catch (err) {
      setAlertMsg("Error sending email.");
      setAlertType("error");
      setTimeout(() => setAlertMsg(""), 3000);
      handleClose();
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="booking-popup-modal"
      >
        <Modal.Body className="p-4 position-relative">
          <button className="close-btn" onClick={handleClose}>×</button>
          <h4 className="get-in-touch-title mb-4">
            Get In <span className="text-orange">Touch</span>
          </h4>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 position-relative">
              <Form.Control
                type="text"
                placeholder="Your Name*"
                className="custom-input ps-5"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <span className="form-icon-inside"><FaUser /></span>
            </Form.Group>

            <Form.Group className="mb-3 position-relative">
              <Form.Control
                type="text"
                placeholder="Phone Number*"
                className="custom-input ps-5"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <span className="form-icon-inside"><FaPhoneAlt /></span>
            </Form.Group>

            <Form.Group className="mb-3 position-relative">
              <Form.Control
                type="email"
                placeholder="Email Address*"
                className="custom-input ps-5"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span className="form-icon-inside"><FaEnvelope /></span>
            </Form.Group>

            <Form.Group className="mb-4 position-relative">
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Enter Your Message here"
                className="custom-input ps-5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <span className="form-icon-inside"><FaPaperPlane /></span>
            </Form.Group>

            <Button type="submit" className="send-btn d-flex align-items-center gap-2 w-100 justify-content-center">
              <FaPaperPlane /> Send Inquiry
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {alertMsg && (
        <div className={`custom-alert-box ${alertType}`}>
          <strong>{alertType === "success" ? "Success!" : "Error!"}</strong>
          {alertMsg}
        </div>
      )}
    </>
  );
};

export default BookingPopup;