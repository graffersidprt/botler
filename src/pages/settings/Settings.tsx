import { Box } from '@mui/material'
import React from 'react'
import SettingTabs from './tabs';
import { useTranslation } from 'react-i18next';
import { MobileMainContainer, MobileHeaderContent, MobileHeaderHeadingText, DesktopMainContainer, DesktopHeaderContent, DesktopHeaderHeadingText } from './SettingsCss';

const Settings = () => {
  const { t } = useTranslation("translation");
  const MobileDisplay = () => (
    <Box sx={{display: {xs: "block", sm: "block", md: "none", lg: "none", xl: "none" }, minHeight:"64vh"}}>
      <MobileMainContainer>
        <MobileHeaderContent>
          <MobileHeaderHeadingText>
          {t("Settings.Heading")}
          </MobileHeaderHeadingText>
        </MobileHeaderContent>
        <SettingTabs />
      </MobileMainContainer>
    </Box>
  );

  const DesktopDisplay = () => (
    <Box sx={{display: {xs: "none", sm: "none", md: "block", lg:"block", xl: "block" }, minHeight: "76vh",}}>
      <DesktopMainContainer>
        <DesktopHeaderContent>
          <DesktopHeaderHeadingText>
          {t("Settings.Heading")}
          </DesktopHeaderHeadingText>
        </DesktopHeaderContent>
        <SettingTabs />
      </DesktopMainContainer>
    </Box>
  );
  
  return (
    <Box>
      <MobileDisplay />
      <DesktopDisplay />
    </Box>
  )
}

export default Settings;
