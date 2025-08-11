"use client";
import React, { useEffect } from "react";
import "../Css/countBar.css";

const Counter = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");

    const animateCounter = (counter) => {
      const target = +counter.getAttribute("data-target");
      const increment = target / 100;
      let count = 0;

      const updateCounter = () => {
        count += increment;
        if (count < target) {
          counter.textContent = formatCount(count);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = formatCount(target);
        }
      };

      updateCounter();
    };

    const formatCount = (num) => {
      if (num >= 1000) {
        return `${Math.floor(num / 1000)}K`;
      }
      return Math.floor(num);
    };

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            animateCounter(counter);
            observerInstance.unobserve(counter);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => {
      observer.observe(counter);
    });

    return () => {
      counters.forEach((counter) => {
        observer.unobserve(counter);
      });
    };
  }, []);

  const stats = [
    { value: 10, label: "Years Of Experience" },
    { value: 15000, label: "Satisfied Clients" },
    { value: 60, label: "Experience Staff" },
    { value: 200, label: "Total Rooms" },
  ];

  return (
    <section className="client-exp-section pb-3 pb-lg-5 pt-lg-2 pt-2 mt-3">
      <div className="container">
        <div className="client-experience-bg p-3 p-lg-3">
          <div className="col-xxl-10 mx-auto">
            <div className="row">
              {stats.map((item, index) => (
                <div className="col-md-3 col-6" key={index}>
                  <div className="clint-text-exp text-center py-2">
                    <h4 className="fw-6 fts-42 white-color-L">
                      <span className="counter" data-target={item.value}>0</span>
                      {index !== 4 && <span>+</span>}
                    </h4>
                    <p className="fts-16 fw-5 primary-color-L mt-1">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
