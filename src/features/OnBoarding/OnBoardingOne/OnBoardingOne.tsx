import { Box } from "@mui/system";
import React from "react";
import { onBoardingOneStyle } from "./OnBoardingOneCss";
import StatementAnalysisImage from "../../../assets/images/statement-analysis-img-1.svg";
import AnalyzedStatementIcon from "../../../assets/images/analyze-statements.svg";
import IdentifyLaw from "../../../assets/images/identify-laws.svg";
import GenerateAssessements from "../../../assets/images/generate-assessements.svg";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@material-ui/core";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CircleIcon from '@mui/icons-material/Circle';

const OnBoardingOne = () => {
  const classes = onBoardingOneStyle();
  const MobileDisplay = () => (
    <Box sx={{ display: { sm: "block", md: "none", lg: "none", xl: "none" } }}>
      <div className={classes.mainContainer}>
        <div className={classes.headerRow}>
          {/* <img src={CloseIcon} alt="close icon" className={classes.closeIcon} /> */}
          <CloseIcon className={classes.closeIcon} />
        </div>
        <div className={classes.imageContainer}>
          <img
            src={StatementAnalysisImage}
            alt="statement analysis"
            className={classes.mainImg}
          />
        </div>
        <div className={classes.contentContainer}>
          <div className={classes.contentHeading}>
            <img
              src={AnalyzedStatementIcon}
              alt="analyzed statement"
              className={classes.statementIcon}
            />
            <img
              src={IdentifyLaw}
              alt="analyzed statement"
              className={classes.statementIcon}
            />
            <img
              src={GenerateAssessements}
              alt="analyzed statement"
              className={classes.statementIcon}
            />
          </div>
          <Typography
            style={{
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "30px",
              color: "#FFFFFF",
              marginTop: "49px",
            }}
          >
            Statement Analysis
          </Typography>
          <Typography
            style={{
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "20px",
              color: "#5E84A1",
              marginTop: "8px",
              textAlign: "center",
            }}
          >
            Botler utilizes state of the art algorithms, including GPT-4 &
            ChatGPT, to analyze your situation for potential violations against
            a set of laws and policies.
          </Typography>
          <div className={classes.footerContainer}>
            <ChevronLeftIcon className={classes.footerIcon} />
            <div style={{
              width: "32%",
              textAlign: "center",
            }}>
              <CircleIcon className={classes.footerCircleIconSelected} style={{
                width: "10px",
                height: "10px",
                margin: "0 8px"
              }} />
              <CircleIcon className={classes.footerCircleIcon} style={{
                width: "10px",
                height: "10px",
                margin: "0 8px"
              }} />
              <CircleIcon className={classes.footerCircleIcon} style={{
                width: "10px",
                height: "10px",
                margin: "0 8px"
              }} />
            </div>
            <ChevronRightIcon className={classes.footerIcon} />
          </div>
        </div>
      </div>
    </Box>
  );
  const DesktopDisplay = () => (
    <Box
      sx={{
        display: {
          xs: "none",
          sm: "none",
          md: "block",
          lg: "block",
          xl: "block",
        },
      }}
    ></Box>
  );
  return (
    <Box>
      <MobileDisplay />
      <DesktopDisplay />
    </Box>
  );
};

export default OnBoardingOne;
