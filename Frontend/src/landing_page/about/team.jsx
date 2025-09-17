import React from "react";
function Team() {
  return (
    <>
      <div className="container p-3 ">
        {/* Heading Row */}
        <div className="row ">
          <div className="col-12 ">
            <h1 className="text-center fs-4 p-5">People</h1>
          </div>
        </div>

        {/* Content Row */}
        <div className="row    text-muted">
          <div
            className="col-12   col-lg-5 p-5 text-lg-center text-sm-center"
            style={{ lineHeight: "1.9", fontSize: "1.1em", }}
          >
            <img
              src="media/images/nithinKamath.jpg"
              style={{ borderRadius: "100%", width: "60%" }}
              alt=""
            />
            <h4 className="mt-4 text-center" >Nithin Kamath</h4>
            <h6 className="text-center">Founder, CEO</h6>
          </div>

          <div
            className="col-12 col-lg-6 p-5"
            style={{ lineHeight: "1.8", fontSize: "1.1em" }}
          >
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen</p>
            <p>
              Connect on{" "}
              <a href="/" style={{ textDecoration: "none",color:"#387ED1" }}>
                Homepage
              </a>{" "}
              /{" "}
              <a href="" style={{ textDecoration: "none",color:"#387ED1" }}>
                TradingQnA
              </a>{" "}
              /{" "}
              <a href="" style={{ textDecoration: "none",color:"#387ED1" }}>
                Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
