import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { useTranslation } from "react-i18next";
import {
  getScreenSize,
  isEmailValid,
  isNameValid,
  isPasswordValid,
  isValidEmail,
} from "../../../utils";
import { BotlerUserRequestData, SignUpData } from "../../../app/types";
import { Auth } from "aws-amplify";
import { CreateBotlerUserService } from "../../../app/services/authServices";
import mainLogo from "../../../assets/images/main-logo.svg";
import googleLogo from "../../../assets/images/google-icon.svg";
import { setTokenInCookie } from "../../../app/cookies";
import { toast } from "react-toastify";
import { Box, TextField } from "@mui/material";
import { Typography } from "@material-ui/core";
import BotlerIcon from "../../../assets/images/botler-icon.svg";
import { Button, Divider, Paper, Switch } from "@mui/material";
import FormSelectInput from "../../../components/Dropdown";
import CarouselView from "./Carousel";
import translateText from "../../../translate";
import {
  MobileFormContainer,
  MobileLogo,
  MobileMainContainer,
  MobileTitle,
  MobileFormField,
  MobileTextField,
  MobileInputLable,
  MobileInputError,
  MobilePasswordHint,
  SignUpWithGoogleButton,
  DesktopGoogleLogo,
  SignAlreadyLogin,
  DesktopRoot,
  DesktopLeftComponent,
  DesktopLeftContainer,
  DesktopImage,
  DesktopSignUpFormContainer,
  DesktopTitle,
  DesktopSignUpForm,
  DesktopFormLabel,
  DesktopFormInput,
  DesktopFormInputError,
  DesktopSignUpFormPassword,
  DesktopLeftFooter,
  DesktopRightsText,
  DesktopLeftFooterContent,
  DesktopRightComponent,
  DesktopRightContainer,
  DesktopDescriptionContainer,
} from "./signupCss";

