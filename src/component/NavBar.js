import "./navbar.css";
import menubar from "../images/menubar.png";
import healthcare from "../images/selfcare.png";
import { useState } from "react";

export default function NavBar() {
  const [active, setActive] = useState(false);
  function onClick() {
    setActive((prev) => !prev);
  }
  return (
    <nav className="nav">
      <ul>
        <div className="nav-home">
          <li>
            <a href="#header">
              <img src={healthcare} alt="home" />
              Home
            </a>
          </li>
        </div>

        <div className={active ? "nav-items active" : "nav-items"}>
          <li>
            <a href="#pages">Reasons</a>
          </li>
          <li>
            <a href="#section6">Symptoms</a>
          </li>
          <li>
            <a href="#pages">Treatments</a>
          </li>
          <li>
            <a href="#section7">Hospitals</a>
          </li>
          <li></li>
        </div>
        <a href="#home">
          <img
            src={menubar}
            alt="menubar"
            className="menubar"
            onClick={onClick}
          />
        </a>
      </ul>
    </nav>
  );
}
