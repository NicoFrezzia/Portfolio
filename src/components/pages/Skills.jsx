import HTML from "../../assets/html.png"
import JSX from "../../assets/react.png"
import CSS3 from "../../assets/css3.png"
import Python from "../../assets/python.png"
import Figma from "../../assets/figma.png"
import GitHub from "../..//assets/github.png"
import Netlify from "../../assets/netlify.png"
import Tailwind from "../../assets/tailwind.png"
import Canva from "../../assets/canva.webp"

export default function Skills(){

    return(
        <>
        <div className="section-divider animation-in">
            <hr className="section-divider-hr"></hr>
             <p>Skills</p>
         <hr className="section-divider-hr"></hr>
        </div>
        <div className="skills-container">
            <div className="skill-container animation-in">
                <h1 className="skill-catergory">HTML</h1>
                <hr />
                <div className="skill-content">
                    <div className="skill">
                        <img src={HTML} alt="HTML5" />
                        <p className="skill-description">HTML5</p>
                    </div>
                    <div className="skill">
                        <img src={JSX} alt="JSX" />
                        <p className="skill-description">JSX</p>
                    </div>
                </div>
            </div>
            <div className="skill-container animation-in">
                <h1 className="skill-catergory">CSS</h1>
                <hr />
                <div className="skill-content">
                    <div className="skill">
                        <img src={CSS3} alt="CSS3" />
                        <p className="skill-description">CSS3</p>
                    </div>
                    <div className="skill">
                        <img src={Tailwind} alt="Tailwind" />
                        <p className="skill-description">Tailwind</p>
                    </div>
                </div>
            </div>
            <div className="skill-container animation-in">
                <h1 className="skill-catergory">Back end</h1>
                <hr />
                <div className="skill-content">
                    <div className="skill">
                        <img src={Python} alt="Python" />
                        <p className="skill-description">Python</p>
                    </div>
                    <div className="skill">
                        <img src={JSX} alt="Javascript" />
                        <p className="skill-description">JavaScript</p>
                    </div>
                </div>
            </div>
            <div className="skill-container animation-in">
                <h1 className="skill-catergory">Other</h1>
                <hr />
                <div className="skill-content">
                    <div className="skill">
                        <img src={GitHub} alt="Github" />
                        <p className="skill-description">GitHub</p>
                    </div>
                    <div className="skill">
                        <img src={Figma} alt="Figma" />
                        <p className="skill-description">Figma</p>
                    </div>
                    <div className="skill">
                        <img src={Netlify} alt="Netlify" />
                        <p className="skill-description">Netlify</p>
                    </div>
                    <div className="skill">
                        <img src={Canva} alt="Canva" />
                        <p className="skill-description">Canva</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}