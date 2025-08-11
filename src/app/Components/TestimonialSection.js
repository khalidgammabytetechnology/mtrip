"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/HeroSection.css";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Cameron",
    rating: 5,
    text: "MTrip made our honeymoon absolutely stress-free! The hotel was perfect, and the support team helped us every step of the way.",
    image: "/Assets/profile1.png",
  },
  {
    name: "Emily Watson",
    rating: 5,
    text: "This was my first solo trip, and MTrip made me feel safe and cared for. Great hotel deals and amazing service. I'll definitely book again.",
    image: "/Assets/profile2.png",
  },
  {
    name: "John Doe",
    rating: 4,
    text: "Our family trip was smooth and comfortable. Thanks to MTrip's perfect arrangements!",
    image: "/Assets/profile1.png",
  },
  {
    name: "Sarah Smith",
    rating: 5,
    text: "I always choose MTrip for travel.  Reliable and easy! Every trip has been smooth and memorable. It's my go-to platform for vacation planning.",
    image: "/Assets/profile2.png",
  },
];

const chunkTestimonials = (arr, size) =>
  arr.reduce(
    (acc, _, i) => (i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc),
    []
  );

const TestimonialSection = () => {
  const [chunkedSlides, setChunkedSlides] = useState([]);

  const updateSlides = () => {
    const cardPerSlide = window.innerWidth < 768 ? 1 : 2;
    setChunkedSlides(chunkTestimonials(testimonials, cardPerSlide));
  };

  useEffect(() => {
    updateSlides();
    window.addEventListener("resize", updateSlides);
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  return (
    <div className="testimonial-main">
      <div className="container text-center py-5">
        <p
          className="text-orange mb-1"
          style={{ fontFamily: "Yesteryear", fontSize: "25px" }}
        >
          Testimonials
        </p>
        <h2 className="fw-bold mb-4">
          What Our{" "}
          <span className="text-orange" style={{ fontFamily: "Yesteryear" }}>
            Travelers
          </span>{" "}
          Say
        </h2>

        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div className="carousel-indicators">
            {chunkedSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          <div className="carousel-inner">
            {chunkedSlides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}
              >
                <div className="row justify-content-center">
                  {slide.map((testimonial, index) => (
                    <div
                      key={index}
                      className="col-md-6 col-10 d-flex justify-content-center mb-4"
                    >
                      <div
                        className="testimonial-card card border-0 shadow-sm p-4 w-100 position-relative"
                        style={{ maxWidth: "500px", height: "250px" }}
                      >
                        {/* Vector line image */}
                        <div
                          className="position-absolute start-0"
                          style={{
                            top: "50%",
                            transform: "translateY(-50%)",
                            zIndex: 0,
                            height: "80%",
                          }}
                        >
                          <Image
                            src="/Assets/Vector-line.png"
                            alt="left-line"
                            width={40}
                            height={200}
                            style={{ height: "100%", width: "auto" }}
                          />
                        </div>

                        {/* Bottom vector decorations */}
                        <div
                          className="position-absolute bottom-0 end-0"
                          style={{ zIndex: 0 }}
                        >
                          <Image
                            src="/Assets/Vector-org.png"
                            alt="bottom-deco"
                            width={60}
                            height={60}
                          />
                        </div>
                        <div
                          className="position-absolute bottom-0 end-0 me-4"
                          style={{ right: "20px", zIndex: 0 }}
                        >
                          <Image
                            src="/Assets/Vector-org2.png"
                            alt="bottom-deco"
                            width={60}
                            height={60}
                          />
                        </div>

                        {/* Testimonial content */}
                        <div className="d-flex align-items-center mb-3">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="rounded-circle me-3"
                            width={50}
                            height={50}
                            unoptimized
                          />

                          <div className="text-start">
                            <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                            <div className="text-warning small d-flex gap-0">
                              {Array(testimonial.rating)
                                .fill()
                                .map((_, i) => (
                                  <FaStar key={i} />
                                ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-muted text-start">
                          {testimonial.text}
                        </p>
                        <div
                          className="position-absolute top-0 end-0 p-3 text-orange opacity-30"
                          style={{ fontSize: "1rem" }}
                        >
                          <Image
                            src="/Assets/Vector.png"
                            alt="Quote Icon"
                            width={40}
                            height={40}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
