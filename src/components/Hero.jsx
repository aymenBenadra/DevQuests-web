import React from "react";

function Hero({ title, subtitle, cta }) {
  return (
    <div className="hero min-h-fit md:place-content-start rounded-box">
      <div className="hero-content md:ml-40">
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{subtitle}</p>
          {cta && cta}
        </div>
      </div>
    </div>
  );
}

export default Hero;
