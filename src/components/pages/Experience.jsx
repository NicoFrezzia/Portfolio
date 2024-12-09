import EngagexLogo from "../../assets/engagex.png";
import RizzlrLogo from "../../assets/RizzlrLogo.png";
import WebtomicR from "../../assets/WebtonicLogo.png";
import { IoLocationOutline } from "react-icons/io5";

export default function Experience() {
  return (
    <>
      <div className="section-divider animation-in">
      <hr className="section-divider-hr"></hr>
        <p>Experience</p>
      <hr className="section-divider-hr"></hr>
      </div>
      <div className="experience-content">
        <div className="experience-container animation-in">
          <div className="experience-top">
                <div className="experience-top-entry">
                    <img className="rizzlr-logo" src={RizzlrLogo} alt="Engagex Logo" />                
                </div>
                <div className="experience-top-entry">
                    <p className="experience-company">Rizzlr</p>                
                </div>
                <div className="experience-top-entry">
                    <p className="experience-title">Software Engineer Intern</p>                
                </div>
          </div>
          <hr />
          <div className="experience-middle">
            <div className="company-intro">
              Helping insurance agents grow revenue, boost sales, and build
              value through engagement programs.
            </div>
            <ul>
              <li>
                Designed and implemented an onboarding flow for AI mobile app
                users
              </li>
              <li>
                Managed user data input, storage, and personalization to improve
                AI interaction with users
              </li>
            </ul>
          </div>
          <div className="experience-bottom">
            <p className="experience-location">
              <IoLocationOutline className="location-icon" />
              Vineyard, UT
            </p>
            <p className="experience-time">
              October - <span>Current</span>
            </p>
          </div>
        </div>
        <div className="experience-container animation-in">
          <div className="experience-top">
                <div className="experience-top-entry">
                    <img className="Techtonic" src={WebtomicR} alt="Engagex Logo" />                
                </div>
                <div className="experience-top-entry">
                    <p className="experience-company">Webtonic</p>                
                </div>
                <div className="experience-top-entry">
                    <p className="experience-title">Web Developer</p>                
                </div>
          </div>
          <hr />
          <div className="experience-middle">
            <div className="company-intro">
              Developing dynamic websites tailored to meet each client&apos;s
              unique needs.
            </div>
            <ul>
              <li>
                Developed websites for clients, including medical conferences in
                Paris, using HTML/CSS
              </li>
              <li>
                Architected and built a new enterprise communication software
                from the ground up
              </li>
            </ul>
          </div>
          <div className="experience-bottom">
            <p className="experience-location">
              {" "}
              <IoLocationOutline className="location-icon" />
              Rexburg, ID
            </p>
            <p className="experience-time">
              July 2024 - <span>Current</span>
            </p>
          </div>
        </div>
        <div className="experience-container animation-in">
          <div className="experience-top">
                <div className="experience-top-entry">
                    <img src={EngagexLogo} alt="Engagex Logo" />                
                </div>
                <div className="experience-top-entry">
                    <p className="experience-company">EngageX</p>                
                </div>
                <div className="experience-top-entry">
                    <p className="experience-title">Sales Development Team Lead</p>                
                </div>
          </div>
          <hr />
          <div className="experience-middle">
            <div className="company-intro">
              Helping insurance agents grow revenue, boost sales, and build
              value through engagement programs.
            </div>
            <ul>
              <li>
                Managed and mentored a 30-person team, tracking performance to
                meet sales goals.
              </li>
              <li>
                Collaborated daily with the CEO and State Farm agents nationwide
                to align sales strategies.
              </li>
              <li>
                Boosted company-wide sales 20% during Q1 2022 through improved
                processes.
              </li>
            </ul>
          </div>
          <div className="experience-bottom">
            <p className="experience-location">
              {" "}
              <IoLocationOutline className="location-icon" />
              Provo, UT
            </p>
            <p className="experience-time">October 2021 - May 2022</p>
          </div>
        </div>
      </div>
    </>
  );
}
