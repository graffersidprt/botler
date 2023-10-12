import { makeStyles } from "@material-ui/core/styles";

export const sidebarStyle = makeStyles((theme) => ({
    creditSection: {
        padding: theme.spacing(2),
    },
    creditSection__content:{
        marginTop: "8px",
    },
    creditSection__button:{
        marginTop: "8px",
        width: "175px",
        height: "36px",

    },
    img_Menu_Logo:{
            marginRight: "-8px",
    },


    mainContainer: {
        backgroundColor: "#F9FAFB",
    },
    headerContainer: {
        backgroundColor: "#FFFFFF",
        padding: "12px 8px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
  }));