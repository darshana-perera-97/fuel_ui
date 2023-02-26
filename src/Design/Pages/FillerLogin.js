import React from "react";
import LoginBox from "../Components/Common/LoginBox";

export default function FillerLogin() {
  return (
    <div className="page">
      {" "}
      <p className="title1 tcenter">Fillers Login</p>
      <p className="title6 tcenter">
        All fuel fillers and filling station admin can login here.
      </p>
      <LoginBox title="Fuel Filler Login" />
      <br/>
      <br/>
      <p className="title1 tcenter">Fillers Register</p>
      <p className="title6 tcenter">
        Contact Fuel System Admin{" "}
        <span style={{ color: "#000" }}>&lt;System_Admin.name&gt;</span> <br />
        by using the contacts
        <span style={{ color: "#000" }}>&lt;System_Admin.contact&gt;</span>
      </p>
    </div>
  );
}
