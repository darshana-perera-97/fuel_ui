import React from "react";
import QRCode from "react-qr-code";

export default function ViewQRCode() {
  const t = Math.round(Math.random() * 100000);
  const value = t;
  return (
    <div>
      <div className="page">
        <p className="title1 tcenter">QR Code for NW BCG 2072</p>
        <p className="title6 tcenter">
          Here's the QR code OR Pass Code{" "}
          <span style={{ color: "#5733ad", opacity: "1.0" }}>
            &lt;QR.code&gt;
          </span>
        </p>
        <br />
        <p className="title2 tcenter">Pass Code : {t}</p>
        <br />
        <br />
        <p className="title1 tcenter">QR Code </p>
        <br />
        <div
          style={{
            height: "auto",
            maxWidth: 100,
            width: "100%",
            marginLeft: "40%",
            boxShadow: "5px 4px 7px #000000",
            // border: "5px solid black",
          }}
        >
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "200%", width: "200%" }}
            value={value}
            viewBox={`0 0 20 26`}
          />
        </div>
        <p className="title3 tcenter" style={{ marginTop: "5px" }}>
          {t}
        </p>
      </div>
    </div>
  );
}
