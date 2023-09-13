import React, {  useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Special() {
  const settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:3,
    slidesToScroll: 1,
 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className='special mb-5'>
        <div  className=' text-center mb-5'>
          <h2>Special offers</h2>
          <h6>TAKE A LOOK AT THESE OFFERS</h6>
        </div>
      <div className='content'>
        <Slider {...settings}>
          <div className='slidee'>
            <img src="/images/special_1.jpg" alt=""  />
            <div className='title'>
              <h6>Visiting</h6>
              <h4>Indonesia</h4>
            </div>
          </div>
          <div className='slidee'>
            <img src="/images/special_2.jpg" alt=""  />
            <div className='title'>
              <h6>Visiting</h6>
              <h4>Bali</h4>
            </div>
          </div>
          <div className='slidee'>
            <img src="/images/special_3.jpg" alt=""  />
            <div className='title'>
              <h6>Visiting</h6>
              <h4>India</h4>
            </div>
          </div>
          <div className='slidee'>
            <img src="/images/special_4.jpg" alt=""  />
            <div className='title'>
              <h6>Visiting</h6>
              <h4>Thailand</h4>
            </div>
          </div>
          <div className='slidee'>
            <img src="/images/special_5.jpg" alt=""  />
            <div className='title'>
              <h6>Visiting</h6>
              <h4>France</h4>
            </div>
          </div>
        </Slider>
        
      </div>
    </div>
  )
}
