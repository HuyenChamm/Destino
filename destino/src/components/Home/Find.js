import { DownOutlined } from "@ant-design/icons";
import React, { useState } from "react";

export default function Find() {
  // const [chuoiBanDau, setChuoiBanDau] = useState("Hello, world!");
  // const [chuoiDaDao, setChuoiDaDao] = useState("");

  // const daoChuoi = () => {
  //   let reversedStr = "";
  //   for (let i = chuoiBanDau.length - 1; i >= 0; i--) {
  //     reversedStr += chuoiBanDau[i];
  //   }
  //   setChuoiDaDao(reversedStr);
  // };

  return (
    <div className="find">
    {/* <div>
      <p>Chuỗi ban đầu: {chuoiBanDau}</p>
      <p>Chuỗi đã đảo: {chuoiDaDao}</p>
      <button onClick={daoChuoi}>Đảo Chuỗi</button>
    </div> */}
      <div className="container">
        <div className="text-center pt-5">
          <h2>Find the Adventure of a lifetime</h2>
        </div>
        <div className="content">
          <div className="left">
            <div className="destination">
              <p>Destination:</p>
              <input type="text" placeholder="   Keyword here" />
            </div>

            <div className="categori">
              <p>Adventure type:</p>
              <div class="dropdown">
                <button
                  class="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                  <DownOutlined />
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="min">
              <p>Min price:</p>
              <div class="dropdown">
                <button
                  class="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <DownOutlined />
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="max">
              <p>Max price:</p>
              <div class="dropdown">
                <button
                  class="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <DownOutlined />
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="btn-find">
              <button className="btn-pink">
                <p>Find</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
