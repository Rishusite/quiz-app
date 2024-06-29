import React from 'react'
import axios from 'axios'
import { useState,useEffect,useRef } from 'react'
import bgmVideo from 'F:/Quiz App/client/src/Intro assests/bgvideo.mov';



const Battle = ({isover,setisover,uid,score,setScore,prompt}) => {
  const videoEl = useRef(null);
  const qn=useRef(0);
  useEffect(() => {
    videoEl.current.play().catch(error => {
      console.error("Error attempting to play", error);
    });
  }, []);

  const [data,setData]=useState({question: "",options: {a: "",b:"",c:"",d:""},correctAns: {x:"",y:""}});
  
  function getting(){
    axios.get(`http://localhost:8000/generateqs/${prompt}`).then((response)=>{
      let obj={question: response.data.question,options: response.data.options,correctAns: response.data.correctAns};
      setData(obj);
      setOver(1);
      qn.current=qn.current+1;
    }).catch((err)=>console.log('Some Error',err));
  };
  const [corr,setCorr]=useState(0);
  function checkans(opt){
    //console.log(data.correctAns.option);
    if(opt===data.correctAns.option){
      let z=score;
      z++;
      setScore(z);
      setCorr(0);
    }
    else{
      setCorr(-1);
      if(opt==='a'){
        button1.current.style.backgroundColor="red";
      }
      else if(opt==='b'){
        button2.current.style.backgroundColor="red";
      }
      else if(opt==='c'){
        button3.current.style.backgroundColor="red";
      }
      else if(opt==='d'){
        button4.current.style.backgroundColor="red";
      }
    }
    setOver(0);
  };

  function waiting(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        getting();
        resolve(200);
      },10000);
    }) 
  };
  async function play(){
      getting();
      await waiting();
      await waiting();
      await waiting();
      await waiting();
      await waiting();
      await waiting();
      await waiting();
      await waiting();
      await waiting();
      await waiting();
      await waiting();
      await waiting();
      await waiting();
      await waiting();
      await waiting();
      await waiting();
      await waiting();
      await waiting();
      await waiting();
  }

  const [over,setOver]=useState(-1);

  const button1=useRef(null);
  const button2=useRef(null);
  const button3=useRef(null);
  const button4=useRef(null);

  let overcss='';
  if(over===0){
    overcss='absolute z-20 w-screen h-screen bg-transparent';
  }
  else{
    overcss='absolute z-0 w-screen h-screen bg-transparent';
  }
  
  if(over===0){
    let opt=data.correctAns.option;
    if(opt==='a'){
      button1.current.style.backgroundColor="green";
    }
    else if(opt==='b'){
      button2.current.style.backgroundColor="green";
    }
    else if(opt==='c'){
      button3.current.style.backgroundColor="green";
    }
    else if(opt==='d'){
      button4.current.style.backgroundColor="green";
    }
  }
  else if(over===1){
    button1.current.style.backgroundColor="";
    button2.current.style.backgroundColor="";
    button3.current.style.backgroundColor="";
    button4.current.style.backgroundColor="";
  }
  if(qn.current===4){
    setisover(1);
  }
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
      <div className={overcss}></div>
      <div className='absolute z-20 text-white text-[1vw]'>Welcome {uid} </div>
      <div className='relative z-10 w-screen h-screen flex justify-center items-center'>
        
        <div className='bg-transparent rounded-xl backdrop-blur-3xl border border-white max-w-[85%] px-[1vw] py-[1vw]'>

          <div className="flex justify-center items-center ">
            <div className="text-white px-[1vw] text-[1.5vw] font-semibold">Question {qn.current} :</div>
            <div className="text-white text-[2vw]">{data.question}</div>
          </div>
          <div className="text-white text-[1vw] mt-[2vw] max-w-[60%] ">

            <button className="block border border-white px-[1vw] py-[1vw] rounded-xl mb-[1vw] cursor-pointer hover:bg-red-400 duration-300 active:bg-blue-700 " onClick={()=>checkans('a')} ref={button1}>Option A : {data.options.a}</button>

            <button className="block border border-white px-[1vw] py-[1vw] rounded-xl mb-[1vw] cursor-pointer hover:bg-red-400 duration-300 active:bg-blue-700 " onClick={()=>checkans('b')} ref={button2}>Option B : {data.options.b}</button>

            <button className="block border border-white px-[1vw] py-[1vw] rounded-xl mb-[1vw] cursor-pointer hover:bg-red-400 duration-300 active:bg-blue-700 " onClick={()=>checkans('c')} ref={button3}>Option C : {data.options.c}</button>

            <button className="block border border-white px-[1vw] py-[1vw] rounded-xl cursor-pointer hover:bg-red-400 duration-300 active:bg-blue-700 " onClick={()=>checkans('d')} ref={button4}>Option D : {data.options.d}</button>

          </div>
        </div>
      </div>
      <button className='absolute text-4xl text-white z-10 bottom-[2vw]' onClick={play}>Start Score: {score} </button>
      
    </div>
  )
}

export default Battle