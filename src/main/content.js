import disease from "../data.js";
import "./content.css";

export default function Content() {
  const symptoms = disease.symptoms.basic.map((li, i) => <li>{li}</li>);
  const treatment = disease.treatments.map((li) => <li>{li}</li>);
  const whatToEat = disease.what_to_eat.map((item) => <li>{item}</li>);
  const govt = disease.hospital.government.map((li) => <li>{li}</li>);
  const priv = disease.hospital.private.map((li) => <li>{li}</li>);
  return (
    <div className="content">
      <h1 id="what">What is {disease.title} ?</h1>
      <p>{disease.what}</p>
      <h1 id="symptoms">Symptoms</h1>
      <ul>{symptoms}</ul>
      <h2>Type 1 Diabetes</h2>
      <p>{disease.symptoms.Type1Diabetes}</p>
      <h2>Type 2 Diabetes</h2>
      <p>{disease.symptoms.Type2Diabetes}</p>
      <h2>Gestational Diabetes</h2>
      <p>{disease.symptoms.GestationalDiabetes}</p>
      <h1 id="reasons">Reasons</h1>
      <p>{disease.reasons}</p>
      <h1 id="treatments">Treatments</h1>
      <ul>{treatment}</ul>
      <h1 id="eat">What_to eat</h1>
      <ul>{whatToEat}</ul>
      <h1 id="hospital">Hospital</h1>
      <h2>Govt:</h2>
      <ul>
        <p>{govt}</p>
      </ul>
      <h2>Private:</h2>
      <ul>
        <p>{priv}</p>
      </ul>
    </div>
  );
}
