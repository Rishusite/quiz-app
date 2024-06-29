import React, { useEffect, useRef } from "react";
import bgmVideo from './Intro assests/bgvideo.mov';
import './App.css';
import Loginform from "./components/Loginform";


//import sound from "./Intro assests/mainMusic.mp3"
export default function App() {
  const videoEl = useRef(null);

  useEffect(() => {
    videoEl.current.play().catch(error => {
      console.error("Error attempting to play", error);
    });
  }, []);

  return (
    <div className="App">
      <video
        loop
        muted
        alt="All the devices"
        src={bgmVideo}
        ref={videoEl}
      />
      <Loginform/>
    </div>
  );
}
