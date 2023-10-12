import axios from "axios";
import { BASE_URL } from "../configs/api";
import { getCookie, setCookie } from "./cookies"
import { CURRENT_BOTLER_USER_TOKEN_COOKIE_NAME, CURRENT_BOTLER_USER_TOKEN_COOKIE_MAX_AGE, RETURNING_USER_COOKIE_NAME, RETURNING_USER_COOKIE_MAX_AGE,
} from "../constants/server/cookies"

// Add a request interceptor
axios.interceptors.request.use(function (config: any) {
  // get current user token from cookies
  const currentBotlerUserToken = getCookie(CURRENT_BOTLER_USER_TOKEN_COOKIE_NAME);

  // if the current user token is available then add it to the request's Authorization header

  if (currentBotlerUserToken) {
    config.headers.Authorization = `Bearer ${currentBotlerUserToken}`;
  }

  return config;
}, function (error: any) {
  console.log('error', error);

  return Promise.reject(error);
});


// Add a response interceptor
axios.interceptors.response.use(function (response: any) {
  
  // get current user token from response's cookies
  const currentBotlerUserToken = response.headers['set-cookie']?.find((cookie: string) => cookie.includes("token"))?.split('=')[1]?.split(';')[0];

  // if the current user token is available then add it to the cookies
  if (currentBotlerUserToken) {
    setCookie(CURRENT_BOTLER_USER_TOKEN_COOKIE_NAME, currentBotlerUserToken, CURRENT_BOTLER_USER_TOKEN_COOKIE_MAX_AGE);
    setCookie(RETURNING_USER_COOKIE_NAME, new Date().getTime().toString(), RETURNING_USER_COOKIE_MAX_AGE);
  }
  
  return response;
}, function (error: any) {
  console.log('error', error);

  return Promise.reject(error);
});

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
