import React, { useState } from "react";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import "../Css/Contact.css";

const faqData = [
  {
    question: "How Can I Book A Hotel With MTrip Hotels?",
    answer: "You can book a hotel through our website, app, or by contacting our team directly.",
  },
  {
    question: "Do You Offer Customized Tour Packages?",
    answer: "Yes! We specialize in tailor-made tours across India. Share your travel preferences, and our team will create an itinerary just for you.",
  },
  {
    question: "What Types Of Taxi Services Are Available?",
    answer: "We offer airport transfers, outstation cabs, city rides, and full-day rental options.",
  },
  {
    question: "Can I Make Last-Minute Bookings?",
    answer: "Absolutely! We accommodate last-minute bookings based on availability.",
  },
  {
    question: "Are Your Services Available 24/7?",
    answer: "Yes, our customer support and essential services are available 24/7.",
  },
  {
    question: "Do You Offer Airport Pickup And Drop Services?",
    answer: "Yes, we provide reliable airport pickup and drop facilities across major cities.",
  },
  {
    question: "Is It Safe To Travel With MTrip Hotels & Tours?",
    answer: "Safety is our top priority. All our partners and services follow strict safety standards.",
  },
];

const FaqSection = () => {
  const [activeKey, setActiveKey] = useState(null);

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <div className="faq-section py-5">
      <Container>
        <p className="text-center text-orange" style={{ fontFamily: "Yesteryear",fontSize:"25px" }}>Frequently Asked Questions</p>
        <h2 className="text-center fw-bold mb-4">
          Your <span className="text-orange" style={{ fontFamily: "Yesteryear" }}>Curiosity</span>, Our Answers
        </h2>
        <Row>
          <Col md={6}>
            <Accordion activeKey={activeKey}>
              {faqData.slice(0, Math.ceil(faqData.length / 2)).map((item, index) => (
                <Accordion.Item
                  key={index}
                  eventKey={index.toString()}
                  className="mb-3 shadow-sm border-0"
                >
                  <Accordion.Header onClick={() => handleToggle(index.toString())}>
                    {item.question}
                  </Accordion.Header>
                  <Accordion.Body>{item.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
          <Col md={6}>
            <Accordion activeKey={activeKey}>
              {faqData.slice(Math.ceil(faqData.length / 2)).map((item, index) => {
                const key = (index + Math.ceil(faqData.length / 2)).toString();
                return (
                  <Accordion.Item
                    key={key}
                    eventKey={key}
                    className="mb-3 shadow-sm border-0"
                  >
                    <Accordion.Header onClick={() => handleToggle(key)}>
                      {item.question}
                    </Accordion.Header>
                    <Accordion.Body>{item.answer}</Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FaqSection;
