import './projects.scss'
import { AiOutlineRobot,AiFillBulb } from "react-icons/ai";
import ProjectData from './ProjectData';
import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function Projects() {
  const [data,setData] = useState(ProjectData);
  
  
 
  return (
    <div className="projects" id="Projects">
      <div className="content">

        <div className="icon"><AiOutlineRobot/></div>
        
        <div className="title">Projects</div>

        {
          data.map((data,i)=>{
            return <div className="text" key={i}>
            <div className="text_title">
              <h1>{data.title}</h1>
              <h2>제작기간 : {data.date}</h2>
            </div>

            <div className="text_content">
              <div className="left">
                <img src={"https://sangboking.github.io/portfolio/img/PJ"+(i+1)+".png"} alt="" />
              </div>
              <div className="right">
                <div className="right_text">
                  <h1>{data.content}</h1>
                  {data.content2} 
                </div>

                <div className="skill">
                  <div className="skill_name">
                  <AiFillBulb/>기능 
                  </div>
                  <div className="skill_content">
                      {data.function}
                  </div>
                </div>

                <div className="skill">
                  <div className="skill_name">
                  <AiFillBulb/>Git hub 
                  </div>
                  <div className="skill_content">
                    <a href={data.githubad} target="_blank">{data.github}</a>
                  </div>
                </div>

                <div className="skill">
                  <div className="skill_name">
                  <AiFillBulb/>주소 
                  </div>
                  <div className="skill_content">
                    <a href={data.pagead} target="_blank">{data.page}</a>
                  </div>
                </div>

                <div className="skill">
                  <div className="skill_name">
                  <AiFillBulb/>기술
                  </div>
                  <div className="skill_content">
                    {data.skill}
                  </div>
                </div>            
              </div>
            </div> 
          </div>
          })
          
        }

        
      
      </div>


       
    </div>
  )
}
