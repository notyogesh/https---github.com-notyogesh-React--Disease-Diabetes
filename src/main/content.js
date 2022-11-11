import disease from "../data.js";
import "./content.css";
import makeList from "./makaList.js";
import { useState } from "react";
import fruits from "../images/fruits.jpeg";

export default function Content() {
  const [page, setPage] = useState(1);

  const pageRight = (i) =>
    page < 5 ? setPage((prev) => prev + i) : setPage(1);
  const pageLeft = (i) => (page > 1 ? setPage((prev) => prev - i) : setPage(5));
  const symptoms = makeList(disease.symptoms.basic);
  const treatment = makeList(disease.treatments);
  const whatToEat = makeList(disease.what_to_eat);

  return (
    <div>
      <div className="buttons">
        <button className="pagebuttons" onClick={() => pageLeft(1)}>
          &#171;
        </button>

        <button className="displaybutton">{page}</button>
        <button className="pagebuttons" onClick={() => pageRight(1)}>
          &#187;
        </button>
      </div>
      <section
        className={page === 1 ? "section-active" : "section"}
        id="section1"
      >
        <h1>What is {disease.title} ?</h1>
        <p>{disease.what}</p>
      </section>
      <section
        className={page === 2 ? "section-active" : "section"}
        id="section2"
      >
        <h1>Reason</h1>
        <p className="list">{disease.reasons}</p>
      </section>
      <section
        className={page === 3 ? "section-active" : "section"}
        id="section3"
      >
        <h1>Common symptoms</h1>
        <p className="list">{symptoms}</p>
      </section>
      <section
        className={page === 4 ? "section-active" : "section"}
        id="section4"
      >
        <h1>Treatments</h1>
        <p className="list">{treatment}</p>
      </section>
      <section
        className={page === 5 ? "section-active" : "section"}
        id="section5"
      >
        <h1>whatToEat</h1>
        <section id="eat">
          <p>{whatToEat}</p>
          <img src={fruits} alt="fruits" />
        </section>
      </section>
    </div>
  );
}
