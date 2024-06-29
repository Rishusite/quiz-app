import React from 'react'
import axios from 'axios'
import { useState,useEffect,useRef } from 'react'
import {NavLink,useNavigate} from "react-router-dom";
import bgmVideo from 'F:/Quiz App/client/src/Intro assests/bgvideo.mov';

const Goback = ({uid,score}) => {
  const videoEl = useRef(null);
  const navigate= useNavigate();
  useEffect(() => {
    videoEl.current.play().catch(error => {
      console.error("Error attempting to play", error);
    });
  }, []);
  return (
    <div>
      <video
        loop
        muted
        alt="All the devices"
        src={bgmVideo}
        ref={videoEl}
        className='w-full h-full z-10'
      />
      <div className='absolute top-5 z-20 text-white text-[2vw]'>
        Your Score Was {score}/10 
      </div>
      <button onClick={()=>{
        navigate(`/userhandle/${uid}`);
      }} className='absolute top-20 z-20 text-white text-[2vw]'>Move To Home</button>
    </div>
  )
}

export default Goback