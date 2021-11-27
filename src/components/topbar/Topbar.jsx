/* eslint-disable */
import React, { useState, useEffect } from "react";
import './topbar.scss';
import { MdList,MdClose } from "react-icons/md";




export default function Topbar(props) {
  let [scroll,setScroll] = useState(0);
  let updateScroll = ()=>{
    setScroll(window.pageYOffset || document.documentElement.scrollTop);
  }
  useEffect(()=>{
    window.addEventListener('scroll', updateScroll);
  });

  return (
    <header className={scroll < 100 ? "topbar" : "change_topbar"}>
      
      <div className="name">
        <a href="#Intro">PSH's Portfolio</a>
      </div>
          
      <nav className={"navbar " + ( props.menuOpen &&  "active")} >
        <div className="close" onClick={()=>{props.setmenuOpen(!props.menuOpen)}}><MdClose/></div>
        <a href="#Intro" ></a>
        <a href="#Aboutme">About Me</a>
        <a href="#Skills">Skills</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>
      </nav>

      <div className="icons"  onClick={()=>{props.setmenuOpen(!props.menuOpen)}}>
        <div className="menu"><MdList/></div>
      </div>


      
    </header>
  )
}





