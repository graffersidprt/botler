import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { forgetPasswordStyle } from "./ForgetPasswordCss";
import { Typography } from "@material-ui/core";
import BotlerLogo from "../../../assets/images/botler-icon.svg";
import { isEmailValid } from "../../../utils";
import { M } from "msw/lib/glossary-de6278a9";
import { useTranslation } from "react-i18next";

const ForgetPassword = () => {
  const classes = forgetPasswordStyle();
  const { t, i18n } = useTranslation("translation");
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [isValidForm, setIsValidForm] = useState<boolean>(false);

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

      // Handle submit function for the sign up form
  const handelSubmit = async () => {
    /**
     * handel submit function for the sign up form
     * with AWS Cognito in next PR
     */
    // signUp({ password, email, given_name: givenName, family_name: familyName });
  };

  const MobileDisplay = () => (
    <Box sx={{ display: { xs: "block", sm: "none" } }}>
      <div className={classes.mainContainer}>
        <div className={classes.contentContainer}>
          <div className={classes.HeaderContainer}>
            <img src={BotlerLogo} alt="Botler Icon" className={classes.logo} />
            <Typography className={classes.title}>
              {t("ForgotPassword.ForgotPassword.")}
            </Typography>
            <Typography className={classes.supportingText}>
              {t("ForgotPassword.Description")}
            </Typography>
          </div>
          <div className={classes.FormContainer}>
          <div className={classes.FormField}>
            <Typography
              className={classes.Label}
            >
              {t("ForgotPassword.Email")}
            </Typography>
            <TextField
              label="Enter your email"
              defaultValue={email}
              onBlur={(e) => {
                onChangeEmail(e.target.value);
              }}
              className={classes.TextField}
            />
            <Typography className={classes.InputError}>{emailError}</Typography>
          </div>
          <Button
            variant="contained"
            sx={{ marginTop: "20px", width: "100%" }}
            onClick={handelSubmit}
            disabled={!isValidForm}
          >
            {t("ForgotPassword.SendResetLink")}
          </Button>
          <div className={classes.alreadyLogin}>
              <span
                className={classes.loginButton}
                // onClick={(e) => props.signUpClicked()}
              >
                {t("ForgotPassword.BackToSignIn")}
              </span>
          </div>
        </div>
        </div>
      </div>
    </Box>
  )

  const DesktopDisplay = () => (
    <Box sx={{ display: { xs: "none", sm: "block" } }}>
      <div className={classes.mainContainer}>
        <div className={classes.contentContainer}>
          <div className={classes.HeaderContainer}>
            <img src={BotlerLogo} alt="Botler Icon" className={classes.logo} />
            <Typography className={classes.title}>
              {t("ForgotPassword.ForgotPassword")}
            </Typography>
            <Typography className={classes.supportingText}>
              {t("ForgotPassword.Description")}
            </Typography>
          </div>
          <div className={classes.FormContainer}>
          <div className={classes.FormField}>
            <Typography
              className={classes.Label}
            >
              {t("ForgotPassword.Email")}
            </Typography>
            {/* <TextField
              label="Enter your email"
              value={email}
              onChange={(e) => {
                onChangeEmail(e.target.value);
              }}
              className={classes.TextField}
            /> */}
            <Typography className={classes.InputError}>{emailError}</Typography>
          </div>
          <Button
            variant="contained"
            sx={{ marginTop: "20px", width: "100%" }}
            onClick={handelSubmit}
            disabled={!isValidForm}
          >
            {t("ForgotPassword.SendResetLink")}
          </Button>
          <div className={classes.alreadyLogin}>
              <span
                className={classes.loginButton}
                // onClick={(e) => props.signUpClicked()}
              >
                {t("ForgotPassword.BackToSignIn")}
              </span>
          </div>
        </div>
        </div>
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

export default ForgetPassword;
