import * as React from "react";
import { Box, BoxProps, TextField, Checkbox, Button } from "@mui/material";
import { useState } from "react";
import { isEmailValid, isNameValid, isPhoneNumberValid } from "../../../../utils";
import MailIcon from "../../../../assets/images/mail-icon.svg";
import PhoneIcon from "../../../../assets/images/phone-icon.svg";
import { useTranslation } from "react-i18next";
import { MobileFormContainer, MobileFormField, MobileFormLabel, MobileTextField, MobileInputError, MobileEmailLable, MobileEmailLableText, MobilePolicyCheck, MobilePolicyCheckText, MobileButtonContainer, DesktopFormContainer, DesktopFormField, DesktopFormLabel, DesktopTextField, DesktopInputError, DesktopEmailLable, DesktopEmailLableText, DesktopPolicyCheck, DesktopPolicyCheckText, DesktopButtonContainer, DesktopTopFormField } from "./ContactCss";

const Contact = () => {
  const { t } = useTranslation("translation");
  const [firstName, setFirstName] = useState<String>("");
  const [firstNameError, setFirstNameError] = useState<String>("");
  const [lastName, setLastName] = useState<String>("");
  const [lastNameError, setLastNameError] = useState<String>("");
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [cellNumber, setCellNumber] = useState<string>("");
  const [cellNumberError, setCellNumberError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");
  const [policyCheck, setPolicyCheck] = useState<boolean>(false);
  

  function Item(props: BoxProps) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          ...sx,
        }}
        {...other}
      />
    );
  }

  /**
   * Function for handle First name change
   * @function
   * @param {string} value - The First name value
   * @returns {void}
   */
  const onChangeFirstName = (value: string) => {
    setFirstName(value);
    const errorMsg = isNameValid(value, "Name");
    setFirstNameError(errorMsg);
  };

  /**
   * Function for handle Last name change
   * @function
   * @param {string} value - The Last name value
   * @returns {void}
   */
  const onChangeLastName = (value: string) => {
    setLastName(value);
    const errorMsg = isNameValid(value, "Name");
    setLastNameError(errorMsg);
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
   * Function for handle cell number change
   * @function
   * @param {string} value - The cell number value
   * @returns {void}
    */
  const onChangeCellNumber = (value: string) => {
    setCellNumber(value);
    const errorMsg = isPhoneNumberValid(email);
    setCellNumberError(errorMsg);
  };

  const MobileDisplay = () => (
    <Box sx={{ display: { sm: "block", md: "none", lg: "none", xl: "none" } }}>
      <Box>
        <MobileFormContainer>
          <div>
            <MobileFormField>
              <MobileFormLabel>{t("Help.Contact.FirstName")}</MobileFormLabel>
              <MobileTextField
                label="Enter your first name"
                defaultValue={firstName}
                onBlur={(e: any) => {
                  onChangeFirstName(e.target.value);
                }}
              />
              <MobileInputError>
                {firstNameError}
              </MobileInputError>
            </MobileFormField>
            <MobileFormField>
              <MobileFormLabel>
                {t("Help.Contact.LastName")}
              </MobileFormLabel>
              <MobileTextField
                label="Enter your last name"
                defaultValue={lastName}
                onBlur={(e) => {
                  onChangeLastName(e.target.value);
                }}
              />
              <MobileInputError>
                {lastNameError}
              </MobileInputError>
            </MobileFormField>
          </div>
          <MobileFormField>
            <MobileFormLabel>
              {t("Help.Contact.EmailAddress")}
            </MobileFormLabel>
            <MobileTextField
              label={
                <MobileEmailLable>
                  <img
                    src={MailIcon}
                    alt="mail-icon"
                    style={{ width: "16px", height: "13px" }}
                  />
                  <MobileEmailLableText>
                    you@company.com
                  </MobileEmailLableText>
                </MobileEmailLable>
              }
              defaultValue={email}
              onBlur={(e) => {
                onChangeEmail(e.target.value);
              }}
            />
            <MobileInputError>
              {emailError}
            </MobileInputError>
          </MobileFormField>
          <MobileFormField>
            <MobileFormLabel>
              {t("Help.Contact.CellNumber")}
            </MobileFormLabel>
            <MobileTextField
              label={
                <MobileEmailLable>
                  <img
                    src={PhoneIcon}
                    alt="phone-icon"
                    style={{ width: "11px", height: "16px" }}
                  />
                  <MobileEmailLableText>
                    +1 (123) 123-4556
                  </MobileEmailLableText>
                </MobileEmailLable>
              }
              defaultValue={cellNumber}
              onBlur={(e) => {
                onChangeCellNumber(e.target.value);
              }}
            />
            <MobileInputError>
              {cellNumberError}
            </MobileInputError>
          </MobileFormField>
          <MobileFormField>
            <MobileFormLabel>
              {t("Help.Contact.Message")}
            </MobileFormLabel>
            <MobileTextField
              sx={{
                "& .MuiInputBase-root": {
                  padding: "0px",
                },
              }}
              label="Leave us a message..."
              multiline
              rows={4}
              defaultValue={message}
              onBlur={(e) => {
                setMessage(e.target.value);
              }}
            />
            <MobileInputError>
              {messageError}
            </MobileInputError>
          </MobileFormField>
          <MobilePolicyCheck>
            <Checkbox
              defaultChecked
              style={{ backgroundColor: "white", marginLeft: "-10px" }}
            />
            <MobilePolicyCheckText>
              {t("Help.Contact.PrivacyPolicyMessage")}
            </MobilePolicyCheckText>
          </MobilePolicyCheck>
          <MobileButtonContainer>
            <Button
              sx={{
                maxWidth: "154px",
                height: "48px",
              }}
            >
              {t("Help.Contact.SubmitButton")}
            </Button>
          </MobileButtonContainer>
        </MobileFormContainer>
      </Box>
    </Box>
  );

  const DesktopDisplay = () => (
    <Box
      sx={{ display: { sm: "none", md: "block", lg: "block", xl: "block" } }}
    >
      <Box
        sx={{
          display: "grid",
          gridAutoColumns: "1fr",
          gap: 1,
        }}
      >
        <Item sx={{ gridRow: "1", gridColumn: "span 3" }}>
          <Box>
            <DesktopFormContainer>
              <DesktopTopFormField>
                <DesktopFormField>
                  <DesktopFormLabel>
                    {t("Help.Contact.FirstName")}
                  </DesktopFormLabel>
                  <DesktopTextField
                    style={{
                      width: "98%",
                    }}
                    label="Enter your name"
                    defaultValue={firstName}
                    onBlur={(e) => {
                      onChangeFirstName(e.target.value);
                    }}
                  />
                  <DesktopInputError>
                    {firstNameError}
                  </DesktopInputError>
                </DesktopFormField>
                <DesktopFormField
                  style={{
                    marginLeft: "20px",
                  }}
                >
                  <DesktopFormLabel>
                    {t("Help.Contact.LastName")}
                  </DesktopFormLabel>
                  <DesktopTextField
                    label="Enter your name"
                    defaultValue={firstName}
                    onBlur={(e) => {
                      onChangeFirstName(e.target.value);
                    }}
                  />
                  <DesktopInputError>
                    {firstNameError}
                  </DesktopInputError>
                </DesktopFormField>
              </DesktopTopFormField>
              <DesktopFormField>
                <DesktopFormLabel>
                  {t("Help.Contact.EmailAddress")}
                </DesktopFormLabel>
                <DesktopTextField
                  label={
                    <DesktopEmailLable>
                      <img
                        src={MailIcon}
                        alt="mail-icon"
                        style={{ width: "16px", height: "13px" }}
                      />
                      <DesktopEmailLableText>
                        you@company.com
                      </DesktopEmailLableText>
                    </DesktopEmailLable>
                  }
                  defaultValue={email}
                  onBlur={(e) => {
                    onChangeEmail(e.target.value);
                  }}
                />
                <DesktopInputError>
                  {emailError}
                </DesktopInputError>
              </DesktopFormField>
              <DesktopFormField>
                <DesktopFormLabel>
                  {t("Help.Contact.CellNumber")}
                </DesktopFormLabel>
                <DesktopTextField
                  label={
                    <DesktopEmailLable>
                      <img
                        src={PhoneIcon}
                        alt="phone-icon"
                        style={{ width: "11px", height: "16px" }}
                      />
                      <DesktopEmailLableText>
                        +1 (123) 123-4556
                      </DesktopEmailLableText>
                    </DesktopEmailLable>
                  }
                  defaultValue={email}
                  onBlur={(e) => {
                    onChangeEmail(e.target.value);
                  }}
                />
                <DesktopInputError>
                  {emailError}
                </DesktopInputError>
              </DesktopFormField>
              <DesktopFormField>
                <DesktopFormLabel>
                  {t("Help.Contact.Message")}
                </DesktopFormLabel>
                <DesktopTextField
                  sx={{
                    "& .MuiInputBase-root": {
                      padding: "0px",
                    },
                  }}
                  label="Leave us a message..."
                  multiline
                  rows={4}
                  defaultValue={email}
                  onBlur={(e) => {
                    onChangeEmail(e.target.value);
                  }}
                />
                <DesktopInputError>
                  {emailError}
                </DesktopInputError>
              </DesktopFormField>
              <DesktopPolicyCheck>
                <Checkbox
                  defaultChecked
                  style={{ backgroundColor: "white", marginLeft: "-10px" }}
                />
                <DesktopPolicyCheckText>
                  {t("Help.Contact.PrivacyPolicyMessage")}
                </DesktopPolicyCheckText>
              </DesktopPolicyCheck>
              <DesktopButtonContainer>
                <Button
                  sx={{
                    maxWidth: "154px",
                    height: "48px",
                  }}
                >
                  {t("Help.Contact.SubmitButton")}
                </Button>
              </DesktopButtonContainer>
            </DesktopFormContainer>
          </Box>
        </Item>
        <Item sx={{ gridRow: "1", gridColumn: "4 / 5" }}></Item>
      </Box>
    </Box>
  );

  return (
    <Box>
      <MobileDisplay />
      <DesktopDisplay />
    </Box>
  );
};

export default Contact;
