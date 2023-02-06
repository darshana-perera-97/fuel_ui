import React from "react";

export default function UserRegister() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <p className="title1">Welcome to </p>
        <p className="title1">Fuel Request system</p>
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
      <div>image</div>
    </div>
  );
}
