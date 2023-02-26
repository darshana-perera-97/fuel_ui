import React from "react";
import TextField from "@mui/material/TextField";

export default function RegisterPage() {
  const [registed, setRegisted] = React.useState(false);
  return (
    <div className="page">
      <p className="title1 tcenter">Customer Registering</p>
      <p className="title6 tcenter">
        All fuel requesting customers should be registed here.
      </p>
      <div className="white-box">
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <TextField label="Vehicle Nick Name" variant="standard" />
          <TextField label="NIC Number" variant="standard" />
          <TextField label="Licene Number" variant="standard" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "10px",
          }}
        >
          <TextField label="Mobile Number" variant="standard" />
          <button
            className="smButton2"
            onClick={() => {
              window.alert("OTP sent to your mobile phone.");
            }}
          >
            Send OTP
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "10px",
          }}
        >
          <TextField label="Enter OTP" variant="standard" />
          <button
            className="smButton2"
            onClick={() => {
              window.alert("Verified the mobile number");
            }}
          >
            Varify
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "10px",
          }}
        >
          <TextField label="First Name" variant="standard" />
          <TextField label="Middle Name" variant="standard" />
          <TextField label="Last Name" variant="standard" />
        </div>
        <p
          style={{
            textAlign: "center",
            marginTop: "30px",
            fontSize: "20px",
            fontWeight: "bold",
            color: "#5733ad",
            marginBottom: "-5px",
          }}
        >
          Vehicle Details
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "0px",
          }}
        >
          <TextField label="Province" variant="standard" />
          <TextField label="Catogery" variant="standard" />
          <TextField label="Number" variant="standard" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "0px",
          }}
        >
          <TextField label="Chassie Number" variant="standard" />
        </div>
        {!registed && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "0px",
            }}
          >
            <button
              className="smButton2"
              onClick={() => {
                window.alert("Vehicle Registed");
                setRegisted(true);
              }}
            >
              Vehicle Register
            </button>
          </div>
        )}
        {registed && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "0px",
            }}
          >
            <a href="/user">
              <button className="smButton2">Direct to Login page</button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
