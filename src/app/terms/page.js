"use client";

import "../Css/legal.css";
import Footer from "@/app/Components/Footer";


export default function TermsPage() {
  return (
    <div>
    <div className="legal-container">
      <h1>Terms & Conditions</h1>
      <p>Last updated: July 29, 2025</p>

      <h2>1. Booking & Payment</h2>
      <p>
        All bookings made through our platform require a valid payment method. Prices are subject to availability and may change before confirmation.
      </p>

      <h2>2. Hotel & Room Selection</h2>
      <p>
        We provide details and images of hotels and rooms as supplied by our partners. Users are responsible for reviewing and selecting the services that suit their preferences.
      </p>

      <h2>3. Cab Services</h2>
      <p>
        Cab services booked through our platform are provided by third-party vendors. We are not responsible for delays or driver conduct but we encourage feedback.
      </p>

      <h2>4. Tours & Packages</h2>
      <p>
        Travel packages are subject to availability. Itinerary, inclusions, and exclusions will be clearly mentioned on the booking page.
      </p>

      <h2>5. Cancellations & Refunds</h2>
      <p>
        Cancellation policies vary per hotel and service. Please read the specific policy before confirming your booking. Refunds, if applicable, will be processed within 7–10 business days.
      </p>

      <h2>6. User Responsibilities</h2>
      <p>
        Users are responsible for providing accurate information during booking and must comply with hotel and local travel regulations.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        We act as an intermediary between customers and service providers and shall not be held liable for service disruptions, loss of property, or injury.
      </p>
    </div>

    <Footer/>
    </div>
  );
}
