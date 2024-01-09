import React from "react";
import "./Hom.css";
import img1 from "./images/i4.png";
import img2 from "./images/i7.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigue = useNavigate();
  return (
    <div className="Home">
      <div className="un">
        <img src={img1} alt="image" />
      </div>
      <div className="deux">
        <h1>ILIMI HIKE</h1>
        <h4>Pass Verification Platforme</h4>
      </div>
      <div className="trois">
        <img src={img2} alt="loading" />
        <button onClick={() => navigue("/scanne")}>Continue</button>
        <p>Continue</p>
      </div>
    </div>
  );
}

export default Home;
