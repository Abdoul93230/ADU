import React, { useEffect, useState } from "react";
import "./Hom.css";
import img1 from "./images/i1.jpg";
import img2 from "./images/i7.png";
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "./LoadingIndicator";
import axios from "axios";

function Home() {
  const navigue = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://randback.onrender.com")
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        alert("echeck de connection au serveur.");
      });
  }, []);
  return (
    <LoadingIndicator loading={loading}>
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
    </LoadingIndicator>
  );
}

export default Home;
