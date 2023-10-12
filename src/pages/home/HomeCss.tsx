import { Box, Typography, styled } from "@mui/material";

export const HelpContainer = styled("div")`
  /* Common styles for both mobile and desktop */
  background-color: #f9f9fb;
`;

/* Common styles for both mobile and desktop */
export const RightArrowImage = styled("img")`
  margin-left: 3px;
  width: 11px;
  height: 11px;
`;


/* Style for Mobile */

export const MainMobileContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MobileHomeDescription = styled(Typography)`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #475467;
  margin-top: 4px;
  text-align: center;
`;

export const MobileStatementInput = styled("div")`
  margin-top: 24px;
  `;

export const MobileStatementInputError = styled(Typography)`
  font-size: 12px;
  font-weight: 200;
  line-height: 16px;
  color: #FF0000;
  margin-top: 4px;
`; 

export const MobileTerritorySubContainer = styled("div")`
  display: flex;
  flex-direction: row;
  margin-left: 16px;
  margin-top: 13px;
`;

export const MobileStatementExample = styled(Typography)`
  font-weight: 500;
  font-size: 14px;
  color: #98A2B3;
  margin-left: 8px;
`;

export const MobileTerritorySubContainer2 = styled("div")`
  display: flex;
  flex-direction: row;
  margin-top: 25px;
`;

export const MobileStatementSuggestionContainer = styled("div")`
border: 1px solid #35668A;
border-radius: 8px;
background-color: #D7E0E7;
display: flex;
flex-direction: row;
align-items: baseline;
margin-bottom: 20px;
margin-top: 20px;
`;

export const MobileSuggestionContent = styled(Typography)`
  margin: 16px;
`;

/* Style for Desktop */

export const MainDesktopContainer = styled(Box)`
  flex: 1;
`;

export const DesktopMainContent = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DesktopTitleContainer = styled("div")`
  margin-top: 40px;
  width: 100%;
  max-width: 900px;
`;

export const DesktopStatuesContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 18px;
`;

export const DesktopStatueContainer = styled("div")`
  height: 22px;
  display: flex;
  flex-direction: row;
`;

export const DesktopStatuesContent = styled("div")`
display: flex;
flex-direction: row;
align-items: center;
`;

export const DesktopTerritoryContainer = styled("div")`
display: flex;
flex-direction: row;
align-items: center;
`;

export const DesktopTerritorySubContainer = styled("div")`
display: flex;
flex-direction: row;
margin-left: 15px;
`;

export const DesktopTerritorySubContainer2 = styled("div")`
display: flex;
flex-direction: row;
`;

export const DesktopSuggestionContainer= styled("div")`
margin-top: 40px;
width: 100%;
max-width: 900px;
border: 1px solid #35668A;
border-radius: 8px;
background-color: #D7E0E7;
display: flex;
flex-direction: row;
align-items: baseline;
margin-bottom: 20px;
`;

export const DesktopMagicWindImage = styled("img")`
  margin-left: 16px;
`;

export const DesktopSuggestionContent = styled("div")`
  margin-left: 16px;
`;



