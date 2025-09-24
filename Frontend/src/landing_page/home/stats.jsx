import React from "react";
import { Link } from "react-router-dom";

function Stats() {
    const goToKite = () => {
    // If dashboard is a separate app:
    window.location.href = `${import.meta.env.VITE_API_DASHBORD_URL}`;
    // If dashboard is part of the same app:
    // navigate("/kite");
  };
  return (
    <div className="container p-3">
      <div className="row p-3 p-md-5 align-items-center">
        {/* Left Text Section */}
        <div className="col-12 col-md-5 p-3 p-md-5">
          <h1 className="fs-3 fs-md-2 mb-4">Trust with confidence</h1>

          <h2 className="fs-5 fs-md-4 text-muted">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
            crores of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p><br />

          <h2 className="fs-5 fs-md-4 text-muted">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p><br />

          <h2 className="fs-5 fs-md-4 text-muted">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your
            needs.
          </p><br />

          <h2 className="fs-5 fs-md-4 text-muted">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="col-12 col-md-6 text-center mt-4 mt-md-5">
          <img
            src="media/images/ecosystem.png"
            alt="ecosystem"
            className="img-fluid mb-3"
          />
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <Link to="/products" style={{ textDecoration: "none" }}>
              Explore our product <i className="fa-solid fa-arrow-right"></i>
            </Link>
            <Link to="#" onClick={goToKite} style={{ textDecoration: "none" }}>
              Try Kite demo <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
