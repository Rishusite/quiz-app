import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = ({dataobj}) => {
  //console.log(dataobj);
  const user=dataobj.name;
  const navigate=useNavigate();
  return (
    <div className='relative z-20 w-full bg-black text-white text-[2vw] px-[1vw] py-[2vh]'>
      <div className='flex justify-between items-center'>
        <div>
          Welcome {user}
        </div>
        <div className='flex justify-end items-center gap-[1.5vw] pr-[0.8vw]'>
          <div className='cursor-pointer'>Home</div>
          <div className='cursor-pointer'>Profile</div>
          <div className='cursor-pointer'>Downloads</div>
          <div className='cursor-pointer'>Support</div>
          <div className='cursor-pointer' onClick={()=>{
            navigate('/');
          }}>Log out</div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar