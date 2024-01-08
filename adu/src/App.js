import { useEffect, useState } from "react";
import "./App.css";
// import Test from "./Test";
import { Html5QrcodeScanner } from "html5-qrcode";

function App() {
  const [scanResult, setScanResult] = useState();

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
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
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Test /> */}qr
      {scanResult ? (
        <div>
          Success : <a href={`https://${scanResult}`}>{scanResult}</a>
        </div>
      ) : (
        <div id="reader"></div>
      )}
    </div>
  );
}

export default App;
