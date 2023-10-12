import React, { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Footer from "../../components/footer/Footer";
import {
  Box,
  Button,
  Chip,
  Divider,
  TextField,
  Typography,
  makeStyles,
} from "@mui/material";
import StarIcon from "../../assets/images/star-06.svg";
import RightArrowIcon from "../../assets/images/right-arrow-icon.svg";
import MagicWand from "../../assets/images/magic-wand-01.svg";
import { getStatementSuggestions } from "../../app/services/statementServices";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import StatementsTabs from "./statements/StatementsTab";
import { Statements } from "./statements/Statements";
import SideBar from "../../components/sidebar/SideBar";
import translateText from "../../translate";
import { useTranslation } from "react-i18next";
import { MainMobileContainer, MobileHomeDescription, RightArrowImage, MobileStatementExample, MobileStatementInput, MobileStatementInputError, MobileStatementSuggestionContainer, MobileSuggestionContent, MobileTerritorySubContainer, MobileTerritorySubContainer2, MainDesktopContainer, DesktopMainContent, DesktopTitleContainer, DesktopStatuesContainer, DesktopStatueContainer, DesktopStatuesContent, DesktopTerritoryContainer, DesktopSuggestionContainer, DesktopMagicWindImage, DesktopSuggestionContent, DesktopTerritorySubContainer, DesktopTerritorySubContainer2 } from "./HomeCss";

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("translation");
  const [statement, setStatement] = useState<String>("");
  const [error, setError] = useState<String>("");
  const [showStatementSuggestion, setShowStatementSuggestion] =
    useState<boolean>(false);
  const [loadingStatus, setLoadingStatus] = useState<boolean>(false);
  const [acceptSuggestionLoading, setAcceptSuggestionLoading] =
    useState<boolean>(false);
  const [statementSuggestionRes, setStatementSuggestionRes] = useState<any>([]);
  const [statementState, setStatementState] = useState<boolean>(false);

  /**
   * function for handle change statement text input and set value in state
   */
  const onChangeStatement = (e: string) => {
    setStatement(e);
    setError("");
  };

  /**
   * function to handelAnalyze and when text field is empty so give error
   */
  const handelAnalyze = () => {
    console.log(statement.length);
    if (statement.length === 0) {
      setError("Field is required");
    } else {
      setError("");
      setLoadingStatus(true);
      /**
       * service for get statement suggestion
       *
       */
      getStatementSuggestions(statement)
        .then((response: any) => {
          console.log("Statement received:", response);
          setLoadingStatus(false);
          setStatementSuggestionRes(response.BotlerStatementSuggestion);
          setShowStatementSuggestion(true);
        })
        .catch((error) => {
          setLoadingStatus(false);
          console.error("Error occurred:", error);
        });
    }
  };

  /**
   * function for handle click on statement suggestion
   */
  const handelAcceptSuggestion = () => {
    setAcceptSuggestionLoading(true);
    setTimeout(() => {
      setAcceptSuggestionLoading(false);
      setShowStatementSuggestion(false);
      setStatement(statementSuggestionRes.suggestion);
      navigate("/statement/1");
    }, 3000);
  };

  const MobileDisplay = () => (
    <Box sx={{ display: { xs: "flex", sm: "flex", md: "none", lg: "none", xl: "none" } }}>
      <MainMobileContainer>
        <Typography
          style={{
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "24px",
            color: "#101828",
            ...((!statementState || showStatementSuggestion)
              ? {
                  marginTop: "21px",
                }
              : {
                  marginTop: "0px",
                }),
          }}
        >
          New Statement
        </Typography>
        <MobileHomeDescription>
          Describe a situation where areas of law or policy have potentially
          been violated.
        </MobileHomeDescription>
        <MobileStatementInput>
          <TextField
            label="Enter your statement"
            multiline
            rows={4}
            defaultValue={statement}
            onBlur={(e) => {
              onChangeStatement(e.target.value);
            }}
            sx={{
              "& .MuiInputBase-root": {
                padding: "0px",
                width: "49vh",
              },
              ...(!statementState
                ? {
                    maxWidth: "699px",
                  }
                : {
                    maxWidth: "900px",
                  }),
              ...(error !== "" || loadingStatus
                ? {
                    "& .MuiInputBase-input": {
                      border: "1px solid #FF0000",
                      borderRadius: "8px",
                      color: "#FF0000",
                    },
                  }
                : {}),
            }}
          />
          <MobileStatementInputError>
                {error}
          </MobileStatementInputError>
        </MobileStatementInput>
        <div>
          {(!showStatementSuggestion && statementState) ? (
            <>
              <LoadingButton
                sx={{
                  width: "185px",
                  height: "36px",
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "20px",
                  borderRadius: "8px",
                  marginTop: "24px",
                }}
                onClick={handelAnalyze}
                endIcon={
                  <RightArrowImage
                    src={RightArrowIcon}
                    alt=""
                  />
                }
                loading={loadingStatus}
                loadingPosition="end"
                variant="contained"
              >
                {t('AnalyzedStatements.AnalyzeStatementButton')}
              </LoadingButton>
              <MobileTerritorySubContainer>
                <img src={StarIcon} alt="" />
                <MobileStatementExample>
                  {t('AnalyzedStatements.StatementExample')}
                </MobileStatementExample>
              </MobileTerritorySubContainer>
            </>
          ) : (
            <LoadingButton
                sx={{
                  height: "36px",
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "20px",
                  borderRadius: "8px",
                  marginTop: "24px",
                  minWidth: "325px",
                }}
                onClick={handelAnalyze}
                endIcon={
                  <RightArrowImage
                    src={RightArrowIcon}
                    alt=""
                  />
                }
                loading={loadingStatus}
                loadingPosition="end"
                variant="contained"
              >
                {t('AnalyzedStatements.AnalyzeStatementButton')}
              </LoadingButton>
          )}
          {showStatementSuggestion && (
            <MobileTerritorySubContainer2>
              <img src={StarIcon} alt="" />
              <MobileStatementExample>
                {t('AnalyzedStatements.StatementExample')}
              </MobileStatementExample>
            </MobileTerritorySubContainer2>
          )}
        </div>
        {showStatementSuggestion && (
          <MobileStatementSuggestionContainer>
            <MobileSuggestionContent>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <img src={MagicWand} alt="" />
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "28px",
                    color: "#051C2E",
                    marginLeft: "4px",
                  }}
                >
                  {statementSuggestionRes.suggestion_type}
                </Typography>
              </div>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "#051C2E",
                  marginTop: "4px",
                }}
              >
                {statementSuggestionRes.suggestion}
              </Typography>
              <LoadingButton
                sx={{
                  marginTop: "12px",
                  width: "186px",
                  height: "36px",
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "20px",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
                onClick={handelAcceptSuggestion}
                endIcon={
                  <RightArrowImage
                    src={RightArrowIcon}
                    alt=""
                  />
                }
                loading={acceptSuggestionLoading}
                loadingPosition="end"
                variant="contained"
              >
                {t('AnalyzedStatements.AcceptSuggestionButton')}
              </LoadingButton>
              <Divider />
              <div
                style={{
                  marginTop: "12px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    lineHeight: "20px",
                    color: "#344054",
                  }}
                >
                  {statementSuggestionRes.suggestion_detail_type}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "20px",
                    color: "#475467",
                    marginTop: "4px",
                    fontStyle: "regular",
                  }}
                >
                  {statementSuggestionRes.suggestion_description}
                </Typography>
              </div>
            </MobileSuggestionContent>
          </MobileStatementSuggestionContainer>
        )}
        {!statementState && <Statements />}
      </MainMobileContainer>
    </Box>
  );

  const DesktopDisplay = () => (
    <Box
      sx={{
        display: { xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex" },
      }}
    >
      <MainDesktopContainer>
        <DesktopMainContent>
          <DesktopTitleContainer>
            <Typography
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "32px",
                textAlign: "center",
                color: "#101828",
              }}
            >
              Welcome, Pablo
            </Typography>
            <Typography
              style={{
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "24px",
                textAlign: "center",
                color: "#475467",
                marginTop: "4px",
              }}
            >
              Describe a situation where areas of law or policy have potentially
              been violated.
            </Typography>
            <div>
              <TextField
                label="Enter your statement"
                defaultValue={statement}
                onBlur={(e) => {
                  onChangeStatement(e.target.value);
                }}
                sx={{
                  marginTop: "24px",
                  width: "100%",
                  ...(!statementState
                    ? {
                        maxWidth: "699px",
                      }
                    : {
                        maxWidth: "900px",
                      }),
                  ...(error !== "" || loadingStatus
                    ? {
                        "& .MuiInputBase-input": {
                          border: "1px solid #FF0000",
                          borderRadius: "8px",
                          color: "#FF0000",
                        },
                      }
                    : {}),
                }}
              />
              {!showStatementSuggestion && !statementState && (
                <LoadingButton
                  sx={{
                    marginTop: "24px",
                    width: "185px",
                    height: "36px",
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "20px",
                    borderRadius: "8px",
                    marginLeft: "16px",
                  }}
                  onClick={handelAnalyze}
                  endIcon={
                    <RightArrowImage
                      src={RightArrowIcon}
                      alt=""
                    />
                  }
                  loading={loadingStatus}
                  loadingPosition="end"
                  variant="contained"
                >
                  {t('AnalyzedStatements.AnalyzeStatementButton')}
                </LoadingButton>
              )}
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 200,
                  color: "#FF0000",
                }}
              >
                {error}
              </Typography>
              <DesktopStatuesContainer>
                <DesktopStatueContainer>
                  <DesktopStatuesContent>
                    <Typography
                      style={{
                        fontSize: "12px",
                        fontWeight: 500,
                        lineHeight: "18px",
                        textAlign: "center",
                        color: "#344054",
                      }}
                    >
                      {t('AnalyzedStatements.Statutes')}:
                    </Typography>
                    <Chip
                      label="Criminal Code"
                      sx={{
                        height: "22px",
                        marginLeft: "4px",
                        fontSize: "12px",
                        fontWeight: 500,
                        lineHeight: "18px",
                        color: "#667085",
                      }}
                    />
                    <Chip
                      label="General Workplace Misconduct"
                      sx={{
                        height: "22px",
                        marginLeft: "4px",
                        fontSize: "12px",
                        fontWeight: 500,
                        lineHeight: "18px",
                        color: "#667085",
                      }}
                    />
                  </DesktopStatuesContent>
                  <DesktopTerritoryContainer>
                    <Typography
                      style={{
                        fontSize: "12px",
                        fontWeight: 500,
                        lineHeight: "18px",
                        textAlign: "center",
                        color: "#344054",
                        marginLeft: "8px",
                      }}
                    >
                      {t('AnalyzedStatements.Territory')}:
                    </Typography>
                    <Chip
                      label="Canada / Federal"
                      sx={{
                        height: "22px",
                        marginLeft: "4px",
                        fontSize: "12px",
                        fontWeight: 500,
                        lineHeight: "18px",
                        color: "#667085",
                      }}
                    />
                  </DesktopTerritoryContainer>
                  {!statementState && (
                    <DesktopTerritorySubContainer>
                      <img src={StarIcon} alt="" />
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: "14px",
                          color: "#98A2B3",
                          marginLeft: "8px",
                        }}
                      >
                        {t('AnalyzedStatements.StatementExample')}
                      </Typography>
                    </DesktopTerritorySubContainer>
                  )}
                </DesktopStatueContainer>
                {statementState && (
                  <DesktopTerritorySubContainer2>
                    <img src={StarIcon} alt="" />
                    <Typography
                      sx={{
                        fontWeight: 500,
                        fontSize: "15px",
                        color: "#98A2B3",
                        marginLeft: "8px",
                      }}
                    >
                      {t('AnalyzedStatements.StatementExample')}
                    </Typography>
                  </DesktopTerritorySubContainer2>
                )}
              </DesktopStatuesContainer>
            </div>
          </DesktopTitleContainer>
          {!showStatementSuggestion && statementState && (
            <div>
              <LoadingButton
                sx={{
                  marginTop: "24px",
                  width: "185px",
                  height: "36px",
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "20px",
                  borderRadius: "8px",
                }}
                onClick={handelAnalyze}
                endIcon={
                  <RightArrowImage
                    src={RightArrowIcon}
                    alt=""
                  />
                }
                loading={loadingStatus}
                loadingPosition="end"
                variant="contained"
              >
                {t('AnalyzedStatements.AnalyzeStatementButton')}
              </LoadingButton>
            </div>
          )}
          {showStatementSuggestion && (
            <DesktopSuggestionContainer>
              <DesktopMagicWindImage
                src={MagicWand}
                alt=""
              />
              <DesktopSuggestionContent>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: "28px",
                    color: "#051C2E",
                  }}
                >
                  {statementSuggestionRes.suggestion_type}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "28px",
                    color: "#051C2E",
                    marginTop: "4px",
                  }}
                >
                  {statementSuggestionRes.suggestion}
                </Typography>
                <LoadingButton
                  sx={{
                    marginTop: "12px",
                    width: "186px",
                    height: "36px",
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "20px",
                    borderRadius: "8px",
                    marginBottom: "12px",
                  }}
                  onClick={handelAcceptSuggestion}
                  endIcon={
                    <RightArrowImage
                      src={RightArrowIcon}
                      alt=""
                    />
                  }
                  loading={acceptSuggestionLoading}
                  loadingPosition="end"
                  variant="contained"
                >
                  {t('AnalyzedStatements.AcceptSuggestionButton')}
                </LoadingButton>
                <Divider />
                <div
                  style={{
                    marginTop: "12px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "20px",
                      color: "#344054",
                    }}
                  >
                    {statementSuggestionRes.suggestion_detail_type}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "20px",
                      color: "#475467",
                      marginTop: "4px",
                      fontStyle: "regular",
                    }}
                  >
                    {statementSuggestionRes.suggestion_description}
                  </Typography>
                </div>
              </DesktopSuggestionContent>
            </DesktopSuggestionContainer>
          )}
          {!statementState && <Statements />}
        </DesktopMainContent>
      </MainDesktopContainer>
    </Box>
  );

  return (
    <Box>
      <MobileDisplay />
      <DesktopDisplay />
    </Box>
  );
};

export default Home;