const SignUp = (props: any) => {
  const { t, i18n } = useTranslation("translation");
  const navigate = useNavigate();
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [givenName, setGivenName] = useState<string>("");
  const [givenNameError, setGivenNameError] = useState<string>("");
  const [familyName, setFamilyName] = useState<string>("");
  const [familyNameError, setFamilyNameError] = useState<string>("");
  const [isValidForm, setIsValidForm] = useState<boolean>(false);

  /**
   * function to check if the form is valid
   * to enable the submit button if all the fields are valid
   */

  useEffect(() => {
    if (email && password && givenName && familyName) {
      if (isValidEmail(email) && isPasswordValid(password) === "") {
        setIsValidForm(true);
      } else {
        setIsValidForm(false);
      }
    } else {
      setIsValidForm(false);
    }
  }, [email, password, givenName, familyName]);

  /**
   * Function for handle given name change
   * @function
   * @param {string} value - The given name value
   * @returns {void}
   */
  const onChangeGivenName = (value: string) => {
    setGivenName(value);
    const errorMsg = isNameValid(value, "Name");
    setGivenNameError(errorMsg);
  };

  /**
   * Function for handle given name change
   * @function
   * @param {string} value - The given name value
   * @returns {void}
   */
  const onChangeFamilyName = (value: string) => {
    setFamilyName(value);
    const errorMsg = isNameValid(value, "Family Name");
    setFamilyNameError(errorMsg);
  };

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
    signUp({ password, email, given_name: givenName, family_name: familyName });
  };

  /**
   * Function for sign up with AWS Cognito service
   * @function
   * @param {object} signUpData - The sign up data
   * @returns {void}
   * @example
   * signUp({ password, email, given_name: givenName, family_name: familyName });
   */

  async function signUp({
    password,
    email,
    given_name,
    family_name,
  }: SignUpData) {
    try {
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          given_name, // required
          family_name, // required
          // other custom attributes are here
        },
        autoSignIn: {
          enabled: true,
        },
      });
      console.log("Successfully signed up!", user);
      // without dispatch we can't able to call Action request from redux
      // dispatch(signUpSuccessWithCognitoAction(user)); // TODO: add the right action

      /**
       * create userData object to send it to the backend
       * @constant
       * @type {object}
       * @property {string} username - The username of the user
       * @property {string} email - The email of the user
       * @property {string} givenName - The given name of the user
       * @property {string} familyName - The family name of the user
       * @example
       * const userData = {
       * username: user.username,
       * email: user.attributes.email,
       * givenName: user.attributes.given_name,
       * familyName: user.attributes.family_name,
       * };
       */

      const userData: BotlerUserRequestData = {
        username: email,
        email: email,
        given_name: givenName,
        family_name: familyName,
      };

      try {
        let botlerUser: any = await CreateBotlerUserService(userData);
        // dispatch(
        //   createBotlerUserSuccessAction(botlerUser.BotlerUserParameters) // TODO: add the right action
        // );
        setTokenInCookie("userToken", botlerUser.UserToken.token, 1);
        toast.success(
          "successfully creating your account! 🎉 we've sent a verification email to your inbox",
          {}
        );
        /**
         * navigate to the verification code page with the user data
         * @function
         * @param {string} path - The path of the page
         * @param {object} state - The state of the page
         * @returns {void}
         * @example
         * navigate("/verification", { state: { user } });
         */

        navigate("/verification", { state: email });
      } catch (error) {
        console.log("Error creating botler user:", error);
      }
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
      <MobileMainContainer>
        <div>
          <MobileLogo src={BotlerIcon} alt="Botler Icon" />
          <MobileTitle>Create Account</MobileTitle>
        </div>
        <MobileFormContainer>
          <MobileFormField>
            <MobileInputLable>{t("SignUp.Name")}</MobileInputLable>
            <MobileTextField
              label={t("SignUp.Name.label")}
              value={givenName}
              onChange={(e) => {
                onChangeGivenName(e.target.value);
              }}
            />
            <MobileInputError>{givenNameError}</MobileInputError>
          </MobileFormField>
          <MobileFormField>
            <MobileInputLable>{t("SignUp.FamilyName")}</MobileInputLable>
            <MobileTextField
              label={t("SignUp.FamilyName.label")}
              value={familyName}
              onChange={(e) => {
                onChangeFamilyName(e.target.value);
              }}
            />
            <MobileInputError>{familyNameError}</MobileInputError>
          </MobileFormField>
          <MobileFormField>
            <MobileInputLable>{t("SignUp.Email")}</MobileInputLable>
            <MobileTextField
              label={t("SignUp.Email.label")}
              value={email}
              onChange={(e) => {
                onChangeEmail(e.target.value);
              }}
            />
            <MobileInputError>{emailError}</MobileInputError>
          </MobileFormField>
          <MobileFormField>
            <MobileInputLable>{t("SignUp.Password")}</MobileInputLable>
            <MobileTextField
              label={t("SignUp.Password.label")}
              value={password}
              onChange={(e) => {
                onChangePassword(e.target.value);
              }}
            />
            <MobileInputError>{passwordError}</MobileInputError>
            <MobilePasswordHint>
              {t("SignUp.Password.HelpText")}
            </MobilePasswordHint>
          </MobileFormField>
          <Button
            variant="contained"
            sx={{ marginTop: "4px", width: "100%" }}
            onClick={handelSubmit}
            disabled={!isValidForm}
          >
            {t("SignUp.CreateAccountButton")}
          </Button>
          <div className="googleButton">
            <SignUpWithGoogleButton
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
              onClick={(e) => props.googleSignInClicked()}
            >
              <DesktopGoogleLogo src={googleLogo} alt="" />
              {t("SignUp.SignUpWithGoogle")}
            </SignUpWithGoogleButton>
          </div>
          <SignAlreadyLogin>
            <MobilePasswordHint>
              {t("SignUp.AlreadyHaveAccount")}{" "}
              <span
                style={{
                  color: "#051C2E",
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: "20px",
                  cursor: "pointer",
                }}
                onClick={(e) => props.signInClicked()}
              >
                {t("SignUp.SignIn")}
              </span>
            </MobilePasswordHint>
          </SignAlreadyLogin>
        </MobileFormContainer>
      </MobileMainContainer>
    </Box>
  );

  const DesktopDisplay = () => (
    <Box
      sx={{
        display: { xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex" },
      }}
    >
      <DesktopRoot>
        <Grid container spacing={0}>
          {/* Left Component */}
          <DesktopLeftComponent item xs={12} sm={6}>
            <DesktopLeftContainer>
              <DesktopLeftContainer>
                <DesktopImage src={mainLogo} alt="Botler" />
                <DesktopSignUpFormContainer>
                  <DesktopTitle>
                    {translateText(t("SignUp.CreateAccount"))}
                  </DesktopTitle>
                  <DesktopSignUpForm>
                    <DesktopFormLabel>{t("SignUp.Name")}</DesktopFormLabel>
                    <DesktopFormInput>
                      <TextField
                        label={t("SignUp.Name.label")}
                        value={givenName}
                        onChange={(e) => {
                          onChangeGivenName(e.target.value);
                        }}
                      />
                    </DesktopFormInput>
                    <DesktopFormInputError>
                      {givenNameError}
                    </DesktopFormInputError>
                  </DesktopSignUpForm>
                  <DesktopSignUpForm>
                    <DesktopFormLabel>
                      {t("SignUp.FamilyName")}
                    </DesktopFormLabel>
                    <DesktopFormInput>
                      <TextField
                        label={t("SignUp.FamilyName.label")}
                        value={familyName}
                        onChange={(e) => {
                          onChangeFamilyName(e.target.value);
                        }}
                      />
                    </DesktopFormInput>
                    <DesktopFormInputError>
                      {familyNameError}
                    </DesktopFormInputError>
                  </DesktopSignUpForm>
                  <DesktopSignUpForm>
                    <DesktopFormLabel>{t("SignUp.Email")}</DesktopFormLabel>
                    <DesktopFormInput>
                      <TextField
                        label={t("SignUp.Email.label")}
                        value={email}
                        onChange={(e) => {
                          onChangeEmail(e.target.value);
                        }}
                      />
                    </DesktopFormInput>
                    <DesktopFormInputError>{emailError}</DesktopFormInputError>
                  </DesktopSignUpForm>
                  <DesktopSignUpFormPassword>
                    <DesktopFormLabel>{t("SignUp.Password")}</DesktopFormLabel>
                    <DesktopFormInput>
                      <TextField
                        label={t("SignUp.Password.label")}
                        value={password}
                        onChange={(e) => {
                          onChangePassword(e.target.value);
                        }}
                      />
                    </DesktopFormInput>
                    <DesktopFormInputError>
                      {passwordError}
                    </DesktopFormInputError>
                    <MobilePasswordHint>
                      {t("SignUp.Password.HelpText")}
                    </MobilePasswordHint>
                  </DesktopSignUpFormPassword>
                  <Button
                    variant="contained"
                    sx={{ marginTop: "24px" }}
                    onClick={handelSubmit}
                    disabled={!isValidForm}
                  >
                    {t("SignUp.CreateAccountButton")}
                  </Button>
                  <div className="googleButton">
                    <SignUpWithGoogleButton
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
                      onClick={(e) => props.googleSignInClicked()}
                    >
                      <DesktopGoogleLogo src={googleLogo} alt="" />
                      {t("SignUp.SignUpWithGoogle")}
                    </SignUpWithGoogleButton>
                  </div>
                </DesktopSignUpFormContainer>
                <SignAlreadyLogin>
                  <MobilePasswordHint>
                    {t("SignUp.AlreadyHaveAccount")}{" "}
                    <span
                      style={{
                        color: "#051C2E",
                        fontSize: "14px",
                        fontWeight: 600,
                        lineHeight: "20px",
                        cursor: "pointer",
                      }}
                      onClick={(e) => props.signInClicked()}
                    >
                      {t("SignUp.SignIn")}
                    </span>
                  </MobilePasswordHint>
                </SignAlreadyLogin>
              </DesktopLeftContainer>
            </DesktopLeftContainer>
            <Divider />
            <DesktopLeftFooter>
              <div>
                <DesktopRightsText>
                  © 2023 Botler. All rights reserved.
                </DesktopRightsText>
              </div>
              <DesktopLeftFooterContent>
                <FormSelectInput handleLanguage={handleLanguage} />
                <DesktopRightsText>Terms</DesktopRightsText>
                <DesktopRightsText>Privacy</DesktopRightsText>
                <DesktopRightsText>Cookies</DesktopRightsText>
              </DesktopLeftFooterContent>
            </DesktopLeftFooter>
          </DesktopLeftComponent>

          {/* Right Component (hidden on mobile view) */}
          <DesktopRightComponent item xs={12} sm={6}>
            {/* Your content for the right component */}
            <DesktopRightContainer>
              <DesktopDescriptionContainer>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    justifyContent: "center",
                    lineHeight: "30px",
                  }}
                >
                  {t("SignUp.StatementAnalysis")}
                </span>
                <br />
                <span
                  style={{
                    color: "#5E84A1",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "24px",
                    alignItems: "center",
                    marginTop: "16px",
                  }}
                >
                  {t("SignUp.StatementAnalysis.Description")}
                </span>
              </DesktopDescriptionContainer>
              <CarouselView />
            </DesktopRightContainer>
          </DesktopRightComponent>
        </Grid>
      </DesktopRoot>
    </Box>
  );

  return (
    <Box>
      <MobileDisplay />
      <DesktopDisplay />
    </Box>
  );
};

export default SignUp;
