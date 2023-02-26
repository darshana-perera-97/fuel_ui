import React from "react";
import QRCode from "react-qr-code";

export default function ViewQRCode() {
  const value = 20;
  return (
    <div>
      <div className="page">
        <div
          style={{
            height: "auto",
            maxWidth: 100,
            width: "100%",
            marginLeft:"40%"
          }}
        >
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "200%", width: "200%" }}
            value={value}
            viewBox={`0 0 20 26`}
          />
        </div>
      </div>
    </div>
  );
}
