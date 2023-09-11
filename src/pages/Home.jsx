import React from "react";
import Navber from "../component/Navber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

function Home() {
  const rectangle = Array(6).fill().map((_, index) => (
    <div key={index} className="rectangle-h"></div>
  ));
  return (
    <div>
      <Navber />
      <div className="home-content">
      </div>
      <div className="home-container"></div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      {rectangle}
    </div>
  );
}


export default Home;
