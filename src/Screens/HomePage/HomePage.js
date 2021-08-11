import "./homepage.scss";

import ExploreNearBy from "../../Components/ExploreCards/ExploreNearby/ExploreNearBy";
import React from "react";

function HomePage() {
  return (
    <div className="homepage_container">
      <div className="img_container">
        <picture>
          <source
            srcSet="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=2560 1x, https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=2560 2x"
            media="(min-width: 1440px)"
          />
          <source
            srcSet="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=960 1x, https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=1920 2x"
            media="(min-width: 950px)"
          />
          <source
            srcSet="https://a0.muscache.com/im/pictures/e09893fc-1d02-49b2-befa-c4be7a57ed18.jpg?im_w=720 1x, https://a0.muscache.com/im/pictures/e09893fc-1d02-49b2-befa-c4be7a57ed18.jpg?im_w=1440 2x"
            media="(min-width: 744px)"
          />
          <source srcSet="https://a0.muscache.com/im/pictures/0c38042b-8685-4180-8d9b-12a6892ac6d8.jpg?im_w=320 1x, https://a0.muscache.com/im/pictures/0c38042b-8685-4180-8d9b-12a6892ac6d8.jpg?im_w=720 2x" />
          <img
            className="bg_img"
            aria-hidden="true"
            alt=""
            src="https://a0.muscache.com/im/pictures/0c38042b-8685-4180-8d9b-12a6892ac6d8.jpg?im_q=highq&amp;im_w=720"
          />
        </picture>
      </div>
      <div className="text-title">
        <h1>Not sure where to go? Perfect.</h1>
        <button className="flexible_btn" onClick={(e) => e.preventDefault()}>
          <span>I'm flexible</span>
        </button>
      </div>

      <ExploreNearBy />
    </div>
  );
}

export default HomePage;
