import React from "react";

const Banner = () => {
  return (
    <div
      className="hero h-[500px] }"
      style={{
        borderRadius: "24px",
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary rounded-2xl mr-2">Explore Now</button>
          <button className="btn rounded-2xl bg-none">Our FeedBack</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
