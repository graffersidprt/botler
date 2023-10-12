import {
  Box,
  BoxProps,
  TextField,
  Checkbox,
  Button,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React, { useState } from "react";
import {
  isConfirmPasswordValid,
  isEmailValid,
  isNameValid,
  isPasswordValid,
  isPhoneNumberValid,
} from "../../../../utils";
import MailIcon from "../../../../assets/images/mail-icon.svg";
import PhoneIcon from "../../../../assets/images/phone-icon.svg";
import { c } from "msw/lib/glossary-de6278a9";
import { useTranslation } from "react-i18next";
import { MobileButtonContainer, MobileFieldContainer, MobileFormContainer, MobileFormField, MobileHeaderContent, MobileHeaderDescriptionText, MobileHeaderHeadingText, MobileInputError, MobileLabel, MobileMainContainer, MobileTextField, DesktopButtonContainer, DesktopFieldContainer, DesktopFormContainer, DesktopFormField, DesktopHeaderContent, DesktopHeaderDescriptionText, DesktopHeaderHeadingText, DesktopInputError, DesktopLabel, DesktopMainContainer, DesktopTextField } from "./passwordCss";

const Password = () => {
  const { t } = useTranslation("translation");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  /**
   * @description: This function is used to validate the password field
   * @param {string} value
   * @returns {void}
   */
  const onChangePassword = (value: string) => {
    setPassword(value);
    const errorMsg = isPasswordValid(value);
    setPasswordError(errorMsg);
  }

  /**
   * @description: This function is used to validate the new password field
   * @param {string} value
   * @returns {void}
   * */
  const onChangeNewPassword = (value: string) => {
    setNewPassword(value);
    const errorMsg = isPasswordValid(value);
    setNewPasswordError(errorMsg);
  }

  /**
   * @description: This function is used to validate the confirm password field
   * @param {string} value
   * @returns {void}
   * */
  const onChangeConfirmPassword = (value: string) => {
    setConfirmPassword(value);
    const errorMsg = isConfirmPasswordValid(value, newPassword);
    setConfirmPasswordError(errorMsg);
  }

  const MobileDisplay = () => (
    <Box sx={{ display: { sm: "block", md: "none", lg: "none", xl: "none" } }}>
      <MobileMainContainer>
        <MobileHeaderContent>
          <MobileHeaderHeadingText>
            {t("Password.Heading")}
          </MobileHeaderHeadingText>
          <MobileHeaderDescriptionText>
            {t("Password.Description")}
          </MobileHeaderDescriptionText>
        </MobileHeaderContent>
        <Divider
          sx={{
            margin: "24px 0px",
          }}
        />
        <MobileFormContainer>
                  <MobileFieldContainer>
                    <MobileLabel>
                      {t("Password.CurrentPassword")}
                    </MobileLabel>
                    <MobileFormField>
                      <MobileTextField
                        sx={{
                          maxWidth: "512px",
                        }}
                        label="Enter current password"
                        defaultValue={password}
                        onBlur={(e: any) => {
                          onChangePassword(e.target.value);
                        }}
                        type="password"
                      />
                      <MobileInputError>
                        {passwordError}
                      </MobileInputError>
                    </MobileFormField>
                  </MobileFieldContainer>
                  <Divider
                    sx={{
                      margin: "24px 0px",
                    }}
                  />
                  <MobileFieldContainer>
                    <MobileLabel>
                      {t("Password.NewPassword")}
                    </MobileLabel>
                    <MobileFormField>
                      <MobileTextField
                        sx={{
                          maxWidth: "512px",
                        }}
                        label="Enter new password"
                        defaultValue={newPassword}
                        onBlur={(e) => {
                          onChangeNewPassword(e.target.value);
                        }}
                        type="password"
                      />
                      <Typography style={{
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "20px",
                        color: "#475467",
                        marginTop: "6px"
                      }}>
                        {t("Password.NewPassword.HelpText")}
                      </Typography>
                      <MobileInputError>
                        {newPasswordError}
                      </MobileInputError>
                    </MobileFormField>
                  </MobileFieldContainer>
                  <Divider
                    sx={{
                      margin: "24px 0px",
                    }}
                  />
                  <MobileFieldContainer>
                    <MobileLabel>
                      {t("Password.ConfirmPassword")}
                    </MobileLabel>
                    <MobileFormField>
                      <MobileTextField
                        sx={{
                          maxWidth: "512px",
                        }}
                        label="Enter current password"
                        defaultValue={confirmPassword}
                        onBlur={(e) => {
                          onChangeConfirmPassword(e.target.value);
                        }}
                        type="password"
                      />
                      <MobileInputError>
                        {confirmPasswordError}
                      </MobileInputError>
                    </MobileFormField>
                  </MobileFieldContainer>
                  <MobileButtonContainer>
                    <Button
                      sx={{
                        maxWidth: "80px",
                        height: "40px",
                        fontSize: "14px",
                        fontWeight: "600",
                        lineHeight: "20px",
                        backgroundColor: "#FFFFFF",
                        color: "#344054"
                      }}
                    >
                      {t("CommonStrings.Cancel")}
                    </Button>
                    <Button
                      sx={{
                        maxWidth: "129px",
                        height: "40px",
                        fontSize: "14px",
                        fontWeight: "600",
                        lineHeight: "20px",
                        marginLeft: "24px"
                      }}
                    >
                      {t("CommonStrings.SaveChanges")}
                    </Button>
                  </MobileButtonContainer>
                </MobileFormContainer>
      </MobileMainContainer>
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
      <DesktopMainContainer>
        <DesktopHeaderContent>
          <DesktopHeaderHeadingText>
            {t("Password.Heading")}
          </DesktopHeaderHeadingText>
          <DesktopHeaderDescriptionText>
            {t("Password.Description")}
          </DesktopHeaderDescriptionText>
        </DesktopHeaderContent>
        <Divider
          sx={{
            margin: "24px 0px",
          }}
        />
        <div>
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <Box>
                <DesktopFormContainer>
                  <DesktopFieldContainer>
                    <DesktopLabel>
                      {t("Password.CurrentPassword")}
                    </DesktopLabel>
                    <DesktopFormField>
                      <DesktopTextField
                        sx={{
                          maxWidth: "512px",
                        }}
                        label="Enter current password"
                        defaultValue={password}
                        onBlur={(e) => {
                          onChangePassword(e.target.value);
                        }}
                        type="password"
                      />
                      <DesktopInputError>
                        {passwordError}
                      </DesktopInputError>
                    </DesktopFormField>
                  </DesktopFieldContainer>
                  <Divider
                    sx={{
                      margin: "24px 0px",
                    }}
                  />
                  <DesktopFieldContainer>
                    <DesktopLabel>
                      {t("Password.NewPassword")}
                    </DesktopLabel>
                    <DesktopFormField>
                      <DesktopTextField
                        sx={{
                          maxWidth: "512px",
                        }}
                        label="Enter new password"
                        defaultValue={newPassword}
                        onBlur={(e) => {
                          onChangeNewPassword(e.target.value);
                        }}
                        type="password"
                      />
                      <Typography style={{
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "20px",
                        color: "#475467",
                        marginTop: "6px"
                      }}>
                        {t("Password.NewPassword.HelpText")}
                      </Typography>
                      <DesktopInputError>
                        {newPasswordError}
                      </DesktopInputError>
                    </DesktopFormField>
                  </DesktopFieldContainer>
                  <Divider
                    sx={{
                      margin: "24px 0px",
                    }}
                  />
                  <DesktopFieldContainer>
                    <DesktopLabel>
                      {t("Password.ConfirmPassword")}
                    </DesktopLabel>
                    <DesktopFormField>
                      <DesktopTextField
                        sx={{
                          maxWidth: "512px",
                        }}
                        label="Enter confirm password"
                        defaultValue={confirmPassword}
                        onBlur={(e) => {
                          onChangeConfirmPassword(e.target.value);
                        }}
                        type="password"
                      />
                      <DesktopInputError>
                        {confirmPasswordError}
                      </DesktopInputError>
                    </DesktopFormField>
                  </DesktopFieldContainer>
                  <DesktopButtonContainer>
                    <Button
                      sx={{
                        maxWidth: "80px",
                        height: "40px",
                        fontSize: "14px",
                        fontWeight: "600",
                        lineHeight: "20px",
                        backgroundColor: "#FFFFFF",
                        color: "#344054"
                      }}
                    >
                      {t("CommonStrings.Cancel")}
                    </Button>
                    <Button
                      sx={{
                        maxWidth: "129px",
                        height: "40px",
                        fontSize: "14px",
                        fontWeight: "600",
                        lineHeight: "20px",
                        marginLeft: "24px"
                      }}
                    >
                      {t("CommonStrings.SaveChanges")}
                    </Button>
                  </DesktopButtonContainer>
                </DesktopFormContainer>
              </Box>
            </Grid>
            <Grid item xs={6} md={4}></Grid>
          </Grid>
        </div>
      </DesktopMainContainer>
    </Box>
  );
  return (
    <Box>
      <MobileDisplay />
      <DesktopDisplay />
    </Box>
  );
};

export default Password;
