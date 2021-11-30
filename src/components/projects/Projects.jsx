import './projects.scss'
import { AiOutlineRobot } from "react-icons/ai";

export default function Projects() {
  return (
    <div className="projects" id="Projects">
      <div className="content">

        <div className="icon"><AiOutlineRobot/></div>
        
        <div className="title">Projects</div>

        <div className="text">
          <div className="text_title">
            <h1>StarBucks 클론코딩</h1>
            <h2>제작기간 : 2021.08</h2>
          </div>

          <div className="text_content">
            <div className="left">
              <img src="https://sangboking.github.io/portfolio/img/사진7.png" alt="" />
            </div>
            <div className="right">

            </div>
          </div> 
        </div>
      </div>
      
    </div>
  )
}
