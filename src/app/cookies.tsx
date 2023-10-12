

import { RETURNING_USER_COOKIE_NAME, RETURNING_USER_COOKIE_MAX_AGE, CURRENT_BOTLER_USER_TOKEN_COOKIE_NAME, CURRENT_BOTLER_USER_TOKEN_COOKIE_MAX_AGE } from "../constants/server/cookies";


/** set cookie 
 * @function
 * @param {string} name - The name of the cookie
 * @param {string} value - The value of the cookie
 * @param {number} ms - The number of milliseconds to expire
 * @param {string} path - The path of the cookie. Default value is '/'
  * @example
  * setCookie('userData', userData, 1000) // sets a cookie called 'userData' with the value of userData for 1000 milliseconds
  * */
export const setCookie = (name: string, value: string, ms: number, path: string = "/") => {
  const date = new Date();
  const expires = `expires=${date.setTime(date.getTime() + ms)}`;
  document.cookie = `${name}=${value};${expires};path=${path}`;
};

/** set token in cookie
 * @function
 * @param {string} name - The name of the cookie
 * @param {string} value - The value of the cookie
 * @param {number} days - The number of days to expire
 * @example
 * setTokenInCookie('userToken', userToken, 1)
 * */
export const setTokenInCookie = (name: string, value: string, days: number) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}


/** get cookie
 * @function
 * @param {string} name - The name of the cookie
 * @returns {string | null} - The cookie value or null
 * @example
 * const userToken = getCookie('userToken')
 **/
export const getCookie = (name: string): string | null => {
  const cookieString = document.cookie;
  const cookies = cookieString.split(';');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName.trim() === name) {
      return cookieValue;
    }
  }
  return null;
};


/** remove cookie
 * @function
 * @param {string} name - The name of the cookie
 * @param {string} path - The path of the cookie. Default value is '/'
 * @example
 * removeCookie('userToken')
 * */
export const removeCookie = (name: string, path: string = "/") => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`;
};

/** get userToken from cookies 
 * @function
 * @param {string} cookieName - The name of the cookie
 * @returns {string | null} - The user token or null
 * @example
 * const userToken = getUserTokenFromCookies('userToken')
 * if (userToken) {
 * return userToken
 * }
 * return null
 */
export const getUserTokenFromCookies = (cookieName: string): string | null => {
  const cookies = document.cookie.split("; ");
  const userToken = cookies.find((cookie) => cookie.includes(cookieName));
  if (userToken) {
    const userTokenParsed = userToken.split("=")[1];
    return userTokenParsed;
  }
  return null;
}

/** return if the user is a returning user or not. Use the constant RETURNING_USER_COOKIE_NAME to check if the cookie exists
 * @function
 * @returns {boolean} - True if the user is a returning user, false if not
 * @example 
 * const isReturningUser = isReturningUser()
 * 
 */
export const isReturningUser = (): boolean => {
  let cookie = getCookie(RETURNING_USER_COOKIE_NAME);
  if (cookie) {
    return true;
  }
  return false;
}

/** save the token of the Botler User in a cookie
 * @function
 * @param {string} token - The Botler User token
 * @example
 * saveReturningUserCookie(botlerUser)
 */
export const saveBotlerUserCookie = (token: string) => {
  // set the returning user cookie with true (y) value for one year
  setCookie(RETURNING_USER_COOKIE_NAME, 'y', RETURNING_USER_COOKIE_MAX_AGE);
  if (token) {
    setCookie(CURRENT_BOTLER_USER_TOKEN_COOKIE_NAME, token, CURRENT_BOTLER_USER_TOKEN_COOKIE_MAX_AGE);
  }
}