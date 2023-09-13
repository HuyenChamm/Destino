import React from "react";
import CountUp from "react-countup";

export default function Fact() {
  return (
    <div className="fact">
      <div className="title">
        <h2>Fun facts about our Agency</h2>
        <h6>TAKE A LOOK</h6>
      </div>

      <div className="description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          fringilla lectus nec diam auctor, ut fringilla diam sagittis. Quisque
          vel est id justo faucibus dapibus id a nibh
        </p>
      </div>

      <div className="content_fact">
        <div>
          <img src="/images/milestone_1.svg" alt="" srcset="" />
          <div className="pt-5">
            <h2>
              {" "}
              <CountUp duration={10} start={0} end={17} />
            </h2>
            <h6>Mountains Climbed</h6>
          </div>
        </div>

        <div>
          <img src="/images/milestone_2.svg" alt="" srcset="" />
          <div className="pt-5">
            <h2>
              {" "}
              <CountUp duration={10} start={0} end={213} />
            </h2>
            <h6>Islands Visited</h6>
          </div>
        </div>

        <div>
          <img src="/images/milestone_3.svg" alt="" srcset="" />
          <div className="pt-5">
            <h2>
              {" "}
              <CountUp duration={10} start={0} end={11923} />
            </h2>
            <h6>Photos Taken</h6>
          </div>
        </div>

        <div>
          <img src="/images/milestone_4.svg" alt="" srcset="" />
          <div className="pt-5">
            <h2>
              {" "}
              <CountUp duration={10} start={0} end={15} />
            </h2>
            <h6>Cruises Organized</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
