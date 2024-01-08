import React from "react";
import { useEffect, useState } from "react";

import { Html5QrcodeScanner } from "html5-qrcode";

import "./Test.css";

function Test() {
  const [scanResult, setScanResult] = useState();
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
    };

    const error = (err) => {
      console.log(err);
    };
    scanner.render(success, error);
  }, []);
  return (
    <div className="Qrcode">
      <h1>Pass Verification</h1>
      {scanResult ? (
        <div>
          Success : <a href={`https://${scanResult}`}>{scanResult}</a>
        </div>
      ) : (
        <div id="readr"></div>
      )}
    </div>
  );
}

export default Test;
