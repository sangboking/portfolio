import './intro.scss';


export default function Intro() {
  return (
    <div className="intro" id="Intro">
      <div className="content">
        
        <div className="top">
          <h1>웹 프론트엔드 개발자 <br/>포트폴리오</h1>
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
