import "./footer.css";
import email from "../images/email.png";
export default function Footer() {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer">
      <small>Created and written By yogesh @{year}</small>
      <a href="mailto:yogeshreo@gmail.com">
        <img src={email} alt="email" />
        contact
      </a>
    </div>
  );
}
