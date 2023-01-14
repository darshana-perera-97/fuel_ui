import React from "react";
import AboutUsSession from "../Components/Homepage/AboutUsSession";
import PoweredByLogoSet from "../Components/Homepage/PoweredByLogoSet";
import UserLogin from "../Components/Homepage/UserLogin";
import UserRegister from "../Components/Homepage/UserRegister";

export default function HomePage() {
  return (
    <div className="page">
      <UserRegister />
      <div className="innerSpace"></div>
      <UserLogin />
      <div className="innerSpace"></div>
      <p className="title1 tcenter">About Us</p>
      <AboutUsSession />
      <p className="title1 tcenter">Powered by</p>
      <PoweredByLogoSet/>
    </div>
  );
}
