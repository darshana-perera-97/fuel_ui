import React from "react";
import main_image from "../Assets/main_image.png";

export default function UserRegister() {
  return (
    <div className="">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p className="title1">Welcome to </p>
          <p className="title4">Fuel Request system</p>
          <p className="title2">Quick view</p>
          <div>
            <p className="leftPara" style={{ padding: "1% 0px" }}>
              Register for the system for the fuel request <br />
              for the best experienc of the
              <br />
              sample text
              <br />
            </p>
            <a href="/register">
              <button className="largeButton">Get Register</button>
            </a>
          </div>
        </div>
        <div>
        
          <img src={main_image} alt="main image will be here" />
        </div>
      </div>
    </div>
  );
}
