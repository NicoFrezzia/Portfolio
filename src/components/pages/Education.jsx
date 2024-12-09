import byuiLogo from "../../assets/byui-logo.png";
import MtechLogo from "../../assets/mtech.png";
export default function Education() {
  return (
    <>
      <div className="section-divider animation-in">
      <hr className="section-divider-hr"></hr>
        <p>Education</p>
      <hr className="section-divider-hr"></hr>
      </div>
      <div className="education-container">
        <div className="education-container-left animation-in">
          <div className="school-top">
            <img src={byuiLogo} alt="Byui logo" />
            <p className="school-name">
              <a href="https://www.byui.edu/" target="_blank">
                Brigham Young University-Idaho
              </a>
            </p>
          </div>
          <div className="school-splitter">
            <p className="school-location">Rexburg, ID</p>
            <p className="expected-date">Graduating class 2028</p>
          </div>
          <ul>
            <li>Bachelor of Computer Science </li>
            <li>GPA: 4.00</li>
          </ul>
        </div>
        <div className="education-container-right animation-in">
          <div className="school-top">
            <img src={MtechLogo} alt="Mtech Logo" />
            <p className="school-name">
              <a href="https://mtec.edu/" target="_blank">
                {" "}
                Mountainland Technical College
              </a>
            </p>
          </div>
          <div className="school-splitter">
            <p className="school-location">Lehi, UT</p>
            <p className="expected-date">October 2021</p>
          </div>
          <ul>
            <li>Certificate in Web Development</li>
          </ul>
        </div>
      </div>
    </>
  );
}
