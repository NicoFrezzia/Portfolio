import { HiChevronDoubleUp } from "react-icons/hi";
import { Link } from 'react-router-dom';



export default function Footer() {

    return (
        <>
            <div className="footer-container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/education">Education</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <button className="desktop-to-top"><a href="#navigation"><HiChevronDoubleUp className="to-top"/></a>
                </button>
                <button className="mobile-to-top"><a href="#mobile-navigation"><HiChevronDoubleUp className="to-top"/></a>
                </button>
            </div>
        </>
    )
}
