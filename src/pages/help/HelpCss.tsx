import { Box, Typography, styled } from "@mui/material";

export const HelpContainer = styled("div")`
  /* Common styles for both mobile and desktop */
  background-color: #f9f9fb;
`;

export const Heading = styled(Typography)`
  /* Common styles for both mobile and desktop headings */
  font-size: 34px;
  font-weight: 600;
  line-height: 32px;
  color: #101828;
`;

export const Description = styled(Typography)`
  /* Common styles for both mobile and desktop descriptions */
  font-weight: 400;
  color: #475467;
  line-height: 20px;
  margin-top: 4px;
`;

export const MobileContainer = styled(Box)`
  /* Mobile-specific styles */
  display: ${(props) =>
    props.theme.breakpoints.between("xs", "sm") ? "block" : "none"};
  padding-top: 10px;
`;

export const MobileHeading = styled(Heading)`
  /* Mobile-specific heading styles */
  font-size: 34px;
  margin-top: 8px;
`;

export const DesktopContainer = styled(Box)`
  /* Desktop-specific styles */
  display: ${(props) =>
    props.theme.breakpoints.up("md") ? "block" : "none"};
  min-height: 76vh;
  padding-top: 10px;
`;

export const DesktopDescription = styled(Description)`
  /* Desktop-specific description styles */
  font-size: 14px;
  margin-top: 4px;
`;