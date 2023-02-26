import React from "react";

export default function User() {
  return (
    <div className="page">
      <p className="title3 tcenter">Vehicle No</p>
      <p className="title2 tcenter">NW BCG 2072</p>
      <div className="sideShadowBoxfull">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <p className="fieldText">Field 01 : - </p>
            <p className="fieldText">Field 01 : - </p>
            <p className="fieldText">Field 01 : - </p>
            <p className="fieldText">Field 01 : - </p>
          </div>
          <div>
            <p className="fieldText">Field 01 : - </p>
            <p className="fieldText">Field 01 : - </p>
            <p className="fieldText">Field 01 : - </p>
            <p className="fieldText">Field 01 : - </p>
          </div>
        </div>
      </div>
      <a href="/qrscanview" style={{ textDecoration: "none" }}>
        <p className="btn2">View QR Code</p>
      </a>
    </div>
  );
}
