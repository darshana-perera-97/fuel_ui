import React from "react";
import LoginBox from "../Components/Common/LoginBox";

export default function FillerLogin() {
  return (
    <div className="page">
      {" "}
      <p className="title1 tcenter">Fillers Login</p>
      <p className="title6 tcenter">
        All fuel requesting customers can login here.
      </p>
      <LoginBox title="Fuel Filler Login" />
    </div>
  );
}
