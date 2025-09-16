import React from "react";

function Universe() {
  return (
    <>
      <div className="container p-5 mt-2">
        <div className="row text-center p-5">
          <h4>The Zerodha Universe</h4>
          <p className="mt-3 fs-6">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>

          {/* Cards section */}
          <div className="col-12 col-sm-6 col-lg-4 p-3 mt-4">
            <img
              src="media/images/zerodhaFundhouse.png"
              alt="logo"
              className="img-fluid"
              style={{width:"50%"}}
            />
            <p className="text-small text-muted mt-2">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>

          <div className="col-12 col-sm-6 col-lg-4 p-3 mt-4">
            <img
              src="media/images/sensibullLogo.svg"
              alt="logo"
              className="img-fluid"
              style={{width:"60%"}}
            />
            <p className="text-small text-muted mt-2">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>

          <div className="col-12 col-sm-6 col-lg-4 p-3 mt-4">
            <img
              src="media/images/tijori.png"
              alt="logo"
              className="img-fluid"
              style={{width:"40%"}}
            />
            <p className="text-small text-muted mt-2">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>

          <div className="col-12 col-sm-6 col-lg-4 p-3 mt-4">
            <img
              src="media/images/streakLogo.png"
              alt="logo"
              className="img-fluid"
              style={{width:"40%"}}
            />
            <p className="text-small text-muted mt-2">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>

          <div className="col-12 col-sm-6 col-lg-4 p-3 mt-4">
            <img
              src="media/images/smallcaseLogo.png"
              alt="logo"
              className="img-fluid"
              style={{width:"50%"}}
            />
            <p className="text-small text-muted mt-2">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>

          <div className="col-12 col-sm-6 col-lg-4 p-3 mt-4">
            <img
              src="media/images/dittoLogo.png"
              alt="logo"
              className="img-fluid"
              style={{width:"40%"}}
            />
            <p className="text-small text-muted mt-2">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>

          {/* Signup Button */}
          <div className="col-12 mt-5">
            <button
              className="btn btn-primary p-2 fs-5 px-4 mb-5"
              style={{ backgroundColor: "#387ED1", maxWidth: "250px" }}
            >
             <a href="/signup"style={{color:"white",textDecoration:"none"}}> Sign up for free</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Universe;
