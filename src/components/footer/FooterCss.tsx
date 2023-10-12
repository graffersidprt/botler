import { makeStyles } from "@material-ui/core/styles";

export const footerStyle = makeStyles((theme) => ({
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
      marginTop: "9px",
      // position: "fixed",
      bottom: 8,
      width: "-webkit-fill-available",
      // paddingRight: "28px"
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
      marginLeft: "32px",
      marginRight: "32px",
      // gap: "64px",
      // margin: "140px auto",
      // // backgroundColor: "white",
      // maxWidth: "650px",
      // width: "100%",
      // height: "500px",
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      // flexDirection: "column",
    },
    rightContent: {
      width: "360px",
      height: "350px",
      marginLeft: "25px",
      marginTop: "50px",
    },
    descriptionContainer: {
      color: "#FFFFFF",
      textAlign: "center",
      marginLeft: "85px",
      marginRight: "85px",
      marginTop: "60px",
    },
    carouselContent: {
      // backgroundColor: "#FFFFFF",
      marginTop: "45px",
    },
    carouselItem: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
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
    }
  }));