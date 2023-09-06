import React, { useState } from 'react'
import YouTube from 'react-youtube';

export default function Video() {
  
  const [show,setShow] = useState(false);
  const showVideo = () =>{
    setShow(!show);
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // Các tham số của video YouTube
      autoplay: 0, // Không tự động phát video
    },
  };
  const videoId = 'lxsIioVYPpg';

  return (
    <div className='video'>
     <button onClick={showVideo}>Play Video</button>
      {show && (
        <div>
          <button onClick={showVideo}>Đóng Video</button>
          <YouTube videoId={videoId} opts={opts} />
        </div>
      )}
    </div>
  )
}
