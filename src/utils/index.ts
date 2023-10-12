import i18next, { t } from "i18next";
import { lightTheme } from "../themes";
import en_language from '../constants/locals/en.json';
import fn_language from '../constants/locals/fr.json';
import axios from "axios";
import { get } from "http";
import { getUserTokenFromCookies } from "../app/cookies";
import { BASE_URL } from "../configs/api";
import ComponentsOverrides from "../themes/overrides";
import { useEffect, useState } from "react";
/**
 * @module utils
 * @description
 * function for merge the custom styles overridding into the theme
 *
 */
export const themeWithOverrides = () => {
  const themeWithOverrides = {
    ...lightTheme,
    components: {
      ...lightTheme.components,
      ...ComponentsOverrides(lightTheme),
    },
  };
  return themeWithOverrides;
};

/**
 * Object for all type of Regex validation for the form
 * @constant
 * @type {object}
 * @default
 * @property {object} name - The name of the user
 * @property {object} email - The email of the user
 * @property {object} password - The password of the user
 *
 * @example
 * const regex = {
 * name: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
 * email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
 * password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
 * }
 * */
export const VALIDATION_REGEX = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
  verificationCode: /^[0-9]{6}$/,
  phoneNumber: /^[0-9]{10}$/,
};

/** to validate the email address
 * @function
 * @param {string} email - The email of the user
 * @returns {boolean} - Return true if email is
 * */
export const isValidEmail = (email: string) => {
  return VALIDATION_REGEX.email.test(email);
};

/**
 * Function for check email is valid or not using regex validation and email is empty or not
 * @function
 * @param {string} email - The email of the user
 * @returns {boolean} - Return true if email is valid and not empty
 * @example
 * const isValidEmail = validateEmail(' ')
 * */
export const isEmailValid = (email: string ) => {
    const isEmpty = email === "";
    let errorMsg = "";
    if (isEmpty) {
      errorMsg = t("emailRequired");
    } else if (!VALIDATION_REGEX.email.test(email)) {
      errorMsg = t("emailError");
    }
      return errorMsg;
  };
/**
 * Function for check name is empty or not and contains only alphabets or not
 * @function
 * @param {string} name - The name of the user
 * @returns {boolean} - Return true if name is valid and not empty
 */
export const isNameValid = (name: string, nameType: string) => {
  const isEmpty = name === "";
  let errorMsg = "";
  if (isEmpty) {
    errorMsg = `${nameType} is required`;
  }
  return errorMsg;
};


/**
 * Function for check password is empty or not and contains uppercase, lowercase, number and special character or not
 * @function
 * @param {string} password - The password of the user
 * @returns {boolean} - Return true if password is valid and not empty
 * @example
 * const isValidPassword = validatePassword(' ')
 * */

export const isPasswordValid = (password: string) => {
  const isEmpty = password === "";
  let errorMsg = "";
  if (isEmpty) {
    errorMsg = "Password is required";
  } else if (!VALIDATION_REGEX.password.test(password)) {
    errorMsg = "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, and one digit";
  }
  return errorMsg;
};

/**
 * Function for check password and confirm password is same or not and contains uppercase, lowercase, number and special character or not
 * @function
 * @param {string} password - The password of the user
 * @param {string} confirmPassword - The confirm password of the user
 * @returns {boolean} - Return true if password and confirm password is same and valid
 * @example
 * const isValidConfirmPassword = validateConfirmPassword(' ', ' ')
 */

export const isConfirmPasswordValid = (password: string, confirmPassword: string) => {
  const isEmpty = confirmPassword === "";
  let errorMsg = "";
  if (isEmpty) {
    errorMsg = "Confirm password is required";
  } else if (password !== confirmPassword) {
    errorMsg = "Password and confirm password must be same";
  }
  return errorMsg;
};

/**
 * Function for check phone number is empty or not able to add alphabets and contains only 10 digit or not using regex validation'
 * @function 
 * @param {string} phoneNumber - The phone number of the user
 * @returns {boolean} - Return true if phone number is valid and not empty
 * @example
 * const isValidPhoneNumber = validatePhoneNumber(' ')
 */

export const isPhoneNumberValid = (phoneNumber: string) => {
  const isEmpty = phoneNumber === "";
  let errorMsg = "";
  if (isEmpty) {
    errorMsg = "Phone number is required";
  } else if (!VALIDATION_REGEX.phoneNumber.test(phoneNumber)) {
    errorMsg = "Phone number must be at least 10 characters long and contain only digits";
  }
  return errorMsg;
};

/**
 * Function for check verification code is empty or not and contains only 6 digit or not using regex validation'
 * @function
 * @param {string} verificationCode - The verification code of the user
 * @returns {boolean} - Return true if verification code is valid and not empty
 * @example
 * const isValidVerificationCode = validateVerificationCode(' ')
 * */
export const isVerificationCodeValid = (verificationCode: string) => {
  const isEmpty = verificationCode === "";
  let errorMsg = "";
  if (isEmpty) {
    errorMsg = "Verification code is required";
  } else if (!VALIDATION_REGEX.verificationCode.test(verificationCode)) {
    errorMsg = "Verification code must be at least 6 characters long and contain only digits";
  }
  return errorMsg;
}

/**
 * Function for axios instance for api call with base url and 
 * headers for authorization and content type application/json 
 * and application/x-www-form-urlencoded for form data and json 
 * data respectively
 */
export const apiService = axios.create({
  baseURL: BASE_URL,
  // headers: {
  //   "Content-Type": "application/json",
  //   "Accept": "application/json",
  //   "Authorization": "Bearer " + getUserTokenFromCookies('userData'),
  // },
});

/**
 * Function for pagination for table of the data
 * @function
 * @param {number} rows - The page number of the table
 * @param {number} rowsPerPage - The limit of the table
 * @returns {number} - Return the page number and limit of the table
 * @example
 * const paginationNumber = pagination(1, 10)
 * */
export const paginationNumber = (rows: number, rowsPerPage: number) => {
  return Math.ceil( rows / rowsPerPage)
}

/**
 * Function for get the screen size of the device
 * @function
 * @returns {string} - Return the screen size of the device
 * @example
 * const screenSize = getScreenSize()
 * */
export function getScreenSize(setIsMobile: any) {
  const mediaQuery = window.matchMedia('(max-width: 768px)');

  const handleMediaChange = (e: any) => {
    setIsMobile(e.matches);
  };

  mediaQuery.addListener(handleMediaChange);

  return () => {
    mediaQuery.removeListener(handleMediaChange);
  };
}
