import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import SignUp from "../pages/signup/signup";
// import VerificationCodeScreen from "../pages/verificationCode/VerificationCode";
import SignIn from "../features/Authentication/signin/signin";
import SideBar from "../components/sidebar/SideBar";
import Home from "../pages/home/Home";
import PrivateRoute from "./PrivateRoute";
import Settings from "../pages/settings/Settings";

export const RouteRenderer = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      {/* <Route path="/sign-in" element={<SignIn />} /> */ }
      {/* <Route path="/verification" element={<VerificationCodeScreen />} /> */}
       {/* Add a private route for authenticated users */ }
       {/* <PrivateRoute
        path="/home"
        element={<Home />}
        isAuthenticated={isAuthenticated}
      /> */}
      {/* <Route path="/home" element={ <Home /> } /> */}
      <Route path="/setting" element={ <Settings /> } />
    </Routes>
  );
};