import React from "react";
import { Auth } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { useEffect, useState } from "react";
import SignUp from "../signup/signup";
import SignIn from "../signin/signin";
import { isReturningUser, saveBotlerUserCookie } from "../../../app/cookies";

// create a react component which is an empty div which covers the full screen and is blue
const BlankScreen = () => <div style={ { backgroundColor: "#0d4772", height: "100vh", width: "100vw" } }></div>;


// create and export a react component called Authenticator that will be used to wrap our pages
export default function Authenticator(props: any) {

   const [nextPage, setNextPage] = useState<string>("blank");

   useEffect(() => {
      Auth.currentAuthenticatedUser().then(async (user) => {
         console.log("user", user);
         setNextPage("children");
      }).catch((err) => {
         console.log("err", err);
         if (isReturningUser()) setNextPage("signin");
         else
            setNextPage("signup");
      });
   }, []);

   if (nextPage === "children") // TODO: remove after successful auth
      return props.children;

   if (nextPage === "signup")
      return <SignUp signInClicked={ () => setNextPage("signin") } googleSignInClicked={ () => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google }) } />;

   if (nextPage === "signin")
      return <SignIn signUpClicked={ () => setNextPage("signup") } googleSignInClicked={ () => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google }) } />;
   
   return <BlankScreen />;

}
