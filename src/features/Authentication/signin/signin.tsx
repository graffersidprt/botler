import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import BotlerLogo from "../../../assets/images/botler-icon.svg";
import MarcMiller from "../../../assets/images/honourable-marc-miller.svg";
import googleLogo from "../../../assets/images/google-icon.svg";
import mailLogo from "../../../assets/images/mail-icon.svg";
import { signUpStyle } from "./signinCss";
import {
  isEmailValid,
  isNameValid,
  isPasswordValid,
  isValidEmail,
} from "../../../utils";
import { useTranslation } from "react-i18next";
import { Auth } from "aws-amplify";
import {
  BotlerUserRequestData,
  SignUpData,
  SignInData,
} from "../../../app/types";
import FormSelectInput from "../../../components/Dropdown";

import { CreateBotlerUserService } from "../../../app/services/authServices";
import { AppDispatch } from "../../../app/store";
import { setCookie, setTokenInCookie } from "../../../app/cookies";
import { toast } from "react-toastify";
import { use } from "i18next";
import Carousel from "react-material-ui-carousel";

const SignIn = (props: any) => {
  const { t, i18n } = useTranslation("translation");
  const data = useSelector((state) => state);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const classes = signUpStyle();
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [isValidForm, setIsValidForm] = useState<boolean>(false);

  /**
   * function to check if the form is valid
   * to enable the submit button if all the fields are valid
   */

  useEffect(() => {
    if (email && password) {
      if (isValidEmail(email) && isPasswordValid(password) === "") {
        setIsValidForm(true);
      } else {
        setIsValidForm(false);
      }
    } else {
      setIsValidForm(false);
    }
  }, [email, password]);

  /**
   * Function for handle email change
   * @function
   * @param {string} value - The email value
   * @returns {void}
   */
  const onChangeEmail = (value: string) => {
    setEmail(value);
    const errorMsg = isEmailValid(email);
    setEmailError(errorMsg);
  };

  /**
   * Function for handle password change
   * @function
   * @param {string} value - The password value
   * @returns {void}
   */
  const onChangePassword = (value: string) => {
    setPassword(value);
    const errorMsg = isPasswordValid(value);
    setPasswordError(errorMsg);
  };

  // Handle submit function for the sign up form
  const handelSubmit = async () => {
    /**
     * handel submit function for the sign up form
     * with AWS Cognito in next PR
     */
    signIn({ password, email });
  };

  /**
   * Function for sign up with AWS Cognito service
   * @function
   * @param {object} SignInData - The sign up data
   * @returns {void}
   * @example
   * signIn({ password, email });
   */

  async function signIn({ password, email }: SignInData) {
    try {
      const { user } = await Auth.signIn({
        username: email,
        password,
      });
      console.log("Successfully signed in!", user);
    } catch (error: any) {
      console.error("Error signing up:", error.message);
      toast.error(error.message);
    }
  }

  /**
   * Function for handle language change with i18n library
   */
  const handleLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    if (event) {
      i18n.changeLanguage("fr");
    } else {
      i18n.changeLanguage("en");
    }
  };

  const MobileDisplay = () => (
    <Box sx={{ display: { sm: "block", md: "none", lg: "none", xl: "none" } }}>
      <div className={classes.MainContainer}>
        <div className={classes.HeaderContainer}>
          <img src={BotlerLogo} alt="Botler Icon" className={classes.logo} />
          <Typography
            className={classes.title}
            sx={{
              fontSize: "24px",
              fontWeight: 600,
              lineHeight: "32px",
              color: "#101828",
              marginTop: "24px",
            }}
          >
            {t("SignIn.WelcomeBack")}
          </Typography>
        </div>
        <div className={classes.FormContainer}>
          <div className={classes.FormField}>
            <Typography
              className={classes.Label}
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "20px",
                color: "#344054",
                marginBottom: "6px",
              }}
            >
              {t("SignUp.Email")}
            </Typography>
            <TextField
              label={t("SignUp.Email.label")}
              value={email}
              onChange={(e) => {
                onChangeEmail(e.target.value);
              }}
              className={classes.TextField}
            />
            <Typography className={classes.InputError}>{emailError}</Typography>
          </div>
          <div className={classes.FormField}>
            <Typography
              className={classes.Label}
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "20px",
                color: "#344054",
                marginBottom: "6px",
              }}
            >
              {t("SignUp.Password")}
            </Typography>
            <TextField
              label={t("SignUp.Password.label")}
              value={password}
              onChange={(e) => {
                onChangePassword(e.target.value);
              }}
              className={classes.TextField}
            />
            <Typography className={classes.InputError}>
              {passwordError}
            </Typography>
          </div>
          <div className={classes.rememberContainer}>
            <div className={classes.rememberMe}>
              <Checkbox
                {...label}
                defaultChecked
                style={{ backgroundColor: "white", marginLeft: "-10px" }}
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  color: "#475467",
                }}
              >
                {t("SignIn.RememberMe")}
              </Typography>
            </div>
            <div>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: "20px",
                  color: "#051C2E",
                }}
              >
                {t("SignIn.ForgotPassword")}
              </Typography>
            </div>
          </div>
          <Button
            variant="contained"
            sx={{ marginTop: "20px", width: "100%" }}
            onClick={handelSubmit}
            disabled={!isValidForm}
          >
            {t("SignIn.SignIn")}
          </Button>
          <div className="googleButton">
            <Button
              sx={{
                backgroundColor: "#FFFFFF",
                marginTop: "16px",
                color: "#344054",
                border: "1px solid #D0D5DD",
                "&:hover": {
                  backgroundColor: "#FFFFFF",
                },
              }}
              variant="contained"
              className={classes.signUpWithGoogleButton}
              onClick={(e) => props.googleSignInClicked()}
            >
              <img className={classes.googleLogo} src={googleLogo} alt="" />
              {t("SignIn.SignUpWithGoogle")}
            </Button>
          </div>
          <div className={classes.alreadyLogin}>
            <Typography className={classes.PasswordHint}>
              {t("SignIn.DontHaveAccount")}
              {" "}
              <span
                className={classes.loginButton}
                onClick={(e) => props.signUpClicked()}
              >
                {t("SignUp.CreateAccountButton")}
              </span>
            </Typography>
          </div>
        </div>
      </div>
    </Box>
  );

  const DesktopDisplay = () => (
    <Box
      sx={{
        display: {
          xs: "none",
          sm: "none",
          md: "block",
          lg: "block",
          xl: "block",
        },
      }}
    >
      <div className={classes.root}>
        <Grid container spacing={0}>
          {/* Left Component */}
          <Grid item xs={12} sm={6} className={classes.leftComponent}>
            <div className={classes.leftContainer}>
              <div className={classes.leftContent}>
                <div className={classes.signUpFormContainer}>
                  <div className={classes.signInHeader}>
                    <img
                      className={classes.image}
                      src={BotlerLogo}
                      alt="Botler"
                    />
                    <Typography
                      sx={{
                        fontSize: "30px",
                        fontWeight: 600,
                        lineHeight: "38px",
                        color: "#101828",
                        marginBottom: "32px",
                        marginTop: "20px",
                      }}
                    >
                      {t("SignIn.WelcomeBack")}
                    </Typography>
                  </div>
                  <div className={classes.signUpForm}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        lineHeight: "20px",
                        color: "#344054",
                      }}
                    >
                      {t("SignUp.Email")}
                    </Typography>
                    <div className={classes.formInput}>
                      <TextField
                        label={t("SignUp.Email.label")}
                        value={email}
                        onChange={(e) => {
                          onChangeEmail(e.target.value);
                        }}
                      />
                    </div>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 200,
                        color: "#FF0000",
                      }}
                    >
                      {emailError}
                    </Typography>
                  </div>
                  <div className={classes.signUpFormPassword}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        lineHeight: "20px",
                        color: "#344054",
                      }}
                    >
                      {t("SignUp.Password")}
                    </Typography>
                    <div className={classes.formInput}>
                      <TextField
                        label={t("SignUp.Password.label")}
                        value={password}
                        onChange={(e) => {
                          onChangePassword(e.target.value);
                        }}
                      />
                    </div>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 200,
                        color: "#FF0000",
                      }}
                    >
                      {passwordError}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "20px",
                        color: "#475467",
                      }}
                    >
                      {t("SignUp.Password.HelpText")}
                    </Typography>
                  </div>
                  <div className={classes.rememberContainer}>
                    <div className={classes.rememberMe}>
                      <Checkbox
                        {...label}
                        defaultChecked
                        style={{
                          backgroundColor: "white",
                          marginLeft: "-10px",
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          color: "#475467",
                        }}
                      >
                        {t("SignIn.RememberMe")}
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          color: "#475467",
                        }}
                        onClick={(e) => props.signUpClicked()}
                      >
                        {t("SignIn.ForgotPassword")}
                      </Typography>
                    </div>
                  </div>
                  <Button
                    variant="contained"
                    sx={{ marginTop: "24px" }}
                    onClick={handelSubmit}
                    disabled={!isValidForm}
                  >
                    {t("SignIn.SignIn")}
                  </Button>
                  <div className="googleButton">
                    <Button
                      sx={{
                        backgroundColor: "#FFFFFF",
                        marginTop: "24px",
                        color: "#344054",
                        border: "1px solid #D0D5DD",
                        "&:hover": {
                          backgroundColor: "#FFFFFF",
                        },
                      }}
                      variant="contained"
                      className={classes.signUpWithGoogleButton}
                      onClick={(e) => props.googleSignInClicked()}
                    >
                      <img
                        className={classes.googleLogo}
                        src={googleLogo}
                        alt=""
                      />
                      {t("SignUp.SignUpWithGoogle")}
                    </Button>
                  </div>
                </div>
                <div className={classes.alreadyLogin}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "20px",
                      color: "#475467",
                    }}
                  >
                    {t("SignIn.DontHaveAccount")}    
                    {" "}
                    <span
                      className={classes.loginButton}
                      onClick={(e) => props.signUpClicked()}
                    >
                      {t("SignUp.CreateAccountButton")}
                    </span>
                  </Typography>
                </div>
              </div>
            </div>
            <Divider />
            <div className={classes.leftFooter}>
              <div>
                <Typography
                  sx={{ fontSize: "12px", fontWeight: 400, color: "#667085" }}
                >
                  © 2023 Botler. All rights reserved.
                </Typography>
              </div>
              <div className={classes.leftFooterContent}>
                <FormSelectInput handleLanguage={handleLanguage} />
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#667085",
                    marginRight: "16px",
                  }}
                >
                  Terms
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#667085",
                    marginRight: "16px",
                  }}
                >
                  Privacy
                </Typography>
                <Typography
                  sx={{ fontSize: "12px", fontWeight: 400, color: "#667085" }}
                >
                  Cookies
                </Typography>
              </div>
            </div>
          </Grid>

          {/* Right Component (hidden on mobile view) */}
          <Grid item xs={12} sm={6} className={classes.rightComponent}>
            {/* Your content for the right component */}
            <div className={classes.rightContainer}>
              <div className={classes.rightContent}>
                <div className={classes.profileContainer1}>
                  <Typography
                    sx={{
                      fontSize: "36px",
                      fontWeight: 500,
                      lineHeight: "44px",
                    }}
                  >
                    {" "}
                    “I am proud to support Botler AI's innovative project”
                  </Typography>
                </div>
                <div className={classes.profileContainer}>
                  <img src={MarcMiller} alt="" />
                  <div className={classes.profileDetails}>
                    <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                      The Honourable David Lametti, P.C., Q.C., M.P.
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#7CD4FD",
                      }}
                    >
                      Minister of Justice and Attorney General of Canada
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Box>
  );

  return (
    <Box>
      <MobileDisplay />
      <DesktopDisplay />
    </Box>
  );
};

export default SignIn;
