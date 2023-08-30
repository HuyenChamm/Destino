import React from 'react'

export default function Top() {
  return (
    <div className='top container'>
      <div className='title text-center'>
        <h2>Top destinations in Europe</h2>
        <p>TAKE A LOOK AT THESE OFFER</p>
      </div>
      <div className='content'>

        <div className='content-desc'>
          <img className="img" src="/images/top_1.jpg" alt="" />
          <div className='description'>
            <small>From $444</small>
            <p>Paris, France</p>
          </div>
        </div>

        <div className='content-desc'>
          <img className="img" src="/images/top_2.jpg" alt="" />
          <div className='description'>
            <small>From $444</small>
            <p>Italian Riviera</p>
          </div>
        </div>

        <div className='content-desc'>
          <img className="img" src="/images/top_3.jpg" alt="" />
          <div className='description'>
            <small>From $444</small>
            <p>Cinque Terre</p>
          </div>
        </div>

        <div className='content-desc'>
          <img className="img" src="/images/top_4.jpg" alt="" />
          <div className='description'>
            <small>From $444</small>
            <p>Santorini, Greece</p>
          </div>
        </div>

      </div>
    </div>
  )
}
