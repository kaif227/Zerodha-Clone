import React from "react";

function RightImg({ imageUrl, productName, productDescription, LearnMore, mt }) {
  return (
    <>
      <div
        className="container p-5"
        style={{ marginBottom: "-100px", marginTop: "-50px" }}
      >
        <div className="row align-items-center">
          {/* Text section */}
          <div className="col-12 col-lg-5 p-4  text-center text-lg-start">
            <h1 className="fs-4">{productName}</h1>
            <p className="fs-5 mt-3">{productDescription}</p>
            <div>
              <a href={LearnMore} style={{ textDecoration: "none", color: "#387ED1" }}>Learn More →</a>
            </div>
          </div>

          {/* Image section */}
          <div className="col-12 col-lg-7 p-4 text-center" style={{ marginTop: mt }}>
            <img src={imageUrl} alt="kite" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
}

export default RightImg;
