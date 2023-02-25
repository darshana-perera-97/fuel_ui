import React from "react";
import SingleRegisterButton from "../Components/Registerpage/SingleRegisterButton";

export default function SystemLogin() {
  return (
    <div className="page">
      <p className="title1 tcenter">System Login</p>
      <p className="title5 tcenter">
        Every user can login to system by using this login page
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10% 5% ",
        }}
      >
        <SingleRegisterButton name="User Login" img="0" link="/userlogin" />
        <SingleRegisterButton name="Filler Login" img="1" link="/fillerLogin" />
        <SingleRegisterButton name="Admin Login" img="2" link="/adminLogin" />
      </div>
    </div>
  );
}
