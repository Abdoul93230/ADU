import React from "react";
import "./Hom.css";
import img1 from "./images/i4.png";

function Home() {
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
        <button>Continue</button>
        <p>Continue</p>
      </div>
    </div>
  );
}

export default Home;
