import React from "react";
import Find from "../Home/Find";
import BannerA from "./BannerA";
import Fact from "./Fact";
import APopular from "./APopular";
import Subscribe from "../Home/Subscribe";
export default function About() {
  return (
    <div className="aboutpage">
      <BannerA />
      <div className="container">
        <div className="find">
          <Find />
        </div>
        <div className="mt-5 ">
          <div className="mt-5 text-center">
            <h2>We are an award winning Agency</h2>
            <h6>TAKE A LOOK AT OUR STORY</h6>
          </div>

          <div className="content">
            <div className="right">
              <img src="/images/about.jpg" alt="" srcset="" />
            </div>
            <div className="left">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                fringilla lectus nec diam auctor, ut fringilla diam sagittis.
                Quisque vel est id justo faucibus dapibus id a nibh. Aenean
                suscipit consequat lacus, sit amet mollis nulla. Morbi sagittis
                orci id lacus convallis tempus eget sit amet metus. Sed finibus,
                magna at euismod aliquet, enim justo vulputate lorem, sit amet
                elementum dolor eros sollicitudin dui. Sed ac magna mauris.
                Nullam lectus odio, viverra vel mi id, interdum imperdiet nulla.
              </p>
              <button className="btn-pink">
                <p>Read More</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Fact/>
      <APopular/>
      <Subscribe/>
    </div>
  );
}
