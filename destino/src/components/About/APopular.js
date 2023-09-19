import React from 'react'
import { FireOutlined, GitlabOutlined, RedditOutlined } from "@ant-design/icons";

export default function APopular() {
  return (
    <div className='apopular'>
      <div className='container'>
        <div className='title mb-5 mt-5 text-center'>
          <h2>Popular services that we offer</h2>
          <h6>TAKE A LOOK AT THESE OFFERS</h6>
        </div>  

        <div className='content'>

          <div className='child' >
            <div className='d-flex flex-row align-items-end  my-3'>
              <FireOutlined className='icon' />
              <h5>Weekend trips</h5>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adip iscing elit. Fusce fringilla lectus nec diam auctor, ut fringilla diam sagittis.
            </p>
            <a href="/">Read more</a>
          </div>

          <div className='child' >
            <div className='d-flex flex-row align-items-end my-3'>
              <GitlabOutlined className='icon'  />
              <h5>Fun leisure trips</h5>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adip iscing elit. Fusce fringilla lectus nec diam auctor, ut fringilla diam sagittis.
            </p>
            <a href="/">Read more</a>
          </div>

          <div className='child' >
            <div className='d-flex flex-row align-items-end my-3'>
              <RedditOutlined className='icon' />
              <h5>Plane tickets</h5>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adip iscing elit. Fusce fringilla lectus nec diam auctor, ut fringilla diam sagittis.
            </p>
            <a href="/">Read more</a>
          </div>

        </div>
      </div>
    </div>
  )
}
