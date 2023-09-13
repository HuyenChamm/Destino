import React from 'react'

export default function Subscribe() {
  return (
    <div className='subscribe'>
      <div className='container text-center'>
        <h2>Subscribe to our Newsletter</h2>
        <div className='content mt-5'>
            <input type="text" placeholder="   Your E-mail address" />
            <div className="btn-find">
              <button className="btn-pink">
                <p>Find</p>
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}
