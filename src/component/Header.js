import "./Header.css";
import disease from "../data.js";

export default function Header() {
  return (
    <div className="header">
      <h1>{disease.title}</h1>
    </div>
  );
}
