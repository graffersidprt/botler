// import { API_END_POINTS } from '../../constants/server';
// import api from '../../utils/api';
import { BotlerUserMockData, BotlerUserMockDataWithVerifiedEmail } from '../mockData/mockData';

/**
 * @description Service to call user signup API endpoint to create a 
 * new user account in the system and return the response.
 * @param {object} userData - User data to be sent to the API endpoint.
 * @returns {object} - Response from the API endpoint.
 * @memberof CreateBotlerUserService
 */

export const CreateBotlerUserService = async (userData: any) => {
  try {
    // const response = await apiService.post(API_END_POINTS.userSignUp, userData);
    const response = await BotlerUserMockData;
    console.log('response', response);
    return response;
  } catch (error) {
    return error;
  }
};

/**
 * @description Service to verify user email address by calling the API endpoint.
 * @param {object} userData - User data to be sent to the API endpoint.
 * @returns {object} - Response from the API endpoint.
 * @memberof BotlerUserVerifiedService
 * @example BotlerUserVerifiedService(userData);
 * */
export const BotlerUserVerifiedService = async (userData: any) => {
  try {
    // const response = await apiService.post(API_END_POINTS.userVerifyEmail, userData);
    const response = await BotlerUserMockDataWithVerifiedEmail;
    console.log('response', response);
    return response;
  } catch (error) {
    return error;
  }
}
