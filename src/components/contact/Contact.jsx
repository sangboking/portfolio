import "./contact.scss"
import { AiFillGithub,AiFillInstagram,AiFillFacebook } from "react-icons/ai";

export default function Contact() {
  return (
    <div className="contact" id="Contact">
      <div className="content">
        <div className="git">
          <a href="https://github.com/sangboking"><AiFillGithub/></a>
        </div>

        <div className="instar">
          <a href="https://www.instagram.com/ssanghoons/?hl=ko"><AiFillInstagram/></a>
        </div>

        <div className="facebook">
          <a href="https://www.facebook.com/profile.php?id=100005739102512"><AiFillFacebook/></a>
        </div>
      </div>
      <div className="text">
        Copyright @ 2021 By PSH.
      </div>
    </div>
  )
}
