import React from "react";

export default function UserLogin() {
  const [otp, setOTP] = React.useState(false);
  return (
    <div className="page">
      <p className="title1 tcenter">User Login</p>
      <p className="title6 tcenter">
        All fuel requesting customers can login here.
      </p>
      <div style={{ padding: "5% 15%" }}>
        <p className="title5 tcenter" style={{ opacity: "1.0" }}>
          Enter Registed Mobile Number
        </p>
        <div
          style={{
            width: "50%",
            display: "flex",
            marginLeft: "20%",
            marginTop: "1%",
          }}
        >
          <input placeholder="+94 7X XX XX XXX" className="contactNoInputBox" />
          <button
            className="otpButton"
            onClick={() => {
              setOTP(true);
            }}
          >
            Continue
          </button>
        </div>
        <div style={{ padding: "4%" }}></div>

        {otp ? (
          <div>
            <p className="title5 tcenter" style={{ opacity: "1.0" }}>
              Enter the OTP sent to yor phone
            </p>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  padding: "30px 30%",
                }}
              >
                <div className="space"></div>
                <div className="space"></div>
                <div className="space"></div>
                <div className="space"></div>
                <div className="space"></div>
                <div className="space"></div>
              </div>
            </div>
            <p className="title7 tcenter">
              OTP will valied only for 5.00 mins
            </p>
            <div style={{ margin: "0 20% ", marginLeft: "234px" }}>
              <a href="/user">
                <button className="otpButton">System Login</button>
              </a>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
