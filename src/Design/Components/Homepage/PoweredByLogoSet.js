import React from "react";
import fuel_logo from "../Assets/fuel_logos.png";

export default function PoweredByLogoSet() {
  return (
    <div style={{ dislplay: "flex", justifyContent: "center" }}>
      <img src={fuel_logo} alt="Fuel provider logo set" height="80px" style={{margin:"0 44%"}}/>
    </div>
  );
}
