import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import "animate.css";
import Photo from "../../assets/headshot.png"


export default function Home(){

    return(
        <>
            <div className="fade-out1">
                <div className="headshot-container">
                    <img src={Photo} alt="My Photo" className="headshot"/>
                </div>
                <div className="home-hero animate__animated animate__fadeinup">
                    <p className="home-title"> Computer Science Major </p>
                    <p className="home-description">My name is Nicholas Frezzia, I am currently attending Brigham Young Universiy - Idaho.
                    I&apos;m persuing a degree in Computer Programming. I collaborate with others to help build appealing and 
                    responsive web pages.</p>
                </div>
            </div>
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
        </>
    )
}