import React from "react";
import UserLogin from "../Components/Homepage/UserLogin";
import UserRegister from "../Components/Homepage/UserRegister";

export default function HomePage() {
  return (
    <div className="page">
      <UserRegister />
      <UserLogin />
    </div>
  );
}
