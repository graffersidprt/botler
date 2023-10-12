import { makeStyles } from "@material-ui/core/styles";
import BackGroundImage from "../../../assets/images/signin-backgroung-img.svg";

export const signUpStyle = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    leftComponent: {
      backgroundColor: "FFFFFF", // Replace with your desired styles
      padding: theme.spacing(2),
    },
    leftContainer: {
      display: "flex",
      padding: "0px, 32px, 0px, 32px",
    },
    leftContent: {
      width: "360px",
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
    rememberMe: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    signInHeader: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
    rememberContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "-10px",
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
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      }
    },
    leftFooter: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: "8px",
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
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    rightContainer: {
      backgroundImage: `url(${BackGroundImage})`,
      width: "100%",
      height: "100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    rightContent: {
      display: "flex",
      marginLeft: "72px",
      marginRight: "72px",
      color: "#FFFFFF",
      justifyContent: "flex-end",
      height: "100%",
    flexDirection: 'column',
    alignItems: 'center',
    },
    rightContentFooter: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: "20px",
      marginBottom: "50px",
    },
    rightContentFooterText: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "10px",
    },
    descriptionContainer: {
      color: "#FFFFFF",
      textAlign: "center",
      marginLeft: "85px",
      marginRight: "85px",
    },
    carouselContent: {
      // backgroundColor: "#FFFFFF",
    },
    carouselItem: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "5px",
    },
    carouselItemContent: {
      // width: "100%",
      width: "180px",
      height: "88px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "5px",
    },
    profileContainer: {
      display: "flex",
      alignItems: "center",
      marginTop: "20px",
      marginBottom: "50px",
    },
    profileDetails: {
      marginLeft: "16px",
    },
    profileContainer1: {
      display: "flex",
      alignItems: "center",
      marginLeft: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      MainContainer: {
        padding: "48px 16px",
      },
      HeaderContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      logo: {
        width: "32px",
        height: "32px",

      },
      title: {
        fontSize: "24px",
        fontWeight: 600,
        lineHeight: "32px",
        color: "#101828",
        marginTop: "24px",
      },
      FormContainer: {
        marginTop: "32px",
      },
      FormField: {
        marginBottom: "20px",
      },
      TextField: {
        marginTop: "6px",
      },
      Label: {
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: "20px",
        color: "#344054",
        marginBottom: "6px",
      },
      InputError: {
        fontSize: "12px",
        fontWeight: 200,
        color: "#FF0000",
      },
      passwordHintMobile: {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "20px",
        color: "#475467",
        marginTop: "6px",
      },
    },
  }));