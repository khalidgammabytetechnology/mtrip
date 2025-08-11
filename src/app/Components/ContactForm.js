"use client";

import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FaUser, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import "../Css/Contact.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [alertMsg, setAlertMsg] = useState("");
  const [alertType, setAlertType] = useState(""); // "success" | "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingData = { name, phone, email, message };

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
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      } else {
        setAlertMsg("Failed to send inquiry.");
        setAlertType("error");
      }
    } catch (err) {
      setAlertMsg("Error sending email.");
      setAlertType("error");
    }

    setTimeout(() => {
      setAlertMsg("");
      setAlertType("");
    }, 3000);
  };

  return (
    <>
      <div className="form-container animate__animated animate__fadeInUp mb-5 mx-auto">
        <div className="text-center mb-4">
          <h3 className="mb-2">
            Get In{" "}
            <span className="text-orange" style={{ fontFamily: "Yesteryear" }}>
              Touch
            </span>
          </h3>
        </div>
        <h6 className="fw-bold border-start border-3 border-orange ps-2 mb-4">
          Fill Up The Form
        </h6>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4 position-relative">
            <Form.Control
              type="text"
              placeholder="Your Name*"
              className="custom-input ps-5"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span className="form-icon-inside">
              <FaUser />
            </span>
          </Form.Group>

          <Form.Group className="mb-4 position-relative">
            <Form.Control
              type="text"
              placeholder="Phone Number*"
              className="custom-input ps-5"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <span className="form-icon-inside">
              <FaPhoneAlt />
            </span>
          </Form.Group>

          <Form.Group className="mb-4 position-relative">
            <Form.Control
              type="email"
              placeholder="Email Address*"
              className="custom-input ps-5"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="form-icon-inside">
              <FaEnvelope />
            </span>
          </Form.Group>

          <Form.Group className="mb-4 position-relative">
            <Form.Control
              as="textarea"
              rows={1}
              placeholder="Enter Your Message here"
              className="custom-input ps-5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <span className="form-icon-inside">
              <FaPaperPlane />
            </span>
          </Form.Group>

          <Button
            type="submit"
            className="send-btn d-flex align-items-center gap-2 px-4 py-2 mx-auto"
          >
            <FaPaperPlane /> Send Inquiry
          </Button>
        </Form>
      </div>

      {alertMsg && (
        <div className={`custom-alert-box ${alertType}`}>
          <strong>{alertType === "success" ? "Success!" : "Error!"}</strong>{" "}
          {alertMsg}
        </div>
      )}
    </>
  );
};

export default ContactForm;