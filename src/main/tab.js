import disease from "../data.js";
import "./tab.css";
import React, { useState } from "react";

export default function Boxes() {
  const [tab, setTab] = useState(1);
  const toggleTab = (i) => {
    setTab(i);
  };
  return (
    <section className="section-tab" id="section6">
      <h1>Symptoms</h1>
      <div className="tabs">
        <div className="tab-container">
          <button
            className={tab === 1 ? "btn tab--1 tab--active" : "btn tab tab--1"}
            onClick={() => toggleTab(1)}
          >
            Type 1 Diabetes
          </button>
          <button
            className={tab === 2 ? "btn tab--2 tab--active" : "btn tab tab--2"}
            onClick={() => toggleTab(2)}
          >
            Type 2 Diabetes
          </button>
          <button
            className={tab === 3 ? "btn tab--3 tab--active" : "btn tab tab--3"}
            onClick={() => toggleTab(3)}
          >
            Gestational Diabetes
          </button>
        </div>
        <div className={tab === 1 ? "tab__content--active" : "tab__content "}>
          <p>{disease.symptoms.Type1Diabetes}</p>
        </div>

        <div className={tab === 2 ? "tab__content--active" : "tab__content "}>
          <p>{disease.symptoms.Type2Diabetes}</p>
        </div>
        <div className={tab === 3 ? "tab__content--active" : "tab__content "}>
          <p>{disease.symptoms.GestationalDiabetes}</p>
        </div>
      </div>
    </section>
  );
}
