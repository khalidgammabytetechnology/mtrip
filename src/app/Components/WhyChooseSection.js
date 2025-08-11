import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

const benefits = [
  {
    title: "Customized Itineraries",
    description:
      "Tailor-made travel plans crafted to suit your interests, pace, and preferences.",
  },
  {
    title: "Comfortable Hotel Stays (with MTRIP partner hotels)",
    description:
      "Stay in top-rated, MTrip-approved hotels for comfort, safety, and convenience.",
  },
  {
    title: "Private Transport and Guided Sightseeing",
    description:
      "Enjoy hassle-free travel with personal transport and local expert guides.",
  },
  {
    title: "All-Inclusive & Budget-Friendly Options",
    description:
      "Get complete travel packages that fit your budget without hidden charges.",
  },
  {
    title: "24/7 Travel Assistance",
    description:
      "Our dedicated support team is just a call away—day or night, anytime, anywhere.",
  },
];

const WhyChooseSection = ({ image }) => {
  return (
    <div className="container py-5 d-flex justify-content-center align-items-center">
  <div className="row align-items-center w-100" style={{ maxWidth: "1200px" }}>
        {/* Left Image Side */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div className="position-relative choose-img-wrapper">
            <Image
              src={ image }
              alt="Hikers"
              className="choose-img img-fluid w-100"
              style={{ height: "48vh", objectFit: "cover" , boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)"}}
              width={800}
              height={800}
            />
            <div
              className="position-absolute text-white bg-orange diamond-badge d-flex justify-content-center align-items-center"
              style={{ bottom: "20px", left: "20px" }}
            >
              <span
                className="text-center badge-text"
                style={{ fontFamily: "Yesteryear" }}
              >
                Never stop Exploring
              </span>
            </div>
          </div>
        </div>

        {/* Right Content Side */}
        <div className="col-lg-6">
          <div className="choose-right-txt">
            <p
              className="text-orange mb-1"
              style={{ fontFamily: "Yesteryear", fontSize: "25px" }}
            >
              Why MTrip
            </p>
            <h2 className="fw-bold mb-3">
              What We {" "}
              <span
                className="text-orange"
                style={{ fontFamily: "Yesteryear" }}
              >
                Offer
              </span>
              ?
            </h2>
            <p className="text-muted mb-4">
              We provide personalized travel solutions designed to make every journey effortless, enjoyable, and unforgettable.
            </p>

            {benefits.map((item, idx) => (
              <div className="d-flex mb-3" key={idx}>
                <div className="me-3">
                  <Image
                    src="/Assets/plane.png"
                    alt="Plane Icon"
                    style={{ width: "60px", height: "60px" }}
                    width={60}
                    height={60}
                  />
                </div>
                <div>
                  <h6 className="mb-1 fw-bold">{item.title}</h6>
                  <p className="mb-0 text-muted small">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
