import React from "react";

function Pricing() {
  return (
    <div className="container p-5">
      <div className="row align-items-center">
        {/* Left Text Section */}
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <h2 className="mb-4 fs-3 fs-md-2 text-muted">Unbeatable price</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <p>
            <a href="#" style={{ textDecoration: "none" }}>
              See pricing <i className="fa-solid fa-arrow-right"></i>
            </a>
          </p>
        </div>

        {/* Spacer (hidden on small) */}
        <div className="d-none d-md-block col-md-2"></div>

        {/* Right Pricing Boxes */}
        <div className="col-12 col-md-6">
          <div className="row text-center">
            <div className="col-12 col-sm-6 p-3 border">
              <h1 className="mb-3">₹0</h1>
              <p>
                Free equity delivery <br /> & direct mutual funds
              </p>
            </div>
            <div className="col-12 col-sm-6 p-3 border">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;


//     <div className="col-2" style={{width:"20%"}}>
//         <img src="media/images/pricing0.svg" alt="" />
//     </div>
//     <div className="col-2 p-2"style={{fontSize:"10px"}}>
//          <p> Free account opening</p>
//     </div>

//     <div className="col-2 ">
//         <img src="media/images/pricing0.svg" alt="" />
//     </div>
//     <div className="col-2 p-2" style={{fontSize:"10px"}}>
//          <p> Free account opening</p>
//     </div>
//     <div className="col-2 p-2" style={{fontSize:"10px"}}>
//          <p> Free account opening</p>
//     </div>
//     <div className="col-2 ">
//         <img src="media/images/intradayTrades.svg" alt="" />

//     </div>
// </div>
