import React from "react";

export default function Discount() {
  return (
    <div className="discount">
      <div className="container">
        <div className="content">
          <div className="logo">
            <img src="/images/last_logo.png" className="img_logo" alt="" srcset="" />
          </div>
          <div className="offer mb-5">
            <div className="offer_child mt-5">
              <h6>MALDIVE</h6>
              <h1>50%</h1>
              <h5>Last Minute Offer</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                pulvinar sed mauris eget tincidunt. Sed lectus nulla, tempor
                vel.
              </p>
              <div className="mt-5">
                <a href="/" className="btn-blue ">
                  See offer
                </a>
              </div>
            </div>

            <div className="offer_child mt-5">
              <h6>BALI</h6>
              <h1>38%</h1>
              <h5>Last Minute Offer</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                pulvinar sed mauris eget tincidunt. Sed lectus nulla, tempor
                vel.
              </p>
              <div className="mt-5">
                <a href="/" className="btn-blue ">
                  See offer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
