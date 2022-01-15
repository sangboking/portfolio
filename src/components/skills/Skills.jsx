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
                  <div className="hsj">
                    <img src={"https://sangboking.github.io/portfolio/img/사진"+(i+1)+".png"}/>
                  </div>
                )
              })
            }
          </div>
        </div>
        
        

        {/* <div className="text">
          
          <div className="hsj">
            <img src="https://sangboking.github.io/portfolio/img/사진1.png" alt="" />
          </div>

          <div className="scss">
            <img src="https://sangboking.github.io/portfolio/img/사진6.png" alt="" />
          </div>
            
          <div className="react">
            <img src="https://sangboking.github.io/portfolio/img/사진2.png" alt="" />
          </div>

          <div className="redux">
            <img src="https://sangboking.github.io/portfolio/img/사진3.png" alt="" />
          </div>

          <div className="git">
            <img src="https://sangboking.github.io/portfolio/img/사진4.png" alt="" />
          </div>

          <div className="github">
            <img src="https://sangboking.github.io/portfolio/img/사진5.png" alt="" />
          </div>


        </div> */}

      </div> 
      
    </div>
  )
}
