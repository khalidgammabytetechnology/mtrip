import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/ToursTravels.css"

const serviceCards = [
  {
    id: 1,
    icon: "/Assets/tourCardIcon.png",
    title: "Bhutan",
    description: "Paro Taktsang (Tiger’s Nest), Punakha Dzong, Thimphu’s weekend markets, Dochula Pass.",
    description1: "Gentle Himalayan treks, vibrant festivals, traditional farmhouse stays.",
  },
  {
    id: 2,
    icon: "/Assets/tourCardIcon.png",
    title: "Dubai",
    description: "Burj Khalifa, Desert Safari with BBQ & dune bashing, Dubai Marina cruise, Atlantis Aquaventure.",
    description1: "Luxury shopping, sky-high brunches, world-class entertainment.",
  },
  {
    id: 3,
    icon: "/Assets/tourCardIcon3.png",
    title: "Singapore",
    description: "Gardens by the Bay, Sentosa Island, Marina Bay Sands Infinity Pool, Chinatown & Little India tours.",
    description1: "Futuristic architecture, multicultural cuisine, night safari at the zoo.",
  },
  {
    id: 4,
    icon: "/Assets/tourCardIcon3.png",
    title: "Vietnam",
    description: "Halong Bay cruise, Hoi An lantern-lit Old Town, Cu Chi Tunnels, Ho Chi Minh City street-food tour.",
    description1: "Riverboat rides, historic temples, vibrant marketplaces.",
  },
  {
    id: 5,
    icon: "/Assets/tourCardIcon4.png",
    title: "Maldives",
    description: "Overwater villas, snorkelling & diving in coral reefs, private island picnic.",
    description1: "Ultra-relaxing spa therapies, sunset dolphin cruises.",
  },
  {
    id: 6,
    icon: "/Assets/tourCardIcon4.png",
    title: "Sri Lanka",
    description: "Sigiriya Rock Fortress, Kandy’s Temple of the Tooth, tea-plantation train ride, Galle Fort.",
    description1: "Wildlife safari in Yala, coastal beaches, traditional ayurveda.",
  },
  {
    id: 7,
    icon: "/Assets/tourCardIcon4.png",
    title: "Thailand",
    description: "Bangkok Grand Palace & floating markets, Phuket & Krabi beaches, Chiang Mai elephant sanctuary.",
    description1: "Street-food tours, Muay Thai shows, island-hopping by longtail boat.",
  },
  {
    id: 8,
    icon: "/Assets/tourCardIcon4.png",
    title: "Ready to Take Off?",
    description: "Book your dream vacation with Aryavrat Tourism—the official travel partner of MTRIP Hotels.",
  },
];

const TravelsServices = () => {
  return (
    <div className="travels-services">
      <div className="container py-5">
        <div className="row justify-content-between align-items-center mb-4">
          <div className="col-md-6">
            <p
              className="travels-services-title mb-1"
              style={{ fontFamily: "Yesteryear", fontSize: "25px" }}
            >
              Our Services
            </p>
            <h2 className="travels-services__subtitle fw-bold mb-3">
              Seamless Travel,
              <span
                className="text-orange"
                style={{ fontFamily: "Yesteryear", fontWeight: 300 }}
              >
                {" "}Exceptional
              </span>
              <br /> Services
            </h2>
          </div>
          <div className="col-md-6 text-md-end text-start">
            <p className="travels-services-description text-muted mb-0">
              From snow-capped mountains to golden deserts, tranquil backwaters to vibrant cities — Aryavrat Tourism brings you the best of India's diverse beauty and culture with our specially curated Domestic Tour Packages.
            </p>
            <br />

            <p className="travels-services-description text-muted mb-0">
              Whether you're planning a family vacation, honeymoon, group tour, religious trip, or adventure getaway, we have something for everyone!
            </p>
          </div>
        </div>

        <div className="row g-4">
          {serviceCards.map((service) => (
            <div key={service.id} className="col-lg-3 col-md-6 col-sm-12">
              <Card className="travel-service-card p-4 h-100">
                <div className="travel-service-card__icon mb-3">
                  <img
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                  />
                </div>
                <h5 className="travel-service-card__title fw-bold mb-2">
                  {service.title}
                </h5>
                <p className="travel-service-card__desc text-muted mb-0">
                  {service.description}
                </p>
                <br />
                <p className="travel-service-card__desc text-muted mb-0">
                  {service.description1}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelsServices;
