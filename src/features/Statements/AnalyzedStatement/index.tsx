import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Chip, Divider } from "@mui/material";
import BasicTabs from "./AnalyzedStatementTab";
import { useTranslation } from "react-i18next";
import {
  MobileMainContainer,
  MobileHeaderText,
  MobileStatementContainer,
  MobileStatementText,
  DesktopMainContainer,
  DesktopHeaderContainer,
  DesktopHeaderText,
  DesktopHeaderText2,
  DesktopStatementContainer,
  DesktopStatementText,
  DesktopStatementDropdownTextChipContainer,
  DesktopStatementDropdownTextChipContainer2,
  TableContainer,
} from "./AnalyzedStatementCss";

const AnalyzedStatement = () => {
  const { t } = useTranslation();

  const MobileDisplay = () => (
    <Box
      sx={{
        display: { xs: "flex", sm: "flex", md: "none", lg: "none", xl: "none" },
      }}
    >
      <MobileMainContainer>
        <div>
          <MobileHeaderText>{t("AnalyzedStatement")}</MobileHeaderText>
        </div>
        <MobileStatementContainer>
          <Accordion
            style={{
              margin: "0px",
              borderRadius: "12px",
              border: "1px solid #EAECF0",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <MobileStatementText>
                {t("AnalyzedStatements.Description")}
              </MobileStatementText>
            </AccordionSummary>
            <Divider />
            <AccordionDetails
              style={{
                padding: "20px",
                alignItems: "center",
                display: "block",
              }}
            >
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#101828",
                  lineHeight: "20px",
                }}
              >
                {t("AnalyzedStatements.Scope")} (6)
              </Typography>
              <div
                style={{
                  marginTop: "16px",
                }}
              >
                <Chip
                  label="Canada / Québec / Civil Code of Québec"
                  style={{
                    backgroundColor: "#F0F9FF",
                    color: "#026AA2",
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "18px",
                    fontFamily: "sans-serif",
                    marginBottom: "4px",
                  }}
                />
                <Chip
                  label="Canada / Québec / Charter of human rights"
                  style={{
                    backgroundColor: "#F0F9FF",
                    color: "#026AA2",
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "18px",
                    fontFamily: "sans-serif",
                    marginLeft: "4px",
                  }}
                />
                <Chip
                  label="Canada / Québec / Act respecting labour standards"
                  style={{
                    backgroundColor: "#F0F9FF",
                    color: "#026AA2",
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "18px",
                    fontFamily: "sans-serif",
                    marginLeft: "4px",
                  }}
                />
                <Chip
                  label="+4"
                  style={{
                    backgroundColor: "#F0F9FF",
                    color: "#026AA2",
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "18px",
                    fontFamily: "sans-serif",
                    marginLeft: "4px",
                  }}
                />
              </div>
            </AccordionDetails>
            <Divider />
            <AccordionDetails
              style={{
                padding: "20px",
                alignItems: "center",
                display: "block",
              }}
            >
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#101828",
                  lineHeight: "20px",
                }}
              >
                {t("AnalyzedStatements.Sections")} (59)
              </Typography>
              <div
                style={{
                  marginTop: "16px",
                }}
              >
                <Chip
                  label={
                    <>
                      Canada / Federal / Trademarks Act
                      <span style={{ fontWeight: 700 }}> (36)</span>
                    </>
                  }
                  style={{
                    backgroundColor: "#F0F9FF",
                    color: "#026AA2",
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "18px",
                    fontFamily: "sans-serif",
                  }}
                />
                <Chip
                  label={
                    <>
                      Canada / Federal / Criminal Code
                      <span style={{ fontWeight: 700 }}> (13)</span>
                    </>
                  }
                  style={{
                    backgroundColor: "#F0F9FF",
                    color: "#026AA2",
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "18px",
                    fontFamily: "sans-serif",
                    marginLeft: "4px",
                  }}
                />
                <Chip
                  label={
                    <>
                      Canada / Québec / Civil Code of Québec
                      <span style={{ fontWeight: 700 }}> (6)</span>
                    </>
                  }
                  style={{
                    backgroundColor: "#F0F9FF",
                    color: "#026AA2",
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "18px",
                    fontFamily: "sans-serif",
                    marginLeft: "4px",
                  }}
                />
                <Chip
                  label={
                    <>
                      Canada / Federal / Copyright Act
                      <span style={{ fontWeight: 700 }}> (4)</span>
                    </>
                  }
                  style={{
                    backgroundColor: "#F0F9FF",
                    color: "#026AA2",
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "18px",
                    fontFamily: "sans-serif",
                    marginLeft: "4px",
                  }}
                />
                <Chip
                  label="+2"
                  style={{
                    backgroundColor: "#F0F9FF",
                    color: "#026AA2",
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "18px",
                    fontFamily: "sans-serif",
                    marginLeft: "4px",
                  }}
                />
              </div>
            </AccordionDetails>
          </Accordion>
          <div
            style={{
              textAlign: "right",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                fontWeight: "400",
                color: "#667085",
                lineHeight: "18px",
              }}
            >
              {t("AnalyzedStatements.CreatedOn")}
            </span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "600",
                color: "#667085",
                lineHeight: "18px",
              }}
            >
              {" "}
              Thu May 18 2023, 1:08:29 PM{" "}
            </span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "400",
                color: "#667085",
                lineHeight: "18px",
              }}
            >
              {" "}
              — {t("AnalyzedStatements.UpdatedOn")}
            </span>{" "}
            <span
              style={{
                fontSize: "12px",
                fontWeight: "600",
                color: "#667085",
                lineHeight: "18px",
              }}
            >
              {" "}
              Thu May 18 2023, 3:39:32 PM{" "}
            </span>
          </div>
        </MobileStatementContainer>
        <TableContainer>
          <BasicTabs />
        </TableContainer>
      </MobileMainContainer>
    </Box>
  );

  const DesktopDisplay = () => (
    <Box
      sx={{
        display: { xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex" },
      }}
    >
      <DesktopMainContainer>
        <DesktopHeaderContainer>
          <DesktopHeaderText>{t("AnalyzedStatement")}</DesktopHeaderText>
          <DesktopHeaderText2>
            {t("AnalyzedStatements.Description")}
          </DesktopHeaderText2>
        </DesktopHeaderContainer>
        <DesktopStatementContainer>
          <Accordion
            style={{
              margin: "0px",
            }}
          >
            <AccordionSummary
              style={{
                padding: "0px 20px",
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <DesktopStatementText>
                Someone has been using a company logo without authorization and
                stealing profits
              </DesktopStatementText>
            </AccordionSummary>
            <Divider />
            <AccordionDetails
              style={{
                padding: "20px",
                alignItems: "center",
              }}
            >
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#101828",
                  lineHeight: "20px",
                }}
              >
                {t("AnalyzedStatements.Scope")} (6)
              </Typography>
              <DesktopStatementDropdownTextChipContainer>
                <Chip
                  label="Canada / Québec / Civil Code of Québec"
                  style={{
                    backgroundColor: "#F0F9FF",
                    color: "#026AA2",
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "18px",
                    fontFamily: "sans-serif",
                  }}
                />
                <Chip
                  label="Canada / Québec / Charter of human rights and freedoms"
                  style={{
                    backgroundColor: "#F0F9FF",
                    color: "#026AA2",
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "18px",
                    fontFamily: "sans-serif",
                    marginLeft: "4px",
                  }}
                />
                <Chip
                  label="Canada / Québec / Act respecting labour standards"
                  style={{
                    backgroundColor: "#F0F9FF",
                    color: "#026AA2",
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "18px",
                    fontFamily: "sans-serif",
                    marginLeft: "4px",
                  }}
                />
                <Chip
                  label="+4"
                  style={{
                    backgroundColor: "#F0F9FF",
                    color: "#026AA2",
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "18px",
                    fontFamily: "sans-serif",
                    marginLeft: "4px",
                  }}
                />
              </DesktopStatementDropdownTextChipContainer>
            </AccordionDetails>
            <Divider />
            <AccordionDetails
              style={{
                padding: "20px",
                alignItems: "center",
              }}
            >
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#101828",
                  lineHeight: "20px",
                }}
              >
                {t("AnalyzedStatements.Sections")} (59)
              </Typography>
              <DesktopStatementDropdownTextChipContainer2>
                <Chip
                  label={
                    <>
                      Canada / Federal / Trademarks Act
                      <span style={{ fontWeight: 700 }}> (36)</span>
                    </>
                  }
                  style={{
                    backgroundColor: "#F0F9FF",
                    color: "#026AA2",
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "18px",
                    fontFamily: "sans-serif",
                  }}
                />
                <Chip
                  label={
                    <>
                      Canada / Federal / Criminal Code
                      <span style={{ fontWeight: 700 }}> (13)</span>
                    </>
                  }
                  style={{
                    backgroundColor: "#F0F9FF",
                    color: "#026AA2",
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "18px",
                    fontFamily: "sans-serif",
                    marginLeft: "4px",
                  }}
                />
                <Chip
                  label={
                    <>
                      Canada / Québec / Civil Code of Québec
                      <span style={{ fontWeight: 700 }}> (6)</span>
                    </>
                  }
                  style={{
                    backgroundColor: "#F0F9FF",
                    color: "#026AA2",
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "18px",
                    fontFamily: "sans-serif",
                    marginLeft: "4px",
                  }}
                />
                <Chip
                  label={
                    <>
                      Canada / Federal / Copyright Act
                      <span style={{ fontWeight: 700 }}> (4)</span>
                    </>
                  }
                  style={{
                    backgroundColor: "#F0F9FF",
                    color: "#026AA2",
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "18px",
                    fontFamily: "sans-serif",
                    marginLeft: "4px",
                  }}
                />
                <Chip
                  label="+2"
                  style={{
                    backgroundColor: "#F0F9FF",
                    color: "#026AA2",
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "18px",
                    fontFamily: "sans-serif",
                    marginLeft: "4px",
                  }}
                />
              </DesktopStatementDropdownTextChipContainer2>
            </AccordionDetails>
          </Accordion>
          <div
            style={{
              textAlign: "right",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                fontWeight: "400",
                color: "#667085",
                lineHeight: "18px",
              }}
            >
              {t("AnalyzedStatements.CreatedOn")}
            </span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "600",
                color: "#667085",
                lineHeight: "18px",
              }}
            >
              {" "}
              Thu May 18 2023, 1:08:29 PM{" "}
            </span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "400",
                color: "#667085",
                lineHeight: "18px",
              }}
            >
              {" "}
              — {t("AnalyzedStatements.UpdatedOn")}
            </span>{" "}
            <span
              style={{
                fontSize: "12px",
                fontWeight: "600",
                color: "#667085",
                lineHeight: "18px",
              }}
            >
              {" "}
              Thu May 18 2023, 3:39:32 PM{" "}
            </span>
          </div>
        </DesktopStatementContainer>
        <TableContainer>
          <BasicTabs />
        </TableContainer>
      </DesktopMainContainer>
    </Box>
  );

  return (
    <Box>
      <MobileDisplay />
      <DesktopDisplay />
    </Box>
  );
};

export default AnalyzedStatement;
