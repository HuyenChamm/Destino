import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container content_footer">
        <div className="intro">
          <div className=" m-auto">
            <img className="img" src="/images/logo.png" alt="" />
            <div className="name_logo">
              <h6>DESTINO</h6>
              <p className="xs">TRAVEL AGENCY</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            pulvinar sed mauris eget tincidunt. Sed lectus nulla, tempor vel
            eleifend quis, tempus rut rum metus. Pellentesque ultricies enim eu
            quam fermentum hendrerit.
          </p>
          <p>
            Copyright ©2023 All rights reserved | This template is made with by{" "}
            <span>Colorlib</span>
          </p>
        </div>
        <div className="lastest">
          <h5>Lastest News</h5>
          <article className="d-flex flex-row ">
            <img className="" src="/images/latest_1.jpg" alt="" />
            <div className="d-flex flex-column p-3">
              <a href="/">Brazil Summer</a>
              <small>Jan 09 ,2018</small>
            </div>
          </article>
          <article className="d-flex flex-row mt-5">
            <img className="img" src="/images/latest_2.jpg" alt="" />
            <div className="d-flex flex-column p-3">
              <a href="/">A perfect vaccation</a>
              <small>Jan 09 ,2018</small>
            </div>
          </article>
        </div>
        <div className="tags">
          <h5>Tags</h5>
          <div>
            <a href="/" className="tag">travel</a>
            <a href="/" className="tag">summer</a>
            <a href="/" className="tag">cruise</a>
            <a href="/" className="tag">beach</a>
            <a href="/" className="tag">offer</a>
            <a href="/" className="tag">vacation</a>
            <a href="/" className="tag">trip</a>
            <a href="/" className="tag">city break</a>
            <a href="/" className="tag">adventure</a>
          </div>
        </div>
      </div>
    </div>
  );
}
