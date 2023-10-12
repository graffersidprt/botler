import {
  Box,
  BoxProps,
  TextField,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React, { useState } from "react";
import {
  isEmailValid,
  isNameValid,
  isPhoneNumberValid,
} from "../../../../utils";
import MailIcon from "../../../../assets/images/mail-icon.svg";
import PhoneIcon from "../../../../assets/images/phone-icon.svg";
import PhotoUploadIcon from "../../../../assets/images/photo-upload-icon.svg";
import { DesktopEmailLable, DesktopEmailLableText, DesktopFieldContainer, DesktopFormContainer, DesktopFormField, DesktopHeaderContent, DesktopHeaderDescriptionText, DesktopHeaderHeadingText, DesktopImageHelpingText, DesktopImageHelpingText2, DesktopInputError, DesktopLabel, DesktopMainContainer, DesktopTextField, DesktopUploadPhotoContainer, DesktopUploadPhotoContent, DesktopUploadPhotoMainContainer, MobileEmailLable, MobileEmailLableText, MobileFieldContainer, MobileFormContainer, MobileFormField, MobileHeaderContent, MobileHeaderDescriptionText, MobileHeaderHeadingText, MobileHeadingLabel, MobileInputError, MobileLabel, MobileMainContainer, MobileTextField } from "./profileCss";

const Profile = () => {
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


  /**
   * Function for handle First name change
   * @function
   * @param {string} value - The First name value
   * @returns {void}
   */
  const onChangeFirstName = (value: string) => {
    setFirstName(value);
    const errorMsg = isNameValid(value, "First Name");
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
    const errorMsg = isNameValid(value, "Last Name");
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
      <MobileMainContainer>
        <MobileHeaderContent>
          <MobileHeaderHeadingText>
            Profile
          </MobileHeaderHeadingText>
          <MobileHeaderDescriptionText>
            Update your photo and details here.
          </MobileHeaderDescriptionText>
        </MobileHeaderContent>
        <Divider
          sx={{
            margin: "24px 0px",
          }}
        />
        <MobileFormContainer>
          <MobileFieldContainer>
            <MobileHeadingLabel>
              Location - Language
            </MobileHeadingLabel>
            <MobileFormField>
              <FormControl sx={{ minWidth: "100%", marginTop: "10px" }}>
                <Select
                  value={10}
                  //   onChange={handleChange}
                  displayEmpty
                  sx={{
                    borderRadius: "8px",
                    border: "1px solid #D0D5DD",
                  }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <MobileInputError>
                {firstNameError}
              </MobileInputError>
            </MobileFormField>
          </MobileFieldContainer>
          <Divider
            sx={{
              margin: "24px 0px",
            }}
          />
          <MobileFieldContainer>
            <MobileHeadingLabel>
              Personal Info
            </MobileHeadingLabel>
            <div
              style={{
                marginTop: "8px",
              }}
            >
              <MobileFormField>
                <MobileLabel>
                  First name
                </MobileLabel>
                <MobileTextField
                  sx={{
                    maxWidth: "512px",
                  }}
                  label="Enter your name"
                  defaultValue={firstName}
                  onBlur={(e) => {
                    onChangeFirstName(e.target.value);
                  }}
                />
                <MobileInputError>
                  {firstNameError}
                </MobileInputError>
              </MobileFormField>
              <MobileFormField
                style={{
                  marginTop: "16px",
                }}
              >
                <MobileLabel>
                  Last name
                </MobileLabel>
                <MobileTextField
                  label="Enter your name"
                  defaultValue={firstName}
                  onBlur={(e) => {
                    onChangeLastName(e.target.value)
                  }}
                />
                <MobileInputError>
                  {firstNameError}
                </MobileInputError>
              </MobileFormField>
            </div>
          </MobileFieldContainer>
          <Divider
            sx={{
              margin: "24px 0px",
            }}
          />
          <MobileFieldContainer>
            <MobileLabel>
              Email address
            </MobileLabel>
            <MobileFormField>
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
          </MobileFieldContainer>
          <Divider
            sx={{
              margin: "24px 0px",
            }}
          />
          <MobileFieldContainer>
            <MobileLabel>
              Cell Number
            </MobileLabel>
            <MobileFormField>
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
                defaultValue={email}
                onBlur={(e) => {
                  onChangeEmail(e.target.value);
                }}
              />
              <MobileInputError>
                {emailError}
              </MobileInputError>
            </MobileFormField>
          </MobileFieldContainer>
          <Divider
            sx={{
              margin: "24px 0px",
            }}
          />
          <MobileFieldContainer>
            <MobileLabel>Your Photo</MobileLabel>
            {/* <div className={ProfileClasses.FormField}>
              <DesktopTextField
                label={
                  <div className={ProfileClasses.EmailLable}>
                    <img
                      src={PhoneIcon}
                      alt="phone-icon"
                      style={{ width: "11px", height: "16px" }}
                    />
                    <Typography className={ProfileClasses.EmailLableText}>
                      +1 (123) 123-4556
                    </Typography>
                  </div>
                }
                defaultValue={email}
                onBlur={(e) => {
                  onChangeEmail(e.target.value);
                }}
                className={ProfileClasses.TextField}
              />
              <DesktopInputError>
                {emailError}
              </Typography>
            </div> */}
          </MobileFieldContainer>
          <MobileFieldContainer>
            <Button
              sx={{
                maxWidth: "80px",
                height: "40px",
                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "20px",
                backgroundColor: "#FFFFFF",
                color: "#344054",
              }}
            >
              Cancel
            </Button>
            <Button
              sx={{
                maxWidth: "129px",
                height: "40px",
                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "20px",
                marginLeft: "24px",
              }}
            >
              Save Changes
            </Button>
          </MobileFieldContainer>
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
            Profile
          </DesktopHeaderHeadingText>
          <DesktopHeaderDescriptionText>
            Update your photo and details here.
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
                      Location - Language
                    </DesktopLabel>
                    <DesktopFormField>
                      <FormControl sx={{ minWidth: "100%" }}>
                        <Select
                          value={10}
                          //   onChange={handleChange}
                          displayEmpty
                          sx={{
                            borderRadius: "8px",
                            border: "1px solid #D0D5DD",
                          }}
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                      <DesktopInputError>
                        {/* {firstNameError} */}
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
                      Personal Info
                    </DesktopLabel>
                    <div>
                      <DesktopFormField>
                        <DesktopLabel>
                          First name
                        </DesktopLabel>
                        <DesktopTextField
                          sx={{
                            maxWidth: "512px",
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
                          marginTop: "16px",
                        }}
                      >
                        <DesktopLabel>
                          Last name
                        </DesktopLabel>
                        <DesktopTextField
                          label="Enter your name"
                          defaultValue={firstName}
                          onBlur={(e) => {
                            onChangeLastName(e.target.value);
                          }}
                        />
                        <DesktopInputError>
                          {lastNameError}
                        </DesktopInputError>
                      </DesktopFormField>
                    </div>
                  </DesktopFieldContainer>
                  <Divider
                    sx={{
                      margin: "24px 0px",
                    }}
                  />
                  <DesktopFieldContainer>
                    <DesktopLabel>
                      Email address
                    </DesktopLabel>
                    <DesktopFormField>
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
                  </DesktopFieldContainer>
                  <Divider
                    sx={{
                      margin: "24px 0px",
                    }}
                  />
                  <DesktopFieldContainer>
                    <DesktopLabel>
                      Cell Number
                    </DesktopLabel>
                    <DesktopFormField>
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
                          onChangeCellNumber(e.target.value);
                        }}
                      />
                      <DesktopInputError>
                        {cellNumberError}
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
                      Your Photo
                    </DesktopLabel>
                    <DesktopFormField>
                      <DesktopUploadPhotoContainer>
                        <img
                          src="https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
                          alt="photo"
                          style={{
                            width: "64px",
                            height: "64px",
                            borderRadius: "50%",
                          }}
                        />
                        <DesktopUploadPhotoMainContainer>
                          <DesktopUploadPhotoContent>
                            <img
                              src={PhotoUploadIcon}
                              alt="upload"
                              style={{ width: "20px", height: "20px" }}
                            />
                            <DesktopImageHelpingText style={{
                              marginTop: "24px",
                            }}>
                              <span
                                style={{
                                  fontSize: "14px",
                                  fontWeight: 600,
                                  lineHeight: "20px",
                                  color: "#051C2E",
                                }}
                              >
                                Click to upload
                              </span>
                              or drag and drop
                            </DesktopImageHelpingText>
                            <DesktopImageHelpingText2>
                              SVG, PNG, JPG or GIF (max. 800x400px)s
                            </DesktopImageHelpingText2>
                          </DesktopUploadPhotoContent>
                        </DesktopUploadPhotoMainContainer>
                      </DesktopUploadPhotoContainer>
                    </DesktopFormField>
                  </DesktopFieldContainer>
                  <div>
                    <Button
                      sx={{
                        maxWidth: "80px",
                        height: "40px",
                        fontSize: "14px",
                        fontWeight: "600",
                        lineHeight: "20px",
                        backgroundColor: "#FFFFFF",
                        color: "#344054",
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      sx={{
                        maxWidth: "129px",
                        height: "40px",
                        fontSize: "14px",
                        fontWeight: "600",
                        lineHeight: "20px",
                        marginLeft: "24px",
                      }}
                    >
                      Save Changes
                    </Button>
                  </div>
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

export default Profile;
