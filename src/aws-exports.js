const awsmobile = {
   aws_project_region: "ca-central-1",
   aws_cognito_identity_pool_id:
      "ca-central-1:d6d1c344-b644-483e-900b-2a73dd9f8301",
   aws_cognito_region: "ca-central-1",
   aws_user_pools_id: "ca-central-1_4EPn0aAUS",
   aws_user_pools_web_client_id: "1mop7mj9djlr9848rqbdj4s2p9",
   oauth: {
      domain: "auth.botler.com",
      scope: ["email", "openid", "profile", "aws.cognito.signin.user.admin"],
      redirectSignIn: "http://localhost:3000",
      redirectSignOut: "http://localhost:3000",
      responseType: "code"
   },
   federationTarget: "COGNITO_USER_POOLS",
   aws_cognito_username_attributes: ["EMAIL"],
   aws_cognito_social_providers: ["GOOGLE"],
   aws_cognito_signup_attributes: ["EMAIL", "GIVEN_NAME", "FAMILY_NAME"],
   aws_cognito_mfa_configuration: "OFF",
   aws_cognito_mfa_types: ["SMS"],
   aws_cognito_password_protection_settings: {
      passwordPolicyMinLength: 8,
      passwordPolicyCharacters: [
         "REQUIRES_LOWERCASE",
         "REQUIRES_NUMBERS",
         "REQUIRES_SYMBOLS",
         "REQUIRES_UPPERCASE"
      ]
   },
   aws_cognito_verification_mechanisms: ["EMAIL"]
};

export default awsmobile;
