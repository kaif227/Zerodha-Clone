import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5 text-center">
      <h1 className="mt-5 fs-4 text-muted mb-3">
        Open a Zerodha account
      </h1>
      <p className="mb-4 mt-3">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
      </p>
      <Link to="/signup">
      <button
        className="btn btn-primary p-2 fs-5 px-4 mb-5 w-lg-25 w-md-25"
        style={{ maxWidth: "250px",backgroundColor:"#387ED1" }}
      >
        Sign up for free
      </button>
      </Link>
    </div>
  );
}

export default OpenAccount;
