import React from "react";


function Hero() {
  return (
    <section className="container-fluid pb-3 bg-light" id="supportHero">
      <div className="p-2" id="supportWrapper" style={{ color: "black" }}>
        <h2 className="mt-3 fs-1">Support Portal</h2>
        <button>My Tickets</button>
      </div>

      <div className="text-center">
        <input
          type="text"
          placeholder="Eg: how do I activate F&O, why my order getting rejected"
        />
      </div>
    </section>
  );
}

export default Hero;
