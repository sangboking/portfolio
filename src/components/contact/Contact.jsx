import "./contact.scss"
import { AiFillGithub,AiFillInstagram,AiFillFacebook,AiFillMail} from "react-icons/ai";
import { FaBloggerB } from "react-icons/fa";
export default function Contact() {
  return (
    <div className="contact" id="Contact">
      <div className="content">
        <div className="git">
          <a href="https://github.com/sangboking" target='_blank'><AiFillGithub/></a>
        </div>

        <div className="instar">
          <a href="https://www.instagram.com/ssanghoons/?hl=ko" target='_blank'><AiFillInstagram/></a>
        </div>

        <div className="facebook">
          <a href="https://www.facebook.com/profile.php?id=100005739102512" target='_blank'><AiFillFacebook/></a>
        </div>

        <div className="mail">
          <a href="mailto:cowg001@naver.com" target='_blank'><AiFillMail/></a>
        </div>

        <div className="blog">
          <a href="https://sanghoonfrontend.tistory.com/" target='_blank'><FaBloggerB/></a>
        </div>

      </div>
      <div className="text">
        Copyright @ 2021 By PSH.
      </div>
    </div>
  )
}
