import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import HelpTabs from './Tabs';
import { HelpContainer, Heading, Description, MobileContainer, MobileHeading, DesktopContainer, DesktopDescription } from "./HelpCss";

const Help = () => {
  const { t } = useTranslation("translation");
  const theme = useTheme();
  console.log(theme)
  return (
    <HelpContainer>
      {/* Mobile Display */}
      <Box sx={{display: {xs: "block", sm: "block", md: "none", lg: "none", xl: "none" }}}>
      <MobileContainer theme={theme}>
      <div style={{
          marginTop: "8px"
        }}>
          <MobileHeading>{t("Help.Heading")}</MobileHeading>
        </div>
        <div>
          <HelpTabs />
        </div>
      </MobileContainer>
      </Box>
      {/* Desktop Display */}
      <Box sx={{display: {xs: "none", sm: "none", md: "block", lg:"block", xl: "block" }, minHeight: "76vh",}}>
      <DesktopContainer theme={theme}>
        <div style={{
          marginTop: "8px"
        }}>
          <Heading>{t("Help.Heading")}</Heading>
          <Description>{t("Help.Description")}</Description>
        </div>
        <div>
          <HelpTabs />
        </div>
      </DesktopContainer>
      </Box>
    </HelpContainer>
  );
};

export default Help;