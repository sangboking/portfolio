import { textAlign } from '@mui/system';
import { useEffect, useState } from 'react';
import './intro.scss';


export default function Intro() {
  
  const txt = '웹 프론트엔드 개발자';
  const txt2 = '포트폴리오';
  const [Text, setText] = useState('');
  const [Text2, setText2] = useState('');
  const [Count, setCount] = useState(0);
  const [Count2, setCount2] = useState(0);

    
  
  useEffect(()=>{
    const interval = setInterval(()=>{
      setText(Text + txt[Count]);
      setCount(Count + 1);
    },150);
    if(Count === txt.length){
      clearInterval(interval);
    }
    return()=> clearInterval(interval);
  })

  useEffect(()=>{
    const interval = setInterval(()=>{
      setText2(Text2 + txt2[Count2]);
      setCount2(Count2 + 1);
    },150);
    if(Count2 === txt2.length){
      clearInterval(interval);
    }
    return()=> clearInterval(interval);
  })
  
  return (
    <div className="intro" id="Intro">
      <div className="content">
        
        <div className="top">
          <h1>{Text} <br/>{Text2}</h1>
          <hr className="line" />
        </div>

        <hr className="line" />
        
        <div className="text">
          안녕하십니까 <br/> 프론트엔드 공부가 취미인<br/>박상훈 이라고 합니다. 
        </div>

        <div className="button">
          <button><a href="#Aboutme">알아보기 ↓ </a></button>
        </div>
      </div>
    </div>
  )
}
