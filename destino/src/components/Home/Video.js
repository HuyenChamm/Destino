import React, { useState } from 'react'
import YouTube from 'react-youtube';
import { CaretRightOutlined, CloseCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";

export default function Video() {
  
  const [show,setShow] = useState(false);
  const showVideo = () =>{
    setShow(!show);
  };

  // const opts = {
  //   height: '390',
  //   width: '640',
  //   playerVars: {
  //     // Các tham số của video YouTube
  //     autoplay: 0, // Không tự động phát video
  //   },
  // };
  const videoId = 'lxsIioVYPpg';

  return (
    <div className='video'>
    {!show?(
      <button className='play' onClick={showVideo}><CaretRightOutlined  className='CaretRightOutlined'/></button>
    ):(
      <div className='content'>
          <button className='close' onClick={showVideo}><CloseCircleOutlined /></button>
          <YouTube videoId={videoId}  className='videoo'/>
        </div>
    )}
    </div>
  )
}
