/* eslint-disable */
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Aboutme from './components/aboutme/Aboutme';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import './all.scss'
import "./app.scss";
import { useEffect, useState } from 'react';
import { FiArrowUp } from "react-icons/fi";


function App() {
  let [menuOpen,setmenuOpen] = useState(false);
  let [scroll,setScroll] = useState(0);
  let updateScroll = () => {
    setScroll(window.pageYOffset);
  }
  const gotop = () =>{
    window.scrollTo({top:0,behavior:"smooth"});
  }
  useEffect(()=>{
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll)}
   })

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
      <Intro/>
      <Aboutme/>
      <Skills/>
      <Projects/>
      <Contact/>
      <div className={scroll > 200 ?"buttonok" : "buttonno"}>
        <button className="up" onClick={gotop}><FiArrowUp className="arrow"/></button>
      </div>
    </div>
  );
}

export default App;
