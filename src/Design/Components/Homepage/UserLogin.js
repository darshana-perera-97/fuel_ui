import React from "react";

export default function UserLogin() {
  return (
    <div style={{ padding: "50px 0px" }}>
      <p className="title1">Login for the system</p>
      <p className="title2">~ as a user</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p className="leftPara" style={{ padding: "1% 0px" }}>
            Register for the system for the fuel request <br />
            for the best experienc of the
            <br />
            sample text
            <br />
          </p>
          <a href="/">
            <button className="largeButton">Go to Login</button>
          </a>
        </div>
        <div className="sideShadowBox">
          <p className="title3 tcenter">Login for System</p>
          <div style={{ display: "flex",marginLeft:"20px" }}>
            <div>
              <p className="fieldName">Input Mobile Number</p>
              <div style={{ display: "flex" }}>
                <input
                  placeholder="+94 7X XX XX XXX"
                  className="contactNoInputBox"
                />
                <div>
                  <a href="/">
                    <button className="otpButton">Continue</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
