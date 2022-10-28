import disease from "../data.js";
import "./hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <h1>Summary</h1>
      <ul>
        <a href="#what">
          <li>What is {disease.title}?</li>
        </a>
        <a href="#symptoms">
          <li>Symptoms</li>
        </a>

        <a href="#reasons">
          <li>Reasons</li>
        </a>

        <a href="#treatments">
          <li>Cure</li>
        </a>

        <a href="#eat">
          <li>What to eat</li>
        </a>

        <a href="#hospital">
          <li>Hospitals</li>
        </a>
      </ul>
    </div>
  );
}
