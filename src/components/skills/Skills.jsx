import './skills.scss'
import { AiOutlineMeh } from "react-icons/ai";

export default function Skills() {
  let arr = [1,2,3,4,5,6,7,8]
  return (
    <div className="skills" id="Skills"> 
      <div className="content">
        <div className="icon">
          <AiOutlineMeh/>
        </div>
        
        <div className="title">
           Skills
        </div>

        <div className="wrap">
          <h1 className='wrap_title'>Front-end</h1>
          <div className="text">
            {
              arr.map((a,i)=>{
                return(
                  <div key ={i} className="hsj">
                    <img src={"https://sangboking.github.io/portfolio/img/사진"+(i+1)+".png"}/>
                  </div>
                )
              })
            }
          </div>
        </div>
        
      </div> 
      
    </div>
  )
}
