import React from "react";
import Find from "./Find";
import Top from "./Top";
import Discount from "./Discount";
import Video from "./Video";
import Popular from "./Popular";
import Special from "./Special";
import Subscribe from "./Subscribe";

export default function Home() {
  return (
    <div className="home">
      <div className="banner">
        <div className="title ">
          <h1>DISCOVER</h1>
          <h2>Discover new worlds</h2>
        </div>
      </div>
    <Find/>
    <Top/>
    <Discount/>
    <Video/>
    <Popular/>
    <Special/>
    <Subscribe/>
    </div>
  );
}
