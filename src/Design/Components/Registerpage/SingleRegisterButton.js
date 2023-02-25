import React from "react";
import user_icon from "../Assets/user_icon.png";
import filler_icon from "../Assets/filler_icon.png";
import admin_icon from "../Assets/admin_icon.png";

export default function SingleRegisterButton(prop) {
  const icns = [user_icon, filler_icon, admin_icon];
  return (
    <div className="singleRegisterShaddowBox">
      <a href={prop.link} style={{ textDecoration: "none", color: "#5733ad" }}>
        <img src={icns[prop.img]} alt=" user icons" height="110px" />
        <p>{prop.name}</p>
      </a>
    </div>
  );
}
