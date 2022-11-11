import disease from "../data.js";
import "./table.css";
import { useState } from "react";

export default function Table() {
  const [items, setItems] = useState("");

  function onChange(e) {
    setItems(e.target.value);
  }

  return (
    <div id="section7">
      <input
        onChange={onChange}
        type="search"
        placeholder="search for a hospital..."
        className="tableinput"
      />

      <table className="table">
        <tr>
          <th>Govt</th>
          <th>Private</th>
        </tr>

        <tr>
          <td>
            <ol>
              {disease.hospital.government
                .filter((item) => item.toLowerCase().includes(items))
                .map((li, i) => (
                  <li key={i}>{li} </li>
                ))}
            </ol>
          </td>
          <td>
            <ol>
              {" "}
              {disease.hospital.private
                .filter((item) => item.toLowerCase().includes(items))
                .map((li, i) => (
                  <li key={i}>{li} </li>
                ))}
            </ol>
          </td>
        </tr>
      </table>
    </div>
  );
}
