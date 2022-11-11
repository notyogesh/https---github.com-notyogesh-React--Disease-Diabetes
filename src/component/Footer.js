import "./footer.css";
import email from "../images/email.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";

export default function Footer() {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer">
      <p>Created and written By yogesh @{year}</p>
      <section className="icons">
        <a
          href="mailto:yogeshreo@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={email} alt="email" />
        </a>
        <a
          href="https://www.facebook.com/yoge.sh.5494"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="facebook" />
        </a>
        <a
          href="https://www.instagram.com/__._.__._.___.__._.__/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="instagram" />
        </a>
        <a
          href="linkedin.com/in/yogesh-wara-36134b247"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a
          href="https://twitter.com/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="twitter" />
        </a>
      </section>
    </div>
  );
}
