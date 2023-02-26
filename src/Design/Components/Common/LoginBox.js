import React from "react";
import userLogin from "./user-logn.png";

export default function LoginBox(prop) {
  return (
    <div className="shadowBoxCenter">
      <p className="title5 tcenter">{prop.title}</p>
      <img
        src={userLogin}
        alt="user login window"
        style={{ margin: "20px 40% ", width: "20%" }}
      />
      <div style={{ margin: "0px 25% " }}>
        <p style={{ margin: "0px", paddingLeft: "10px" }}>User Name</p>
        <input size="30" className="inputBox" />
        <p style={{ margin: "0px", paddingLeft: "10px" }}>Password</p>
        <input size="30" className="inputBox" maxLength="6" type="password" />
        <a href="/qrscan" style={{ textDecoration: "none" }}>
          <p className="btn2">Login</p>
        </a>
      </div>
    </div>
  );
}
