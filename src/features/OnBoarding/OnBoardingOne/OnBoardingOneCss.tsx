import { makeStyles } from "@material-ui/core/styles";

export const onBoardingOneStyle = makeStyles((theme) => ({
    mainContainer: {
        backgroundColor: "#082B44",
        height: "100vh",
    },
    headerRow: {
        display: "flex",
        justifyContent: "flex-end",
    },
    closeIcon: {
        width: "40px",
        height: "40px",
        color: "#FFFFFF",
        marginTop: "6px",
        marginRight: "6px",
    },
    imageContainer: {
        display: "flex",
        justifyContent: "center",
        marginTop: "28.5px",
    },
    mainImg: {
        width: "339px",
        height: "203px",
    },
    contentContainer: {
        marginTop: "62px",
        marginLeft: "32px",
        marginRight: "32px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
    },
    contentHeading: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
    },
    statementIcon: {
        width: "46px",
        height: "46px",
    },
    headingText: {
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: "30px",
        color: "#FFFFFF",
    },
    footerContainer: {
        marginTop: "27px",
        display: "flex",
        flexDirection: "row",
        width: "96%",
        margin: "0 auto",
        justifyContent: "space-evenly",
        paddingTop: "22px",
    },
    footerIcon: {
        color: "#FFFFFF",
        width: "20px",
        height: "20px",
    },
    footerCircleIconSelected: {
        color: "#FFFFFF",
        width: "10px",
        height: "10px",
    },
    footerCircleIcon: {
        color: "#0A395B",
        width: "10px",
        height: "10px",
    },

}));