import "./ExploreNearBy.scss";

import DATA from "../../../Mock/exploreNearByList.json";
import React from "react";
import Slider from "react-slick";

function ExploreNearBy() {
  const settings = {
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 1.5,
    speed: 500,
    slidesPerRow: 2,
    autoplay: false,
  };

  return (
    <div className="nearby_explore_container">
      <div className="header">
        <h1>Explore nearby</h1>
      </div>
      <div className="content_wrapper">
        {window.innerWidth > 767 ? (
          <>
            {DATA.map((location) => (
              <div key={location.id} className="city_card">
                <img src={location.img} alt="" />
                <div>
                  <h6>{location.city}</h6>
                  <p>{location.drive}</p>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div>
            <Slider {...settings}>
              {DATA.map((location) => (
                <div className="city_card slide-item" key={location.id}>
                  <img src={location.img} alt="" />
                  <div>
                    <h6>{location.city}</h6>
                    <p>{location.drive}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExploreNearBy;
