import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { themeWithOverrides } from "./utils";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SideBar from "./components/sidebar/SideBar";
import Footer from "./components/footer/Footer";
import { RouteRenderer } from "./routes";
import { useState } from "react";
import Authenticator from "./features/Authentication/Authenticator";
import VerificationCodeScreen from "./features/Authentication/verificationCode/VerificationCode";
import OnBoardingOne from "./features/OnBoarding/OnBoardingOne/OnBoardingOne";
import OnBoardingSecond from "./features/OnBoarding/OnBoardingSecond/OnBoardingSecond";
import OnBoardingThird from "./features/OnBoarding/OnBoardingThird/OnBoardingThird";
import ForgetPassword from "./features/Authentication/forgetpassword/ForgetPassword";


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <BrowserRouter>
      <ThemeProvider theme={ themeWithOverrides() }>
        {/* <Routes>
      <Route path="/onboarding" element={<OnBoardingOne />} />
      <Route path="/onboarding2" element={<OnBoardingSecond />} />
      <Route path="/onboarding3" element={<OnBoardingThird />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/verification" element={<VerificationCodeScreen />} />
      </Routes> */}
        <Authenticator>
          <ToastContainer />
          { isAuthenticated && <SideBar /> }
          <RouteRenderer />
        </Authenticator>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
