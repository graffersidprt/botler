import React, { useEffect, useState } from "react";
import { TextField, Button, Grid, Card } from "@mui/material";
import { Box, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Auth } from "aws-amplify";
import { verficationCodeStyle } from "./VerificationCodeCss";
import mainLogo from "../../../assets/images/main-logo.svg";
import BotlerLogo from "../../../assets/images/botler-icon.svg";
import { isVerificationCodeValid } from "../../../utils";
import { ConfirmSignUpData } from "../../../app/types";
import { toast } from "react-toastify";
import { BotlerUserVerifiedService } from "../../../app/services/authServices";
import OtpInput from 'react-otp-input';

// TODO: make sure below is correct...

const VerificationCodeScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const classes = verficationCodeStyle();
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isValidForm, setIsValidForm] = useState<boolean>(false);

  const [value, setValue] = useState('');

  const handleChange = (otpValue: string) => {
    /** 
     * for check user input is valid or not with regex and user only enter numbers
     * @function
     * @param {string} otpValue - The otpValue value
     * @returns {void}
     */
    const otpRegex = /^[0-9\b]+$/;
    if (otpValue === "" || otpRegex.test(otpValue)) {
      if (otpValue.length === 4){
        setIsValidForm(true);
      }
      else{
        setIsValidForm(false);
      }
      setValue(otpValue);
    }
  };

  /**
   * Function for handle email change
   * @function
   * @param {string} value - The email value
   * @returns {void}
   */
  const onChangeVerificationCode = (value: string) => {
    setVerificationCode(value);
    const verificationRes = isVerificationCodeValid(value);
    setIsValidForm(false);
    setError(verificationRes);
    if (verificationRes === "") {
      setError("");
      setIsValidForm(true);
    }
  };

  /**
   * Function for handle submit
   * @function
   * @returns {void}
   * */
  const handelSubmit = () => {
    /**
     *  @typedef {object} ConfirmSignUpData
     * @property {string} username - The username value
     * @property {string} code - The code value
     */
    confirmSignUp({ username: location.state, code: verificationCode });
  };

  /**
   * Function for confirm sign up
   * @function
   * @param {ConfirmSignUpData} data - The data value
   * @returns {void}
   * */

  async function confirmSignUp({ username, code }: ConfirmSignUpData) {
    try {
      const verifiedUser = await Auth.confirmSignUp(username, code);
      console.log({ verifiedUser });
      try {
        const userData = {
          _id: "123456",
          email: username,
        };
        let botlerVerifiedUser: any = await BotlerUserVerifiedService(userData);
        console.log({ botlerVerifiedUser });
        /**
         * dispatch function for save the user data in the reducer
         * to use it in the application
         * @function
         * @param {object} user - The user data
         * @returns {void}
         * @example
         * dispatch(createSignUpAction(user))
         *
         */
        //  dispatch(createBotlerUserSuccessAction(botlerVerifiedUser)); // TODO: add the right action

        /**
         * Navigate to the dashboard page
         */
        navigate("/dashboard");
      } catch (error) {
        console.log("Error creating botler user:", error);
      }
      toast.success("successfully verified");
      /**
       * dispatch function for save the user data in the reducer
       * to use it in the application
       * @function
       * @param {object} user - The user data
       * @returns {void}
       * @example
       * dispatch(createSignUpAction(user))
       */
      // dispatch(createSignUpAction('userData'));
    } catch (error: any) {
      console.log("error confirming sign up", error);
      toast.error(error.message);
    }
  }

  const MobileDisplay = () => (
    <Box sx={{ display: {sm:"block", md:"none", lg:"none", xl:"none"} }}>
    <div className={classes.mainContainer}>
          <div className={classes.headerContainer}>
            <img className={classes.mainLogo} src={BotlerLogo} alt="Botler" />
            <Typography className={classes.headerText}>
              Please check your email
            </Typography>
            <div className={classes.header2Container}>
              <Typography className={classes.headerText2}>
                We've sent a code to
              </Typography>
              <Typography className={classes.emailBold}>
                name@domain.com
              </Typography>
            </div>
          </div>
          <div className={classes.validationContainer}>
            <div className={classes.OTPBoxContainer}>
            <OtpInput
              value={value}
              onChange={handleChange}
              numInputs={4}
              renderSeparator={<span style={{
                marginRight: "8px",
              }}>{" "}</span>}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                width: "64px",
                height: "64px",
                borderRadius: "8px",
                border: "3px solid #082B44",
                boxShadow: "2px 2px 4px rgba(16, 24, 40, 0)",
                padding: "2px 8px",
                fontSize: "48px",
                fontWeight: "600",
                lineHeight: "60px",
                color: "#082B44",
                textAlign: "center",
              }}
            />
            </div>
            <Typography
              className={classes.headerText2}
              style={{
                marginLeft: "16px",
              }}
            >
              Didn’t get a code? Click to resend.
            </Typography>
          </div>
          <Button
            variant="contained"
            sx={{ marginTop: "32px" }}
            onClick={handelSubmit}
            disabled={!isValidForm}
          >
            Verify
          </Button>
          <Button
            sx={{
              marginTop: "16px",
              color: "#344054",
              fontSize: "16px",
              fontWeight: 600,
              lineHeight: "24px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #D0D5DD",
            }}
            onClick={handelSubmit}
          >
            Cancel
          </Button>
        </div>
        </Box>
  )

  const DesktopDisplay = () => (
    <Box sx={{ display: {xs: "none", sm:"none", md:"flex", lg:"flex",xl:"flex"} }}>
    <Grid container spacing={0}>
          {/* Left Component */}
          <Grid item xs={12}>
            <div className={classes.mainContainer}>
              <img className={classes.image} src={mainLogo} alt="Botler" />
              <div className={classes.leftContainer}>
                {/* <Card> */}
                <div className={classes.leftContent}>
                  <Card
                    sx={{
                      padding: "12px",
                      borderRadius: "8px",
                      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <div className={classes.signUpFormContainer}>
                      <Typography
                      // sx={ {
                      //   fontSize: "36px",
                      //   fontWeight: 600,
                      //   lineHeight: "44px",
                      //   color: "#101828",
                      //   marginBottom: "32px",
                      // } }
                      >
                        Verification Code
                      </Typography>
                      <div className={classes.signUpForm}>
                        <Typography
                        // sx={ {
                        //   fontSize: "14px",
                        //   fontWeight: 500,
                        //   lineHeight: "20px",
                        //   color: "#344054",
                        // } }
                        >
                          Enter the verification code that we sent to you
                          through email
                        </Typography>
                        <div className={classes.formInput}>
                          <TextField
                            label="Enter code"
                            value={verificationCode}
                            onChange={(e) => {
                              onChangeVerificationCode(e.target.value);
                            }}
                          />
                        </div>
                        <Typography
                        // sx={ {
                        //   fontSize: "12px",
                        //   fontWeight: 200,
                        //   color: "#FF0000",
                        // } }
                        >
                          {error}
                        </Typography>
                      </div>

                      <Button
                        variant="contained"
                        sx={{ marginTop: "24px" }}
                        onClick={handelSubmit}
                        disabled={!isValidForm}
                      >
                        Submit
                      </Button>
                    </div>
                  </Card>
                </div>
                {/* </Card> */}
              </div>
            </div>
          </Grid>
        </Grid>
        </Box>
  )

  return (
    <Box>
      {/* <MobileDisplay />
      <DesktopDisplay /> */}
    </Box>
  );
};

export default VerificationCodeScreen;
