import { makeStyles } from "@material-ui/core/styles";

export const verficationCodeStyle = makeStyles((theme) => ({
    // root: {
    //   flexGrow: 1,
    // },
    // Web-specific styles
    input: {
      "&.css-1islzwq-MuiInputBase-input-MuiFilledInput-input": {
        fontSize: "48px !important",
        fontWeight: "600 !important",
        lineHeight: "60px !important",
        color: "#082B44 !important",
        padding: "0px !important",
        height: "100% !important",
      },
    },
  [theme.breakpoints.up("md")]: {
    leftComponent: {
      backgroundColor: "FFFFFF", // Replace with your desired styles
      padding: theme.spacing(2),
    },
    mainContainer: {
      padding: theme.spacing(2),
    },
    leftContainer: {
      display: "flex",
      padding: "0px, 32px, 0px, 32px",
    },
    leftContent: {
        maxWidth: "360px",
      width: "100%",
      gap: "80px",
      margin: "30px auto",
    },
    image: {
      width: "142px",
      height: "42px",
    },
    signUpFormContainer: {
      marginTop: "60px",
    },
    signUpHeading: {
      fontSize: "36px",
      fontWeight: 600,
      lineHeight: "44px",
      color: "#101828",
    },
    signUpForm: {
      marginBottom: "20px",
    },
    signUpFormPassword : {
      marginBottom: "6px",
    },
    formInput: {
      marginTop: "6px",
    },
    signUpButton: {
      color: "#FFFFFF",
      width: "360px",
      height: "44px",
      marginTop: "50px",
      borderRadius: "8px",
      border: "1px",
      padding: "10px, 18px, 10px, 18px",
      backgroundColor: "#06AED4",
      "&:hover": {
        backgroundColor: "#06AED4 ",
      },
      "& .MuiButton-label": {
        fontWeight: 600,
        fontSize: 16,
        lineHeight: 24,
        weight: 122,
        height: 24,
        textTransform: "none",
      },
    },
    googleLogo: {
      marginRight: "8px",
    },
    signUpWithGoogleButton: {
      color: "#FFFFFF",
      width: "360px",
      height: "44px",
      marginTop: "20px",
      borderRadius: "8px",
      border: "1px",
      padding: "10px, 18px, 10px, 18px",
      backgroundColor: "#FFFFFF",
      "&:hover": {
        backgroundColor: "#FFFFFF",
      },
      "& .MuiButton-label": {
        fontWeight: 600,
        fontSize: 16,
        lineHeight: 24,
        weight: 122,
        height: 24,
        textTransform: "none",
      },
    },
    alreadyLogin: {
      marginTop: "32px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    loginButton: {
      color: "#051C2E",
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "20px",
    },
    leftFooter: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    leftFooterContent: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
    },
    mailIcon: { 
      color: "#667085",
      marginRight: "8px",
    },

    rightComponent: {
      backgroundColor: "#082B44", // Replace with your desired styles
      padding: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    rightContainer: {
      gap: "64px",
      margin: "80px auto",
      // backgroundColor: "white",
      maxWidth: "650px",
      width: "100%",
      height: "500px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    rightContent: {
      width: "512px",
      height: "320px",
      radius: "13px",
      backgroundColor: "#FFFFFF",
    },
    descriptionContainer: {
      marginTop: "60px",
      color: "#FFFFFF",
      textAlign: "center",
    }
  },

  // Mobile-specific styles
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      padding: "48px 16px",
    },
    headerContainer: {
    },
    mainLogo: {
      width: "32px",
      height: "32px",
    },
    headerText: {
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "32px",
      color: "#101828",
      marginTop: "24px",
    },
    headerText2: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
      color: "#475467",
      marginTop: "8px",
    },
    header2Container: {
      display: "flex",
      flexDirection: "row"
    },
    emailBold: {
      fontSize: "14px",
      lineHeight: "20px",
      color: "#475467",
      marginTop: "8px",
      fontWeight: 600,
      marginLeft: "4px",
    },
    validationContainer: {
      marginTop: "32px",
    },
    OTPBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "64px",
      height: "64px",
      borderRadius: "8px",
      border: "3px solid #082B44",
      boxShadow: "2px 2px 4px rgba(16, 24, 40, 0)",
      padding: "2px 8px",
    },
    OTPBoxContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    OTPText: {
      fontSize: "48px",
      fontWeight: 600,
      lineHeight: "60px",
      color: "#082B44",
    },
    cancelButton: {
      marginTop: "16px",
      color: "#344054",
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "24px",
      backgroundColor: "#FFFFFF",
    },
  }
  }));