import React from 'react'
import Slider from 'react-slick';

export default function Base() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className='container'>
    <h1>Aa</h1>
      <div className='d-flex flex-column justify-content-between align-items-center'>
        <button className='btn-pink'>
          <p>Find</p>
        </button>

        <a href='/' className='btn-blue'>
          See offer
        </a>
      </div>
      <h2>AAAAAAaaaa</h2>
      <h3>AAAAAAaaaa</h3>
      <h4>AAAAAAaaaa</h4>
      <h5>AAAAAAaaaa</h5>
      <h6>AAAAAAaaaa</h6>
      <p>AAAAAAaaaaa</p>
      <div>
        <Slider {...settings}>
          <div>
            <h3>Slide 1</h3>
          </div>
          <div>
            <h3>Slide 2</h3>
          </div>
          <div>
            <h3>Slide 3</h3>
          </div>
          <div>
            <h3>Slide 4</h3>
          </div>
        </Slider>
      </div>
      
    </div>
  )
}
