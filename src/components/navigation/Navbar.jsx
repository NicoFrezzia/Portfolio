import { Link } from 'react-router-dom';
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";



export default function Navbar (){
    const [navOpen, setNavOpen] = useState(false)

    return(
        <>
        <nav id="navigation">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <nav id="mobile-navigation">
            <div className="mobile-icon-containter"
                onClick={() => setNavOpen(!navOpen)}>
                {navOpen ? <IoMdClose className="close-icon"/>:<RxHamburgerMenu className="hamburger-icon"/>}
                </div>
            
            {navOpen && (<ul className="animate__animated animate__slideInDown">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>)}
        </nav>
        </>
    )
}