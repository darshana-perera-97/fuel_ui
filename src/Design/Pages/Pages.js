import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import FillerLogin from "./FillerLogin";
import HomePage from "./HomePage";
import QrScan from "./QrScan";
import RegisterPage from "./RegisterPage";
import SystemLogin from "./SystemLogin";
import User from "./User";
import UserLogin from "./UserLogin";

export default function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<SystemLogin />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/fillerlogin" element={<FillerLogin />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/qrscan" element={<QrScan />} />
      </Routes>
    </div>
  );
}
