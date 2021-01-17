import React, { useState } from "react";
import history from "../../history";
import "./Style.css";
import jkhomes from "../../images/jkhomes8.png";

export default function Navigation() {
  const [click, setclick] = useState(true);
  return (
    <div className="navigation-main">
      <div className="navigation">
        <img className="logo" src={jkhomes} alt="" />
        <div className="navContainer">
          <ul className={click ? "ulnavContainer" : "ulnavContainermob"}>
            <li className="navitems " onClick={() => history.push("/")}>
              Home
            </li>

            <li className="navitems " onClick={() => history.push("/Contact")}>
              Contact
            </li>
          </ul>
        </div>
        <i
          className={click ? "fa fa-bars fa-lg" : "fa fa-times fa-lg"}
          onClick={() => setclick(!click)}
        ></i>
      </div>
    </div>
  );
}
