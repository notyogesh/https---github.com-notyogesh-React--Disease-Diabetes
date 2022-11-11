import "./navbar.css";
import home from "../images/home.png";

export default function NavBar() {
  return (
    <div className="nav">
      <nav>
        <ul>
          <section className="nav-home">
            <li>
              <a href="#header">
                <img src={home} alt="home" />
                Home
              </a>
            </li>
          </section>
          <section className="nav-items">
            <li>
              <a href="#section1">Reasons</a>
            </li>
            <li>
              <a href="#section6">Symptoms</a>
            </li>
            <li>
              <a href="#section4">Treatments</a>
            </li>
            <li>
              <a href="#section7">Hospitals</a>
            </li>
          </section>
        </ul>
      </nav>
    </div>
  );
}
