import React from "react";
import Find from "./Find";
import Top from "./Top";

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
    </div>
  );
}
