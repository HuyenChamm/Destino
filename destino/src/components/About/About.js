import React from "react";
import Find from "../Home/Find";
import BannerA from "./BannerA";

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
            <h4>We are an award winning Agency</h4>
            <p>TAKE A LOOK AT OUR STORY</p>
          </div>
          <div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla lectus nec diam auctor, ut fringilla diam sagittis. Quisque vel est id justo faucibus dapibus id a nibh. Aenean suscipit consequat lacus, sit amet mollis nulla. Morbi sagittis orci id lacus convallis tempus eget sit amet metus. Sed finibus, magna at euismod aliquet, enim justo vulputate lorem, sit amet elementum dolor eros sollicitudin dui. Sed ac magna mauris. Nullam lectus odio, viverra vel mi id, interdum imperdiet nulla.</p>
              <button className='btn-pink'>
              <p>Read More</p>
            </button>
            </div>
            <div>
              <img src="/images/about.jpg" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
