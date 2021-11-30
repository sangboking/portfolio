import './projects.scss'
import { AiOutlineRobot,AiFillBulb } from "react-icons/ai";

export default function Projects() {
  return (
    <div className="projects" id="Projects">
      <div className="content">

        <div className="icon"><AiOutlineRobot/></div>
        
        <div className="title">Projects</div>

        {/* 스타벅스 */}
        <div className="text">
          <div className="text_title">
            <h1>StarBucks 클론코딩</h1>
            <h2>제작기간 : 2021.08월</h2>
          </div>

          <div className="text_content">
            <div className="left">
              <img src="https://sangboking.github.io/portfolio/img/사진7.png" alt="" />
            </div>
            <div className="right">
              <div className="right_text">
                <h1>첫 프론트엔드 개발을 시작하면서 만들어본 StarBucks 사이트입니다.</h1>
                Html,css,JavaScript 를 사용하여 제작하였습니다. Html을 처음 
                접해보면서 block 요소와 inline 요소를 공부하여 적용해보았고,
                다양한 태그들의 의미를생각하면서 사용했습니다. css는 가상요소들과 
                hover,다양한 애니메이션 효과 를 공부하여 적용하였습니다.JavaScript 
                에서는 슬라이더 효과는swiper.js, scroll.js 를 사용하여 제작했습니다.  
              </div>

              <div className="skill">
                <div className="skill_name">
                 <AiFillBulb/>기능 
                </div>
                <div className="skill_content">
                     슬라이더, Top 버튼, 애니메이션효과
                </div>
              </div>

              <div className="skill">
                <div className="skill_name">
                 <AiFillBulb/>Git hub 
                </div>
                <div className="skill_content">
                  <a href="https://github.com/sangboking/starbucks">
                    github.com/sangboking/starbucks</a>
                </div>
              </div>

              <div className="skill">
                <div className="skill_name">
                 <AiFillBulb/>주소 
                </div>
                <div className="skill_content">
                  <a href="https://frosty-goldwasser-d09f3d.netlify.app/">
                      frosty-goldwasser-d09f3d.netlify.app/
                  </a>
                </div>
              </div>

              <div className="skill">
                <div className="skill_name">
                 <AiFillBulb/>기술
                </div>
                <div className="skill_content">
                  Html, css, JavaScript
                </div>
              </div>            
            </div>
          </div> 
        </div>

        {/* Food Page */}
        <div className="text">
          <div className="text_title">
            <h1>Food Page</h1>
            <h2>제작기간 : 2021.10월</h2>
          </div>

          <div className="text_content">
            <div className="left">
              <img src="https://sangboking.github.io/portfolio/img/사진8.png" alt="" />
            </div>
            <div className="right">
              <div className="right_text">
                <h1>css 반응형을 중점적으로 두고 제작하였습니다.</h1>
                미디어 쿼리를 처음 사용해보면서 반응형 웹페이지를 중점적으로
                제작하였습니다. Grid 형태의 레이아웃을 통해 제작하였고 애니메이션효과
                를 적용하였습니다. JavaScript 에서는 swiper.js를 사용하였습니다.
              </div>

              <div className="skill">
                <div className="skill_name">
                 <AiFillBulb/>기능 
                </div>
                <div className="skill_content">
                     슬라이더, 반응형웹
                </div>
              </div>

              <div className="skill">
                <div className="skill_name">
                 <AiFillBulb/>Git hub 
                </div>
                <div className="skill_content">
                  <a href="https://github.com/sangboking/Food-page">
                  github.com/sangboking/Food-page</a>
                </div>
              </div>

              <div className="skill">
                <div className="skill_name">
                 <AiFillBulb/>주소 
                </div>
                <div className="skill_content">
                  <a href="https://focused-swanson-205029.netlify.app">
                  focused-swanson-205029.netlify.app
                  </a>
                </div>
              </div>

              <div className="skill">
                <div className="skill_name">
                 <AiFillBulb/>기술
                </div>
                <div className="skill_content">
                  Html, css, JavaScript
                </div>
              </div>
            </div>
          </div> 
        </div>

        {/* 리액트쇼핑몰 */}
        <div className="text">
          <div className="text_title">
            <h1>React 쇼핑몰</h1>
            <h2>제작기간 : 2021.11월</h2>
          </div>

          <div className="text_content">
            <div className="left">
              <img src="https://sangboking.github.io/portfolio/img/사진9.png" alt="" />
            </div>
            <div className="right">
              <div className="right_text">
                <h1>React를 사용하여 제작한 간단한 기능의 쇼핑몰입니다</h1>
                React를 처음 사용하면서 제작한 React.js 기반의 웹사이트입니다.
                React의 기본적인 기능을 사용하여 구현하였습니다. props의 불편한
                점을 해소하기 위하여 Redux를 공부하여 적용해 보았습니다.
              </div>

              <div className="skill">
                <div className="skill_name">
                 <AiFillBulb/>기능 
                </div>
                <div className="skill_content">
                     주문기능, 수량증감, 모달창
                </div>
              </div>

              <div className="skill">
                <div className="skill_name">
                 <AiFillBulb/>Git hub 
                </div>
                <div className="skill_content">
                  <a href="https://github.com/sangboking/sangboking.github.io">
                  github.com/sangboking/sangboking.github.io</a>
                </div>
              </div>

              <div className="skill">
                <div className="skill_name">
                 <AiFillBulb/>주소 
                </div>
                <div className="skill_content">
                  <a href="https://sangboking.github.io/#/">
                 sangboking.github.io/#/
                  </a>
                </div>
              </div>

              <div className="skill">
                <div className="skill_name">
                 <AiFillBulb/>기술
                </div>
                <div className="skill_content">
                  React, Redux, Scss
                </div>
              </div>
            </div>
          </div> 
        </div>

        {/* 포트폴리오 */}
        <div className="text">
          <div className="text_title">
            <h1>포트폴리오 웹사이트</h1>
            <h2>제작기간 : 2021.11월</h2>
          </div>

          <div className="text_content">
            <div className="left">
              <img src="https://sangboking.github.io/portfolio/img/사진10.png" alt="" />
            </div>
            <div className="right">
              <div className="right_text">
                <h1>React를 사용하여 제작한 포트폴로 입니다.</h1>
                React 를 사용하여 section 을 components로 나누어 제작하였습니다.
              </div>

              <div className="skill">
                <div className="skill_name">
                 <AiFillBulb/>기능 
                </div>
                <div className="skill_content">
                     스크롤다운시 헤더변경, Totop버튼, Intro타이핑 효과
                </div>
              </div>

              <div className="skill">
                <div className="skill_name">
                 <AiFillBulb/>Git hub 
                </div>
                <div className="skill_content">
                  <a href="https://github.com/sangboking/portfolio">
                  github.com/sangboking/portfolio</a>
                </div>
              </div>

              <div className="skill">
                <div className="skill_name">
                 <AiFillBulb/>주소 
                </div>
                <div className="skill_content">
                  <a href="https://sangboking.github.io/portfolio/">
                  sangboking.github.io/portfolio/
                  </a>
                </div>
              </div>

              <div className="skill">
                <div className="skill_name">
                 <AiFillBulb/>기술
                </div>
                <div className="skill_content">
                  React, Scss
                </div>
              </div>
            </div>
          </div> 
        </div>



      
      
      </div>


      
      
    </div>
  )
}
