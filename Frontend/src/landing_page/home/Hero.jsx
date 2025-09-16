import React from "react";

function Hero() {
  return (
    <>
      <div className="container p-5 mb-5">
        <div className="row text-center justify-content-center">
          <div className="col-12">
            <a href="">
            <img
              src="media/images/homeHero.png"
              alt="Main Image"
              className="img-fluid mb-4"
            />
            </a>
          </div>

          <div className="col-12">
            <h1 className="mt-3 fs-3 fs-md-2 text-muted">Invest in everything</h1>
            <p className="mb-4">
              Online platform to invest in stocks, derivatives, mutual funds,
              ETFs, bonds, and more.
            </p>
            <button
              className="btn btn-primary p-2 fs-5 px-4 mb-5 w-lg-25 w-md-25" style={{backgroundColor:"#387ED1"}}
            >
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
