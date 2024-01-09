import React from "react";
import { useEffect, useState } from "react";

import { Html5QrcodeScanner } from "html5-qrcode";

import "./Test.css";
import Papa from "papaparse";
// import csv from "./files/final_tokens.csv";

function Test() {
  const [scanResult, setScanResult] = useState();
  const [message, setMessage] = useState("");
  // console.log(csv);
  const handleVerification = (res) => {
    // Charger le fichier CSV
    Papa.parse("/files/final_tokens.csv", {
      download: true,
      complete: (result) => {
        const codes = result.data;
        // console.log(codes);

        // Recherche du code dans le fichier CSV
        const codeExists = codes.some((row) => row.Token === res && row.Valide);

        if (codeExists) {
          // Mettre à jour le fichier CSV (changer l'attribut 'Valide' à false)
          const updatedCodes = codes.map((row) =>
            row.Token === res ? { ...row, Valide: false } : row
          );

          // Sauvegarder les modifications (ici, cela ne sauvegarde pas réellement le fichier CSV)
          console.log(updatedCodes);

          // Notifier que le code est valide
          setMessage("Code valide. Accès accordé.");
        } else {
          // Notifier que le code est invalide
          setMessage("Code invalide. Accès refusé.");
        }
      },
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
  }, []);
  return (
    <div className="Qrcode">
      <h1 onClick={() => handleVerification()}>Pass Verification</h1>
      {scanResult ? (
        <div>
          {message} : <a href={`https://${scanResult}`}>{scanResult}</a>
        </div>
      ) : (
        <div id="readr"></div>
      )}
    </div>
  );
}

export default Test;
