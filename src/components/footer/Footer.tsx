import { Divider, Typography } from "@mui/material";
import React from "react";
import FormSelectInput from "../Dropdown";
import { footerStyle } from "./FooterCss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const classes = footerStyle();
  const { t, i18n } = useTranslation("translation");
  /**
   * Function for handle language change with i18n library
   */
  const handleLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    if (event) {
      i18n.changeLanguage("fr");
    } else {
      i18n.changeLanguage("en");
    }
  };

  return (
    <div style={{
      marginTop: "32px"
    }}>
    <Divider />
    <div className={classes.leftFooter}>
      <div>
        <Typography
          sx={{ fontSize: "12px", fontWeight: 400, color: "#667085" }}
        >
          © 2023 Botler. All rights reserved.
        </Typography>
      </div>
      <div className={classes.leftFooterContent}>
        <FormSelectInput handleLanguage={handleLanguage} />
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 400,
            color: "#667085",
            marginRight: "16px",
          }}
        >
          Terms
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 400,
            color: "#667085",
            marginRight: "16px",
          }}
        >
          Privacy
        </Typography>
        <Typography
          sx={{ fontSize: "12px", fontWeight: 400, color: "#667085" }}
        >
          Cookies
        </Typography>
      </div>
    </div>
    </div>
  );
};

export default Footer;
