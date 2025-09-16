import React from "react";
function Hero() {
  return (
    <>
      <div className="container p-5 border-bottom mb-5">
        <div className=" text-center mt-5  ">
          <h1 className="fs-3">Zerodha Products</h1>
          <h3 className="text-muted fs-5 mt-3">
            Sleek, modern, and intuitive trading platforms
          </h3>
          <br />
          <p className="mb-5">
            Check out our  <a href="" style={{ textDecoration: "none", color: "#387ED1" }}>
               investment offerings →
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
