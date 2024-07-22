import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LogIn from "./authontication/LogIn";
import SignUp from "./authontication/SignUp";
import ForgotPassword from "./authontication/ForgotPassword";
import ResetPassword from "./authontication/ResetPassword";
import EmailVerification from "./authontication/EmailVerification";
import SignOutPage from "./authontication/SignOutPage";
import WaitEmail from "./authontication/WaitEmail";

import HomePage from "./page/home/HomePage";
import './App.scss';
import SecurityCode from "./authontication/SecurityCode";
import DashboardRouter from "./page/dashboard/DashboardRouter";



function App() {
  const [notification, SetNotification] =  useState("");
  const [email, setEmail] =  useState("");
  useEffect(() => {
    console.log("App component mounted");
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LogIn content={notification} setEmail={setEmail}/>} />
        <Route path="/verify-code" element={<SecurityCode email={email} SetNotification={SetNotification} />} />
        <Route path="/register" element={<SignUp SetNotification={SetNotification} />} />
        <Route path="/mail-verify" element={<EmailVerification />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/wait-email" element={<WaitEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/sign-out" element={<SignOutPage />} />
        {/* <Route path="/home" element={<HomePage content={notification}/>} /> */}
        <Route path="/dashboard*" element={<DashboardRouter />} />
        {/* <Route path="/result" element={<DashboardRouter />} /> */}

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
