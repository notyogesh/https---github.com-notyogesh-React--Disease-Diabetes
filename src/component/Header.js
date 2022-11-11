import "./Header.css";
import nodiabetes from "../images/nodiabetes.jpeg";
import disease from "../data.js";
import checkBlood from "../images/diabetes1.png";

export default function Header() {
  return (
    <div className="header" id="header">
      <div className="header-content">
        <img className="nodiabetes-img" src={nodiabetes} alt="No diabetes" />
        <section>
          <h1>{disease.title}:</h1>
          <p>{disease.intro}</p>
          <img className="checkblood" src={checkBlood} alt="glucometer" />
        </section>
      </div>
    </div>
  );
}
