import React from "react";

function LeftImg({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <>
      <div className="container p-5">
        <div className="row align-items-center">
          {/* Image section */}
          <div className="col-12 col-lg-5 p-4 text-center text-lg-start">
            <img src={imageUrl} alt="kite" className="img-fluid" />
          </div>

          {/* Text section */}
          <div className="col-12 col-lg-7 p-4 text-center text-lg-start">
            <h1 className="fs-4">{productName}</h1>
            <p className="fs-6 mt-3">{productDescription}</p>

            <div className="mt-3">
              <a href={tryDemo} style={{ textDecoration: "none", color: "#387ED1" }}>Try Demo →</a>
              <a href={learnMore} style={{ textDecoration: "none", color: "#387ED1" }} className="ms-4">
                Learn More →
              </a>
            </div>

            <div className="mt-4">
              <a href={googlePlay} className="mx-2">
                <img
                  src="media/images/googlePlayBadge.svg"
                  alt="Google Play"
                  className="img-fluid"
                />
              </a>
              <a href={appStore} className="mx-2">
                <img
                  src="media/images/appstoreBadge(1).svg"
                  alt="App Store"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftImg;
