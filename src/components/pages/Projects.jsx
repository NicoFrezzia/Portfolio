import SecurityCamera from "../../assets/securty camera.png"
import RizzlrDesktop from "../../assets/Rizzlr_Desktop.png"
import iGEM from "../../assets/iGEM.png"
import Pokedex from "../../assets/Pokedex.png"




export default function Projects(){

    return(
        <>
            <div className="section-divider animation-in">
                <hr className="section-divider-hr"></hr>
                    <p>Projects</p>
                <hr className="section-divider-hr"></hr>
            </div>
            <div className="projects-container">
                <div className="project-container animation-in">
                    <div className="project-container-top">
                        <div className="image-container image-container-1" >
                            <a href="https://github.com/NicoFrezzia/Security-Camera" target="_blank"><img src={SecurityCamera} alt="project image" className="project-image-desktop project-1"/> 
                            <div className="project-title">Python Security Camera</div></a>
                        </div>
                        <p className="project-descrtiption">This program uses Python and OpenCV to capture video, detect faces and bodies in real time, and automatically record when motion is detected. The video is saved with a timestamp, and the recording stops after a few seconds of no detection. The user can stop the process by pressing &apos;q&apos;.</p>
                    </div>
                    <div className="tech-container">
                        <p>Python</p>
                        <p>OpenCV</p>
                        <p>DateTime</p>
                        <p>Time Module</p>
                        <p>Haar Cascade Classifiers</p>
                        <p>File Management</p>
                    </div>
                </div>
                <div className="project-container animation-in">
                    <div className="project-container-top">
                        <div className="image-container image-container-2"><img src={RizzlrDesktop} alt="project image" className="project-image-desktop project-2"/>
                            <div className="project-title">Rizzlr</div>
                        </div>
                        <p className="project-descrtiption">Rizzlr is a mobile app built with React.js, Tailwind CSS, JSX, JavaScript, HTML, Pods, Metro, and Expo Router. I created the onboarding process, designing a smooth flow that helps new users get started and personalize their experience while ensuring a fast, responsive, and dynamic interface.</p>
                    </div>
                    <div className="tech-container">
                        <p>React.js</p>
                        <p>Tailwind</p>
                        <p>JSX</p>
                        <p>JavaScript</p>
                        <p>HTML</p>
                        <p>Pods</p>
                        <p>Metro</p>
                        <p>Expo-router</p>
                    </div>
                </div>
                <div className="project-container animation-in">
                    <div className="project-container-top">
                        <div className="image-container image-container-3">
                            <a href="https://2024.igem.wiki/uvu-utah-2/index.html" target="_blank"><img src={iGEM} alt="project image" className="project-image-desktop project-3"/>
                            <div className="project-title">iGEM - Bloom Busters</div></a>
                        </div>
                        <p className="project-descrtiption">I helped create a website for a medical conference in Paris that won a silver award. The site was built using HTML and CSS, with a focus on providing an intuitive and professional design that supported the event&apos;s content and user engagement.</p>
                    </div>
                    <div className="tech-container">
                        <p>CSS</p>
                        <p>HTML</p>
                    </div>
                </div>
                <div className="project-container animation-in">
                    <div className="project-container-top">
                        <div className="image-container image-container-3">
                            <a href="https://nicofrezzia.github.io/Pokedex/" target="_blank"><img src={Pokedex} alt="project image" className="project-image-desktop project-4"/>
                            <div className="project-title">API Pokédex</div></a>
                        </div>
                        <p className="project-descrtiption">I created a Pokédex web page using the PokéAPI with HTML, CSS, and vanilla JavaScript. Users can browse a list of Pokémon, and the background color changes dynamically based on the selected Pokémon’s type. This project showcases my ability to work with APIs and create interactive, user-focused features.</p>
                    </div>
                    <div className="tech-container">
                        <p>JavaScript</p>
                        <p>Pokédex API</p>
                        <p>CSS</p>
                        <p>HTML</p>
                        <p>Vanilla</p>
                    </div>
                </div>
            </div>
        </>
    )
}
