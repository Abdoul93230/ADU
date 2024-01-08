import { QrReader } from "react-qr-reader";
import { useState } from "react";

const Test = (props) => {
  const [data, setData] = useState("No result");

  const handleScan = (result) => {
    if (!!result) {
      setData(result);
    }
  };

  const handleError = (error) => {
    console.info(error);
  };

  return (
    <>
      <QrReader
        onScan={handleScan}
        onError={handleError}
        style={{ width: "100%" }}
      />
      <p>{data}</p>
    </>
  );
};

export default Test;
