import { makeStyles } from "@material-ui/core/styles";

export const forgetPasswordStyle = makeStyles((theme) => ({
    mainContainer: {
    },
    contentContainer: {
        padding: "37% 16px",
    },
    HeaderContainer: {
        display: "flex",
        flexDirection: "column",
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
      supportingText: {
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "24px",
        color: "#667085",
        marginTop: "8px",
      },
      FormContainer: {
        marginTop: "32px",
      },
      FormField: {
        marginBottom: "10px",
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
      alreadyLogin: {
        marginTop: "32px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      loginButton: {
        color: "#051C2E",
        fontSize: "14px",
        fontWeight: 700,
        lineHeight: "20px",
        cursor: "pointer",
        "&:hover": {
          textDecoration: "underline",
        },
      },
}));