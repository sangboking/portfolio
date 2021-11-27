import './aboutme.scss'
import { AiOutlineAliwangwang,AiOutlineUser
  ,AiOutlineSchedule,AiOutlineCompass,
  AiOutlinePhone,AiOutlineMail,AiOutlineForm} from "react-icons/ai";

export default function Aboutme() {
  return (
    <div className="aboutme" id="Aboutme">
      <div className="content">
        <div className="aboutme_title">
          <AiOutlineAliwangwang className="icon"/>
          <h1>About me</h1>
        </div>

        <div className="aboutme_content">
          <div className="name">
            <div className="icon"><AiOutlineUser/></div>
            <div className="title">이름
              <div className="t_name">박상훈</div>
            </div>
          </div>
          <div className="name">
            <div className="icon"><AiOutlineSchedule/></div>
            <div className="title">
              생년월일
              <div className="t_name">97.05.19</div>
            </div>
          </div>
          <div className="name">
            <div className="icon"><AiOutlineCompass/></div>
            <div className="title">주소지
              <div className="t_name">경기도 광명시 철산동</div>
            </div>
          </div>
          <div className="name">
            <div className="icon"><AiOutlinePhone/></div>
            <div className="title">
              연락처
              <div className="t_name">010-7240-0886</div>
            </div>
          </div>
          <div className="name">
            <div className="icon"><AiOutlineMail/></div>
            <div className="title">
              이메일
              <div className="t_name">cowg001@naver.com</div>
            </div>
          </div>
          <div className="name">
            <div className="icon"><AiOutlineForm/></div>
            <div className="title">학력
              <div className="t_name">호서대학교<br/>(컴퓨터공학과)</div>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}
