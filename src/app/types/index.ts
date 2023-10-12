

/**
 * Interface for the sign up data
 * @interface SignUpData
 * @property {string} email - The email of the user
 * @property {string} password - The password of the user
 * @property {string} given_name - The name of the user
 * @property {string} family_name - The family name of the user
 *
 * @example
 * const signUpData: SignUpData = {
 * email: 'user@gmail.com',
 * password: 'password',
 * given_name: 'John',
 * family_name: 'Doe'
 * }
 */
export interface SignUpData {
  email: string;
  password: string;
  given_name: string;
  family_name: string;
}

/**
 * Interface for the sign in data
 * @interface SignInData
 * @property {string} email - The email of the user
 * @property {string} password - The password of the user
 * @example
 * const signInData: SignInData = {
 * email: '
 * password: 'password'
 * }
 * */
export interface SignInData {
  email: string;
  password: string;
}

/**
 * Interface for the Signup form data
 * @interface SignUpFormData
 * @property {string} name - The name of the user
 * @property {string} email - The email of the user
 * @property {string} password - The password of the user
 *
 * @example
 * const signUpFormData: SignUpFormData = {
 *
 * name: 'John Doe',
 * email: 'john@gmail.com',
 * password: 'password'
 * }
 *  */
export interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  errors: {
    name: string;
    email: string;
    password: string;
  };
}

/**
 * Interface for the Confirm Signup data
 * @interface ConfirmSignUpData
 * @property {string} username - The email of the user
 * @property {string} code - The verification code of the user
 * @example
 * const confirmSignUpData: ConfirmSignUpData = {
 * username: 'test@gmail.com',
 * code: '123456' //code from email
 * }
 * */
export interface ConfirmSignUpData {
  username: string;
  code: string;
}

/**
 * Interface for the botler user request data
 * @interface BotlerUserRequestData
 * @property {string} username - The username of the user
 * @property {string} email - The email of the user
 * @property {string} given_name - The given_name of the user
 * @property {string} family_name - The family_name of the user
 * 
 * @example
 * const botlerUserRequestData: BotlerUserRequestData = {
 * username: "",
 * email: "",
 * given_name: "",
 * family_name: ""
 * }
 * */

export interface BotlerUserRequestData {
  username: string;
  email: string;
  given_name: string;
  family_name: string;
}

/** Interface for the botler user token data
 * @interface BotlerUserTokenData
 * @property {string} token - The access_token of the user
 * @example
 * const botlerUserTokenData: BotlerUserTokenData = {
 * token: ""
 * }
 * */
export interface BotlerUserTokenData {
  token: string;
};
