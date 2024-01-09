import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Importez Axios
import img1 from "./images/i3.png";
import img2 from "./images/i4.png";

import "./Test.css";

function Test() {
  const navigue = useNavigate();
  const [scanResult, setScanResult] = useState(null);
  const [message, setMessage] = useState("");

  const handleVerification = (res) => {
    // Envoyer une requête au serveur backend
    axios
      .post("https://randback.onrender.com/verification", { code: res })
      .then((response) => {
        // Traiter la réponse du serveur
        setMessage(response.data.message);
      })
      .catch((error) => {
        // Gérer les erreurs
        setMessage(
          `${error.response ? error.response.data.error : error.message}`
        );
        console.log(error);
      });
  };

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("readr", {
      qrbox: {
        width: 250,
        height: 250,
        borderColor: "#FF0000",
        borderRadius: 10,
      },
      fps: 5,
    });

    const success = (result) => {
      scanner.clear();
      setScanResult(result);
      handleVerification(result);
    };

    const error = (err) => {
      console.log(err);
    };

    scanner.render(success, error);

    return () => scanner.clear();
  }, []);

  const option =
    message === "Code valide. Accès accordé." ? (
      <div className="success">
        <div className="un">
          <img src={img2} alt="loading" />
        </div>
        <div className="deux">
          <h2>ACCeS AUTORISé</h2>
          <span>Code :</span>
          <h5>{scanResult}</h5>
        </div>
        <div className="trois">
          <button onClick={() => window.location.reload()}>
            CONTINUER A SCANNER
          </button>
        </div>
      </div>
    ) : message === "Ce code a deja ete utilise. Accès refusé." ? (
      <div className="err1">
        <div className="un">
          <img src={img1} alt="loading" />
        </div>
        <div className="deux">
          <h2>ACCeS NON AUTORISé</h2>
          <span>
            Ce ticket a déjà été utilisé
            <br /> code:{" "}
          </span>
          <h5>{scanResult}</h5>
        </div>
        <div className="trois">
          <button onClick={() => window.location.reload()}>
            Continuer a scanner
          </button>
        </div>
      </div>
    ) : message === "Code invalide" ? (
      <div className="err2">
        <div className="un">
          <img src={img1} alt="loading" />
        </div>
        <div className="deux">
          <h2>Pass Non Valide</h2>
          <span>
            Il n’y a aucun ticket avec ce code
            <br /> code:{" "}
          </span>
          <h5>{scanResult}</h5>
        </div>
        <div className="trois">
          <button onClick={() => window.location.reload()}>
            Continuer a scanner
          </button>
        </div>
      </div>
    ) : (
      ""
    );

  return (
    <div className="Qrcode">
      <h1>Pass Verification</h1>
      {message && (
        <>
          <div className="det">
            {/* {message} :{" "} */}
            {/* <a href={`https://${scanResult || "VCLkwrDJD9"}`}> */}
            {/* {scanResult || "VCLkwrDJD9"} */}
            {/* </a> */}
            {option}
          </div>
        </>
      )}
      {!scanResult ? <div id="readr"></div> : null}
    </div>
  );
}

export default Test;
