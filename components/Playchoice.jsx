import React from 'react'
import { useNavigate } from 'react-router-dom';

const Playchoice = ({uid}) => {
  const navigate=useNavigate();
  return (
    <div className='absolute z-20 bottom-[35%] right-[5%] text-white text-[1.5vw] border border-white rounded-lg px-[1.5vw] py-[1vw]'>
      <div className='flex justify-center items-center mb-[2vw]'>
        <div>Choose Subject</div>
      </div>
      <div className='grid grid-cols-3 gap-[1vw]'>
        <div><button onClick={()=>{
          let prompt='current affairs'
          navigate(`/userhandle/play/${uid}/${prompt}`)
        }}>CA</button></div>

        <div><button onClick={()=>{
          let prompt='english'
          navigate(`/userhandle/play/${uid}/${prompt}`)
        }}>English</button></div>

        <div><button onClick={()=>{
          let prompt='biology'
          navigate(`/userhandle/play/${uid}/${prompt}`)
        }}>Biology</button></div>

        <div><button onClick={()=>{
          let prompt='physics'
          navigate(`/userhandle/play/${uid}/${prompt}`)
        }}>Physics</button></div>
        
        <div><button onClick={()=>{
          let prompt='chemistry'
          navigate(`/userhandle/play/${uid}/${prompt}`)
        }}>Chemistry</button></div>

        <div><button onClick={()=>{
          let prompt='geography'
          navigate(`/userhandle/play/${uid}/${prompt}`)
        }}>Geography</button></div>

        <div><button onClick={()=>{
          let prompt='polity'
          navigate(`/userhandle/play/${uid}/${prompt}`)
        }}>Polity</button></div>

        <div><button onClick={()=>{
          let prompt='history'
          navigate(`/userhandle/play/${uid}/${prompt}`)
        }}>History</button></div>

        <div><button onClick={()=>{
          let prompt='computers'
          navigate(`/userhandle/play/${uid}/${prompt}`)
        }}>computers</button></div>
      </div>
      
    </div>
  )
}

export default Playchoice