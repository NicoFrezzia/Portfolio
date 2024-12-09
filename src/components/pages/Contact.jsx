import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";



export default function Contact() {
  return (
    <>
      <div className="section-divider animation-in">
      <hr className="section-divider-hr"></hr>
        <p>Contact</p>
      <hr className="section-divider-hr"></hr>
      </div>
      <div className="contact-container animition-in">
        <div className="contact-icon-container animation-in">
          <a href="mailto:frezzia1629@gmail.com">
            <MdEmail className="contact-icon" />
          </a>
          <p>
            {" "}
            <a href="mailto:frezzia1629@gmail.com">frezzia1629@gmail.com</a>
          </p>
        </div>
        <div className="contact-icon-container animation-in">
          <a href="https://github.com/NicoFrezzia" target="_blank">
            <FaGithub className="contact-icon" />
          </a>
          <p>
            <a href="https://github.com/NicoFrezzia" target="_blank">
              github.com/nicofrezzia
            </a>
          </p>
        </div>
        <div className="contact-icon-container animation-in-link">
          <a
            href="https://www.linkedin.com/in/nicholas-frezzia"
            target="_blank">
            <GrLinkedin className="contact-icon" />
          </a>
          <p>
            <a
              href="https://www.linkedin.com/in/nicholas-frezzia"
              target="_blank">
              linkedin.com/in/nicholas-frezzia
            </a>
          </p>
        </div>
        <div className="contact-icon-container animation-in-insta">
          <a href="https://www.instagram.com/nicofrezzia/" target="_blank">
            <AiFillInstagram className="contact-icon" />
          </a>
          <p>
            <a href="https://www.instagram.com/nicofrezzia/" target="_blank">
              instagram.com/nicofrezzia
            </a>
          </p>
        </div>
        <div className="contact-icon-container animation-in-fb">
          <a href="https://m.facebook.com/profile.php?id=100071865793671&__n=K" target="_blank">
          <FaFacebook className="contact-icon" />
          </a>
          <p>
            <a href="https://m.facebook.com/profile.php?id=100071865793671&__n=K" target="_blank">facebook.com/nicholas.frezzia</a>
          </p>
        </div>
        <div className="contact-icon-container">
          <a href="https://docs.google.com/document/d/1y4UKJ55OH-if1s1Yp5zEWhB9deuoUPB1A9m4cAP03NM/edit?usp=sharing" target="_blank"><IoDocumentText className="contact-icon"/></a>
          <p><a href="https://docs.google.com/document/d/1y4UKJ55OH-if1s1Yp5zEWhB9deuoUPB1A9m4cAP03NM/edit?usp=sharing" target="_blank">My Resume</a></p>
        </div>
      </div>
    </>
  );
}
