import React from "react";

import Hero from "./hero";
import LeftImg from "./leftImg";
import RightImg from "./rightImg";
import Universe from "./universe";
function ProductPage() {
  return (
    <>
      <Hero />
      <LeftImg
        imageUrl="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightImg 
       imageUrl="media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        LearnMore=""
        mt="-150px"
      
      />
      <LeftImg
        imageUrl="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightImg
        imageUrl="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        LearnMore=""
        className="col-6 p-5" 
    
      />

       <LeftImg
        imageUrl="media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="coin"
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center fs-5">Want to know more about our technology stack? Check out the <a href="" style={{ textDecoration: "none", color: "#387ED1" }}>Zerodha.tech</a> blog.</p>

      <Universe />
    </>
  );
}

export default ProductPage;
