import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, TablePagination, TextField, useMediaQuery, useTheme } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from "@mui/icons-material/Close";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AssessmentIcon from "../../../assets/images/assesment-icon.svg";
import starIcon from "../../../assets/images/star-icon.svg";
import basicCheckIcon from "../../../assets/images/basic-chceked-icon.svg";
import AdvanceCheckIcon from "../../../assets/images/advance-chceked-icon.svg";
import BasicIcon from "../../../assets/images/basic-icon.svg";
import AdvanceIcon from "../../../assets/images/advance-icon.svg";
import BookIcon from "../../../assets/images/book-icon.svg";
import HappyFace from "../../../assets/images/happy-face-icon.svg";
import NotHappyFace from "../../../assets/images/not-happy-face-icon.svg";
import EditIcon from "../../../assets/images/edit-pen-icon.svg";
import RightArrowIcon from "../../../assets/images/right-arrow-icon.svg";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import CheckIcon from "@mui/icons-material/Check";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import filterIcon from "../../../assets/images/filter-icon.svg";
import searchIcon from "../../../assets/images/search-icon.svg";
import { paginationNumber } from "../../../utils";
import exp from "constants";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import { deleteStatement } from "../../../app/services/statementServices";
import { getAllAssessments } from "../../../app/services/assesmentsServices";
import RowForDesktop from "./IdentifiedSection/TableRow/DesktopRow";
import { useTranslation } from "react-i18next";

function createData(
  name: number,
  calories: string,
  fat: number,
  carbs: number,
  protein: number,
  price: number
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<String>("");
  const [explainStatement, setExplainStatement] = useState<String>(
    "In the Trademarks Act of Canada, there is a section about unfair competition and prohibited signs. Section 11 states that no one is allowed to use any sign or combination of signs in their business as a trademark or in any other way if those signs were chosen in a way that goes against the rules in sections 9 or 10. In simple terms, you can't use prohibited signs for your business logo or trademark."
  );
  const [thankYouMesssage, setThankYouMessage] = useState<boolean>(false);
  const [showEditExplanation, setShowEditExplanation] =
    useState<boolean>(false);
  const [showEditBasicAssessment, setShowEditBasicAssessment] =
    useState<boolean>(false);
  const [showEditAdvancedAssessment, setShowEditAdvancedAssessment] =
    useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<Boolean>(false);

  /**
   * @description: This function is used to check value of explain statement when change
   * @param {event} event
   * @returns {void}
   *  const onChangeExplanation
   */
  const onChangeExplanation = (event: any) => {
    setExplainStatement(event);
  };

  /**
   * @description: This function is used to handle submit button for explanation value
   * @param {event} event
   * @returns {void}
   * const onSubmitExplanation
   * */
  const onSubmitExplanation = (event: any) => {
    event.preventDefault();
    if (explainStatement === "") {
      setError("Field is required");
    } else {
      setError("");
      const comparisonResult = explainStatement.localeCompare(
        "In the Trademarks Act of Canada, there is a section about unfair competition and prohibited signs. Section 11 states that no one is allowed to use any sign or combination of signs in their business as a trademark or in any other way if those signs were chosen in a way that goes against the rules in sections 9 or 10. In simple terms, you can't use prohibited signs for your business logo or trademark."
      );
      if (comparisonResult !== 0) {
        setThankYouMessage(true);
      }
    }
  };

  const handleChange = (event: any, isExpanded: any) => {
    setIsExpanded(isExpanded);
    console.log("Accordion is expanded:", isExpanded);
  };

  return (
    <React.Fragment>
      <Accordion onChange={handleChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          // onClick={ (e) => console.log(e)}
        >
          <img src={starIcon} alt="star-icon" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "24px",
              maxWidth: "100%",
              width: "661px",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                color: "#101828",
                lineHeight: "24px",
              }}
            >
              {row.calories}
            </Typography>
            <Breadcrumbs
              maxItems={2}
              aria-label="breadcrumb"
              separator={<NavigateNextIcon fontSize="small" />}
            >
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "#475467",
                  lineHeight: "20px",
                }}
              >
                Canada
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#475467",
                  lineHeight: "20px",
                }}
              >
                Belts
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#475467",
                  lineHeight: "20px",
                }}
              >
                Criminal Code (R.S.C., 1985, c. C-46)
              </Typography>
            </Breadcrumbs>
          </div>
          {row.fat === 1 && (
            <>
              <img
                src={basicCheckIcon}
                alt="basic-check-icon"
                style={{
                  marginRight: "4px",
                }}
              />
              <img src={AdvanceIcon} alt="advance-icon" />
            </>
          )}
          {row.fat === 2 && (
            <>
              <img
                src={basicCheckIcon}
                alt="basic-check-icon"
                style={{
                  marginRight: "4px",
                }}
              />
              <img src={AdvanceCheckIcon} alt="advance-icon" />
            </>
          )}
          {row.fat === 3 && (
            <>
              <img
                src={BasicIcon}
                alt="basic-check-icon"
                style={{
                  marginRight: "4px",
                }}
              />
              <img src={AdvanceIcon} alt="advance-icon" />
            </>
          )}
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ margin: 1, paddingTop: "10px", paddingBottom: "10px" }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#051C2E",
                lineHeight: "18px",
              }}
            >
              Explanation
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                color: "#475467",
                lineHeight: "20px",
                marginTop: "4px",
              }}
            >
              In the Trademarks Act of Canada, there is a section about unfair
              competition and prohibited signs. Section 11 states that no one is
              allowed to use any sign or combination of signs in their business
              as a trademark or in any other way if those signs were chosen in a
              way that goes against the rules in sections 9 or 10. In simple
              terms, you can't use prohibited signs for your business logo or
              trademark.
            </Typography>
            {!showEditExplanation ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "8px",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#475467",
                    lineHeight: "18px",
                  }}
                >
                  Was this helpful?
                </Typography>
                <img
                  src={HappyFace}
                  alt="happy-face-icon"
                  style={{
                    marginLeft: "20px",
                  }}
                />
                <img
                  src={NotHappyFace}
                  alt="not-happy-face-icon"
                  style={{
                    marginLeft: "16px",
                  }}
                />
                <img
                  src={EditIcon}
                  alt="edit"
                  style={{
                    marginLeft: "14px",
                  }}
                  onClick={() => {
                    setShowEditExplanation(true);
                  }}
                />
              </div>
            ) : (
              <div>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#344054",
                    lineHeight: "18px",
                    marginTop: "16px",
                  }}
                >
                  Edit Explanation
                </Typography>
                {!thankYouMesssage && (
                  <>
                    <TextField
                      label="Enter your statement"
                      id="outlined-multiline-flexible"
                      multiline
                      maxRows={4}
                      value={explainStatement}
                      onChange={(e) => {
                        onChangeExplanation(e.target.value);
                      }}
                      sx={{
                        marginTop: "4px",
                        width: "100%",
                        "& .MuiInputBase-root": {
                          padding: "0px",
                          border: "1px solid #35668A",
                          boxShadow: "0px 0px 0px 4px rgba(7, 136, 245, 0.15)",
                          fontSize: "14px",
                          fontWeight: 400,
                          color: "#1D2939",
                          lineHeight: "20px",
                        },
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 200,
                        color: "#FF0000",
                      }}
                    >
                      {error}
                    </Typography>
                  </>
                )}
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#475467",
                    lineHeight: "20px",
                    marginTop: "6px",
                  }}
                >
                  {" "}
                  {thankYouMesssage
                    ? "Thank you for your feedback!"
                    : "We would love to hear your feedback. If you have any suggestions on how to improve the above Assessment, please provide your modified Assessment in the box above then click Submit."}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    marginTop: "8px",
                    marginBottom: "8px",
                    boxShadow: "none",
                  }}
                >
                  {!thankYouMesssage && (
                    <Button
                      variant="contained"
                      sx={{
                        maxWidth: "76px !important",
                        height: "36px",
                        fontSize: "14px",
                        fontWeight: 600,
                        lineHeight: "18px",
                        textTransform: "capitalize",
                        marginRight: "12px",
                      }}
                      onClick={onSubmitExplanation}
                    >
                      Submit
                    </Button>
                  )}
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#475467",
                      lineHeight: "20px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                    onClick={() => {
                      setShowEditExplanation(false);
                      setThankYouMessage(false);
                    }}
                  >
                    Cancel
                  </Typography>
                </div>
              </div>
            )}
            <Divider />
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#051C2E",
                lineHeight: "18px",
                marginTop: "8px",
              }}
            >
              Source
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                color: "#475467",
                lineHeight: "20px",
                marginTop: "4px",
              }}
            >
              No person shall use in connection with a business, as a trademark
              or otherwise, any sign or combination of signs adopted contrary to
              section 9 or 10.
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "8px",
              }}
            >
              <img src={BookIcon} alt="book-icon" />
              <Link href="#" target="_blank">
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#475467",
                    lineHeight: "20px",
                    marginLeft: "4px",
                  }}
                >
                  Source
                </Typography>
              </Link>
            </div>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#051C2E",
                lineHeight: "18px",
                marginTop: "20px",
              }}
            >
              Assessments
            </Typography>
            <div
              style={{
                marginTop: "24px",
              }}
            >
              <LoadingButton
                sx={{
                  width: "247px",
                  height: "36px",
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "20px",
                  borderRadius: "8px",
                  padding: "0px",
                  marginRight: "12px",
                }}
                // onClick={handelAnalyze}
                endIcon={<img src={RightArrowIcon} alt="" />}
                loading={false}
                loadingPosition="end"
                variant="contained"
              >
                Generate Basic Assessment
              </LoadingButton>
              <LoadingButton
                sx={{
                  width: "278px",
                  height: "36px",
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "20px",
                  borderRadius: "8px",
                  padding: "0px",
                }}
                // onClick={handelAnalyze}
                endIcon={<img src={RightArrowIcon} alt="" />}
                loading={false}
                loadingPosition="end"
                variant="contained"
              >
                Generate Advanced Assessment
              </LoadingButton>
            </div>
            <div
              style={{
                border: "1px solid #FDA29B",
                borderRadius: "12px",
                marginTop: "20px",
                backgroundColor: "#FFFBFA",
              }}
            >
              <div
                style={{
                  margin: "16px",
                  display: "flex",
                }}
              >
                <CloseIcon
                  style={{
                    marginRight: "17px",
                    color: "#D92D20",
                  }}
                />
                <div>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#B42318",
                      lineHeight: "20px",
                    }}
                  >
                    {" "}
                    Basic Assessment
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#B42318",
                      lineHeight: "20px",
                      marginTop: "4px",
                    }}
                  >
                    {" "}
                    This section may not be applicable as it pertains to the
                    illegal conveyance of instruments for coining out of a mint,
                    and not theft or stealing of money from an office. The
                    relevant section for theft or stealing of money would be
                    under the Criminal Code of Canada's Offences Against
                    Property.
                  </Typography>
                </div>
              </div>
              {!showEditBasicAssessment ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "8px",
                    marginBottom: "16px",
                    marginRight: "16px",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#B42318",
                      lineHeight: "18px",
                    }}
                  >
                    Was this helpful?
                  </Typography>
                  <TagFacesIcon
                    style={{
                      marginLeft: "20px",
                      color: "#B42318",
                    }}
                  />
                  <SentimentVeryDissatisfiedIcon
                    style={{
                      marginLeft: "16px",
                      color: "#B42318",
                    }}
                  />
                  <DriveFileRenameOutlineIcon
                    style={{
                      marginLeft: "14px",
                      color: "#B42318",
                    }}
                    onClick={() => {
                      setShowEditBasicAssessment(true);
                    }}
                  />
                </div>
              ) : (
                <div
                  style={{
                    margin: "16px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#B42318",
                      lineHeight: "18px",
                      marginTop: "16px",
                    }}
                  >
                    Edit Basic Assessment
                  </Typography>
                  {!thankYouMesssage && (
                    <>
                      <TextField
                        label="Enter your statement"
                        id="outlined-multiline-flexible"
                        multiline
                        maxRows={4}
                        value={explainStatement}
                        onChange={(e) => {
                          onChangeExplanation(e.target.value);
                        }}
                        sx={{
                          marginTop: "4px",
                          width: "100%",
                          "& .MuiInputBase-root": {
                            padding: "0px",
                            border: "1px solid #35668A",
                            boxShadow:
                              "0px 0px 0px 4px rgba(7, 136, 245, 0.15)",
                            fontSize: "14px",
                            fontWeight: 400,
                            color: "#B42318",
                            lineHeight: "20px",
                          },
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: 200,
                          color: "#FF0000",
                        }}
                      >
                        {error}
                      </Typography>
                    </>
                  )}
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#B42318",
                      lineHeight: "20px",
                      marginTop: "6px",
                    }}
                  >
                    {" "}
                    {thankYouMesssage
                      ? "Thank you for your feedback!"
                      : "We would love to hear your feedback. If you have any suggestions on how to improve the above Assessment, please provide your modified Assessment in the box above then click Submit."}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "baseline",
                      marginTop: "8px",
                      marginBottom: "8px",
                      boxShadow: "none",
                    }}
                  >
                    {!thankYouMesssage && (
                      <Button
                        variant="contained"
                        sx={{
                          maxWidth: "76px !important",
                          height: "36px",
                          fontSize: "14px",
                          fontWeight: 600,
                          lineHeight: "18px",
                          textTransform: "capitalize",
                          marginRight: "12px",
                        }}
                        onClick={onSubmitExplanation}
                      >
                        Submit
                      </Button>
                    )}
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#475467",
                        lineHeight: "20px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      }}
                      onClick={() => {
                        setShowEditBasicAssessment(false);
                        setThankYouMessage(false);
                      }}
                    >
                      Cancel
                    </Typography>
                  </div>
                </div>
              )}
            </div>
            <div
              style={{
                border: "1px solid #6CE9A6",
                borderRadius: "12px",
                marginTop: "20px",
                backgroundColor: "#F6FEF9",
              }}
            >
              <div
                style={{
                  margin: "16px",
                  display: "flex",
                }}
              >
                <CheckIcon
                  style={{
                    marginRight: "17px",
                    color: "#039855",
                  }}
                />
                <div>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#027A48",
                      lineHeight: "20px",
                    }}
                  >
                    {" "}
                    Advanced Assessment
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#027A48",
                      lineHeight: "20px",
                      marginTop: "4px",
                    }}
                  >
                    {" "}
                    This section may be applicable because using a copyrighted
                    work, such as a logo, without the owner's permission can be
                    considered an infringement of copyright under the Copyright
                    Act of Canada.
                  </Typography>
                </div>
              </div>
              {!showEditAdvancedAssessment ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "8px",
                    marginBottom: "16px",
                    marginRight: "16px",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#027A48",
                      lineHeight: "18px",
                    }}
                  >
                    Was this helpful?
                  </Typography>
                  <TagFacesIcon
                    style={{
                      marginLeft: "20px",
                      color: "#027A48",
                    }}
                  />
                  <SentimentVeryDissatisfiedIcon
                    style={{
                      marginLeft: "16px",
                      color: "#027A48",
                    }}
                  />
                  <DriveFileRenameOutlineIcon
                    style={{
                      marginLeft: "14px",
                      color: "#027A48",
                    }}
                    onClick={() => {
                      setShowEditAdvancedAssessment(true);
                    }}
                  />
                </div>
              ) : (
                <div
                  style={{
                    margin: "16px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#027A48",
                      lineHeight: "18px",
                      marginTop: "16px",
                    }}
                  >
                    Edit Advanced Assessment
                  </Typography>
                  {!thankYouMesssage && (
                    <>
                      <TextField
                        label="Enter your statement"
                        id="outlined-multiline-flexible"
                        multiline
                        maxRows={4}
                        value={explainStatement}
                        onChange={(e) => {
                          onChangeExplanation(e.target.value);
                        }}
                        sx={{
                          marginTop: "4px",
                          width: "100%",
                          "& .MuiInputBase-root": {
                            padding: "0px",
                            border: "1px solid #35668A",
                            boxShadow:
                              "0px 0px 0px 4px rgba(7, 136, 245, 0.15)",
                            fontSize: "14px",
                            fontWeight: 400,
                            // color: "#1D2939",
                            color: "#027A48",
                            lineHeight: "20px",
                          },
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: 200,
                          color: "#FF0000",
                        }}
                      >
                        {error}
                      </Typography>
                    </>
                  )}
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#027A48",
                      lineHeight: "20px",
                      marginTop: "6px",
                    }}
                  >
                    {" "}
                    {thankYouMesssage
                      ? "Thank you for your feedback!"
                      : "We would love to hear your feedback. If you have any suggestions on how to improve the above Assessment, please provide your modified Assessment in the box above then click Submit."}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "baseline",
                      marginTop: "8px",
                      marginBottom: "8px",
                      boxShadow: "none",
                    }}
                  >
                    {!thankYouMesssage && (
                      <Button
                        variant="contained"
                        sx={{
                          maxWidth: "76px !important",
                          height: "36px",
                          fontSize: "14px",
                          fontWeight: 600,
                          lineHeight: "18px",
                          textTransform: "capitalize",
                          marginRight: "12px",
                        }}
                        onClick={onSubmitExplanation}
                      >
                        Submit
                      </Button>
                    )}
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#475467",
                        lineHeight: "20px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      }}
                      onClick={() => {
                        setShowEditAdvancedAssessment(false);
                        setThankYouMessage(false);
                      }}
                    >
                      Cancel
                    </Typography>
                  </div>
                </div>
              )}
            </div>
          </Box>
        </AccordionDetails>
      </Accordion>
    </React.Fragment>
  );
}

function RowMobile(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<String>("");
  const [explainStatement, setExplainStatement] = useState<String>(
    "In the Trademarks Act of Canada, there is a section about unfair competition and prohibited signs. Section 11 states that no one is allowed to use any sign or combination of signs in their business as a trademark or in any other way if those signs were chosen in a way that goes against the rules in sections 9 or 10. In simple terms, you can't use prohibited signs for your business logo or trademark."
  );
  const [thankYouMesssage, setThankYouMessage] = useState<boolean>(false);
  const [showEditExplanation, setShowEditExplanation] =
    useState<boolean>(false);
  const [showEditBasicAssessment, setShowEditBasicAssessment] =
    useState<boolean>(false);
  const [showEditAdvancedAssessment, setShowEditAdvancedAssessment] =
    useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<Boolean>(false);

  /**
   * @description: This function is used to check value of explain statement when change
   * @param {event} event
   * @returns {void}
   *  const onChangeExplanation
   */
  const onChangeExplanation = (event: any) => {
    setExplainStatement(event);
  };

  /**
   * @description: This function is used to handle submit button for explanation value
   * @param {event} event
   * @returns {void}
   * const onSubmitExplanation
   * */
  const onSubmitExplanation = (event: any) => {
    event.preventDefault();
    if (explainStatement === "") {
      setError("Field is required");
    } else {
      setError("");
      const comparisonResult = explainStatement.localeCompare(
        "In the Trademarks Act of Canada, there is a section about unfair competition and prohibited signs. Section 11 states that no one is allowed to use any sign or combination of signs in their business as a trademark or in any other way if those signs were chosen in a way that goes against the rules in sections 9 or 10. In simple terms, you can't use prohibited signs for your business logo or trademark."
      );
      if (comparisonResult !== 0) {
        setThankYouMessage(true);
      }
    }
  };

  const handleChange = (event: any, isExpanded: any) => {
    setIsExpanded(isExpanded);
    console.log("Accordion is expanded:", isExpanded);
  };

  return (
    <React.Fragment>
      <Accordion onChange={handleChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          // onClick={ (e) => console.log(e)}
        >
         <img src={starIcon} alt="star-icon" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "24px",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#101828",
                lineHeight: "20px",
              }}
            >
              {row.calories}
            </Typography>
            <Breadcrumbs
              maxItems={2}
              aria-label="breadcrumb"
              separator={<NavigateNextIcon fontSize="small" />}
              sx={{
                "& .MuiBreadcrumbs-separator": {
                  margin: "0px",
                },
                "& .MuiButtonBase-root": {
                  background: "transparent",
                  margin: "0px",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#475467",
                  lineHeight: "18px",
                }}
              >
                Canada
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#475467",
                  lineHeight: "18px",
                }}
              >
                Belts
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#475467",
                  lineHeight: "18px",
                }}
              >
                Criminal Code (R.S.C., 1985, c. C-46)
              </Typography>
            </Breadcrumbs>
            <div style={{
              marginTop: "8px",
            }}>
            {row.fat === 1 && (
            <div>
              <img
                src={basicCheckIcon}
                alt="basic-check-icon"
                style={{
                  marginRight: "4px",
                  height: "25px",
                }}
              />
              <img src={AdvanceIcon} alt="advance-icon" style={{height: "25px",}} />
            </div>
          )}
          {row.fat === 2 && (
            <div>
              <img
                src={basicCheckIcon}
                alt="basic-check-icon"
                style={{
                  marginRight: "4px",
                  height: "25px"
                }}
              />
              <img src={AdvanceCheckIcon} alt="advance-icon" style={{height: "25px",}} />
            </div>
          )}
          {row.fat === 3 && (
            <div>
              <img
                src={BasicIcon}
                alt="basic-check-icon"
                style={{
                  marginRight: "4px",
                  height: "25px"
                }}
              />
              <img src={AdvanceIcon} alt="advance-icon" style={{height: "25px",}} />
            </div>
          )}
          </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ margin: 1, paddingTop: "10px", paddingBottom: "10px" }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#051C2E",
                lineHeight: "18px",
              }}
            >
              Explanation
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                color: "#475467",
                lineHeight: "20px",
                marginTop: "4px",
              }}
            >
              In the Trademarks Act of Canada, there is a section about unfair
              competition and prohibited signs. Section 11 states that no one is
              allowed to use any sign or combination of signs in their business
              as a trademark or in any other way if those signs were chosen in a
              way that goes against the rules in sections 9 or 10. In simple
              terms, you can't use prohibited signs for your business logo or
              trademark.
            </Typography>
            {!showEditExplanation ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "8px",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#475467",
                    lineHeight: "18px",
                  }}
                >
                  Was this helpful?
                </Typography>
                <img
                  src={HappyFace}
                  alt="happy-face-icon"
                  style={{
                    marginLeft: "20px",
                  }}
                />
                <img
                  src={NotHappyFace}
                  alt="not-happy-face-icon"
                  style={{
                    marginLeft: "16px",
                  }}
                />
                <img
                  src={EditIcon}
                  alt="edit"
                  style={{
                    marginLeft: "14px",
                  }}
                  onClick={() => {
                    setShowEditExplanation(true);
                  }}
                />
              </div>
            ) : (
              <div>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#344054",
                    lineHeight: "18px",
                    marginTop: "16px",
                  }}
                >
                  Edit Explanation
                </Typography>
                {!thankYouMesssage && (
                  <>
                    <TextField
                      label="Enter your statement"
                      id="outlined-multiline-flexible"
                      multiline
                      maxRows={4}
                      value={explainStatement}
                      onChange={(e) => {
                        onChangeExplanation(e.target.value);
                      }}
                      sx={{
                        marginTop: "4px",
                        width: "100%",
                        "& .MuiInputBase-root": {
                          padding: "0px",
                          border: "1px solid #35668A",
                          boxShadow: "0px 0px 0px 4px rgba(7, 136, 245, 0.15)",
                          fontSize: "14px",
                          fontWeight: 400,
                          color: "#1D2939",
                          lineHeight: "20px",
                        },
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 200,
                        color: "#FF0000",
                      }}
                    >
                      {error}
                    </Typography>
                  </>
                )}
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#475467",
                    lineHeight: "20px",
                    marginTop: "6px",
                  }}
                >
                  {" "}
                  {thankYouMesssage
                    ? "Thank you for your feedback!"
                    : "We would love to hear your feedback. If you have any suggestions on how to improve the above Assessment, please provide your modified Assessment in the box above then click Submit."}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    marginTop: "8px",
                    marginBottom: "8px",
                    boxShadow: "none",
                  }}
                >
                  {!thankYouMesssage && (
                    <Button
                      variant="contained"
                      sx={{
                        maxWidth: "76px !important",
                        height: "36px",
                        fontSize: "14px",
                        fontWeight: 600,
                        lineHeight: "18px",
                        textTransform: "capitalize",
                        marginRight: "12px",
                      }}
                      onClick={onSubmitExplanation}
                    >
                      Submit
                    </Button>
                  )}
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#475467",
                      lineHeight: "20px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                    onClick={() => {
                      setShowEditExplanation(false);
                      setThankYouMessage(false);
                    }}
                  >
                    Cancel
                  </Typography>
                </div>
              </div>
            )}
            <Divider />
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#051C2E",
                lineHeight: "18px",
                marginTop: "8px",
              }}
            >
              Source
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                color: "#475467",
                lineHeight: "20px",
                marginTop: "4px",
              }}
            >
              No person shall use in connection with a business, as a trademark
              or otherwise, any sign or combination of signs adopted contrary to
              section 9 or 10.
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "8px",
              }}
            >
              <img src={BookIcon} alt="book-icon" />
              <Link href="#" target="_blank">
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#475467",
                    lineHeight: "20px",
                    marginLeft: "4px",
                  }}
                >
                  Source
                </Typography>
              </Link>
            </div>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#051C2E",
                lineHeight: "18px",
                marginTop: "20px",
              }}
            >
              Assessments
            </Typography>
            <div
              style={{
                marginTop: "24px",
              }}
            >
              <LoadingButton
                sx={{
                  height: "36px",
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "20px",
                  borderRadius: "8px",
                  padding: "0px",
                  marginRight: "12px",
                }}
                // onClick={handelAnalyze}
                endIcon={<img src={RightArrowIcon} alt="" />}
                loading={false}
                loadingPosition="end"
                variant="contained"
              >
                Generate Basic Assessment
              </LoadingButton>
              <LoadingButton
                sx={{
                  height: "36px",
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "20px",
                  borderRadius: "8px",
                  padding: "0px",
                  marginTop: "12px",
                }}
                // onClick={handelAnalyze}
                endIcon={<img src={RightArrowIcon} alt="" />}
                loading={false}
                loadingPosition="end"
                variant="contained"
              >
                Generate Advanced Assessment
              </LoadingButton>
            </div>
            <div
              style={{
                border: "1px solid #FDA29B",
                borderRadius: "12px",
                marginTop: "20px",
                backgroundColor: "#FFFBFA",
              }}
            >
              <div
                style={{
                  margin: "16px",
                  display: "flex",
                }}
              >
                <CloseIcon
                  style={{
                    marginRight: "17px",
                    color: "#D92D20",
                  }}
                />
                <div>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#B42318",
                      lineHeight: "20px",
                    }}
                  >
                    {" "}
                    Basic Assessment
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#B42318",
                      lineHeight: "20px",
                      marginTop: "4px",
                    }}
                  >
                    {" "}
                    This section may not be applicable as it pertains to the
                    illegal conveyance of instruments for coining out of a mint,
                    and not theft or stealing of money from an office. The
                    relevant section for theft or stealing of money would be
                    under the Criminal Code of Canada's Offences Against
                    Property.
                  </Typography>
                </div>
              </div>
              {!showEditBasicAssessment ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "8px",
                    marginBottom: "16px",
                    marginRight: "16px",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#B42318",
                      lineHeight: "18px",
                    }}
                  >
                    Was this helpful?
                  </Typography>
                  <TagFacesIcon
                    style={{
                      marginLeft: "20px",
                      color: "#B42318",
                    }}
                  />
                  <SentimentVeryDissatisfiedIcon
                    style={{
                      marginLeft: "16px",
                      color: "#B42318",
                    }}
                  />
                  <DriveFileRenameOutlineIcon
                    style={{
                      marginLeft: "14px",
                      color: "#B42318",
                    }}
                    onClick={() => {
                      setShowEditBasicAssessment(true);
                    }}
                  />
                </div>
              ) : (
                <div
                  style={{
                    margin: "16px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#B42318",
                      lineHeight: "18px",
                      marginTop: "16px",
                    }}
                  >
                    Edit Basic Assessment
                  </Typography>
                  {!thankYouMesssage && (
                    <>
                      <TextField
                        label="Enter your statement"
                        id="outlined-multiline-flexible"
                        multiline
                        maxRows={4}
                        value={explainStatement}
                        onChange={(e) => {
                          onChangeExplanation(e.target.value);
                        }}
                        sx={{
                          marginTop: "4px",
                          width: "100%",
                          "& .MuiInputBase-root": {
                            padding: "0px",
                            border: "1px solid #35668A",
                            boxShadow:
                              "0px 0px 0px 4px rgba(7, 136, 245, 0.15)",
                            fontSize: "14px",
                            fontWeight: 400,
                            color: "#B42318",
                            lineHeight: "20px",
                          },
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: 200,
                          color: "#FF0000",
                        }}
                      >
                        {error}
                      </Typography>
                    </>
                  )}
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#B42318",
                      lineHeight: "20px",
                      marginTop: "6px",
                    }}
                  >
                    {" "}
                    {thankYouMesssage
                      ? "Thank you for your feedback!"
                      : "We would love to hear your feedback. If you have any suggestions on how to improve the above Assessment, please provide your modified Assessment in the box above then click Submit."}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "baseline",
                      marginTop: "8px",
                      marginBottom: "8px",
                      boxShadow: "none",
                    }}
                  >
                    {!thankYouMesssage && (
                      <Button
                        variant="contained"
                        sx={{
                          maxWidth: "76px !important",
                          height: "36px",
                          fontSize: "14px",
                          fontWeight: 600,
                          lineHeight: "18px",
                          textTransform: "capitalize",
                          marginRight: "12px",
                        }}
                        onClick={onSubmitExplanation}
                      >
                        Submit
                      </Button>
                    )}
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#475467",
                        lineHeight: "20px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      }}
                      onClick={() => {
                        setShowEditBasicAssessment(false);
                        setThankYouMessage(false);
                      }}
                    >
                      Cancel
                    </Typography>
                  </div>
                </div>
              )}
            </div>
            <div
              style={{
                border: "1px solid #6CE9A6",
                borderRadius: "12px",
                marginTop: "20px",
                backgroundColor: "#F6FEF9",
              }}
            >
              <div
                style={{
                  margin: "16px",
                  display: "flex",
                }}
              >
                <CheckIcon
                  style={{
                    marginRight: "17px",
                    color: "#039855",
                  }}
                />
                <div>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#027A48",
                      lineHeight: "20px",
                    }}
                  >
                    {" "}
                    Advanced Assessment
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#027A48",
                      lineHeight: "20px",
                      marginTop: "4px",
                    }}
                  >
                    {" "}
                    This section may be applicable because using a copyrighted
                    work, such as a logo, without the owner's permission can be
                    considered an infringement of copyright under the Copyright
                    Act of Canada.
                  </Typography>
                </div>
              </div>
              {!showEditAdvancedAssessment ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "8px",
                    marginBottom: "16px",
                    marginRight: "16px",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#027A48",
                      lineHeight: "18px",
                    }}
                  >
                    Was this helpful?
                  </Typography>
                  <TagFacesIcon
                    style={{
                      marginLeft: "20px",
                      color: "#027A48",
                    }}
                  />
                  <SentimentVeryDissatisfiedIcon
                    style={{
                      marginLeft: "16px",
                      color: "#027A48",
                    }}
                  />
                  <DriveFileRenameOutlineIcon
                    style={{
                      marginLeft: "14px",
                      color: "#027A48",
                    }}
                    onClick={() => {
                      setShowEditAdvancedAssessment(true);
                    }}
                  />
                </div>
              ) : (
                <div
                  style={{
                    margin: "16px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#027A48",
                      lineHeight: "18px",
                      marginTop: "16px",
                    }}
                  >
                    Edit Advanced Assessment
                  </Typography>
                  {!thankYouMesssage && (
                    <>
                      <TextField
                        label="Enter your statement"
                        id="outlined-multiline-flexible"
                        multiline
                        maxRows={4}
                        value={explainStatement}
                        onChange={(e) => {
                          onChangeExplanation(e.target.value);
                        }}
                        sx={{
                          marginTop: "4px",
                          width: "100%",
                          "& .MuiInputBase-root": {
                            padding: "0px",
                            border: "1px solid #35668A",
                            boxShadow:
                              "0px 0px 0px 4px rgba(7, 136, 245, 0.15)",
                            fontSize: "14px",
                            fontWeight: 400,
                            // color: "#1D2939",
                            color: "#027A48",
                            lineHeight: "20px",
                          },
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: 200,
                          color: "#FF0000",
                        }}
                      >
                        {error}
                      </Typography>
                    </>
                  )}
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#027A48",
                      lineHeight: "20px",
                      marginTop: "6px",
                    }}
                  >
                    {" "}
                    {thankYouMesssage
                      ? "Thank you for your feedback!"
                      : "We would love to hear your feedback. If you have any suggestions on how to improve the above Assessment, please provide your modified Assessment in the box above then click Submit."}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "baseline",
                      marginTop: "8px",
                      marginBottom: "8px",
                      boxShadow: "none",
                    }}
                  >
                    {!thankYouMesssage && (
                      <Button
                        variant="contained"
                        sx={{
                          maxWidth: "76px !important",
                          height: "36px",
                          fontSize: "14px",
                          fontWeight: 600,
                          lineHeight: "18px",
                          textTransform: "capitalize",
                          marginRight: "12px",
                        }}
                        onClick={onSubmitExplanation}
                      >
                        Submit
                      </Button>
                    )}
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#475467",
                        lineHeight: "20px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      }}
                      onClick={() => {
                        setShowEditAdvancedAssessment(false);
                        setThankYouMessage(false);
                      }}
                    >
                      Cancel
                    </Typography>
                  </div>
                </div>
              )}
            </div>
          </Box>
        </AccordionDetails>
      </Accordion>
    </React.Fragment>
  );
}

const rows = [
  createData(1, "11 - Further prohibitions", 1, 6.0, 24, 4.0),
  createData(
    1,
    "363 - Obtaining execution of valuable security by fraud",
    2,
    9.0,
    37,
    4.3
  ),
  createData(1, "399 - False return by public officer", 3, 16.0, 24, 6.0),
  createData(1, "336 - Criminal breach of trust", 2, 3.7, 67, 4.3),
  createData(1, "342.1 - Unauthorized use of computer", 1, 16.0, 49, 3.9),
  createData(1, "356 - Theft from mail", 3, 6.0, 24, 4.0),
  createData(1, "Ice cream sandwich", 1, 9.0, 37, 4.3),
  createData(1, "Eclair", 2, 16.0, 24, 6.0),
  createData(1, "Cupcake", 3, 3.7, 67, 4.3),
  createData(1, "Gingerbread", 3, 16.0, 49, 3.9),
  createData(1, "Frozen yoghurt", 1, 6.0, 24, 4.0),
  createData(1, "Ice cream sandwich", 2, 9.0, 37, 4.3),
  createData(1, "Eclair", 2, 16.0, 24, 6.0),
  createData(1, "Cupcake", 3, 3.7, 67, 4.3),
  createData(1, "Gingerbread", 3, 16.0, 49, 3.9),
  createData(1, "Frozen yoghurt", 1, 6.0, 24, 4.0),
  createData(1, "Ice cream sandwich", 2, 9.0, 37, 4.3),
  createData(1, "Eclair", 2, 16.0, 24, 6.0),
];
export default function CollapsibleTable() {
  const { t } = useTranslation();
  const [page, setPage] = React.useState(0);
  const navigate = useNavigate();
  // const theme = useTheme();
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const pageNumbers = Array.from({ length: 4 }, (_, index) => index + 1);
  const [openConfirmDialog, setOpenConfirmDialog] = useState<boolean>(false);
  const [loading, setLoading] = React.useState(false);

  // const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  /**
   * @description: This function is used to handel open confirm dialog box
   * @param {event} event
   * @returns {void}
   * const handelOpenConfirmDialog
   * */
  const handelOpenConfirmDialog = () => {
    setOpenConfirmDialog(true);
  };

  /**
   * @description: This function is used to handel confirm dialog box response
   * @param {event} event
   * @returns {void}
   * const handelConfirmDialogResponse
   * */

  const handleConfirmDialog = (response: boolean) => {
    if (response) {
      /**
       * service for delete statement suggestion
       *
       */
      deleteStatement("statementId")
        .then((response: any) => {
          console.log("Statement received:", response);
          setOpenConfirmDialog(false);
          navigate("/home")
        })
        .catch((error) => {
          setOpenConfirmDialog(false);
          console.error("Error occurred:", error);
        });
    }
  };

  /**
   * function for generate all assignments 
   */
  const generateAllAssignments = () => {
    setLoading(true);
    /**
     * calling service for generate all assessments
    */
    getAllAssessments()
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const MobileDisplay = () => (
    <Box sx={{display:{xs:"block",sm:"block",md:"none",lg:"none",xl:"none"}}}>
      <div
        style={ {
          marginTop: "12px",
          marginBottom: "20px",
        } }
      >
        <LoadingButton
          sx={ {
            height: "32px",
            fontSize: "14px",
            fontWeight: "600",
            lineHeight: "20px",
            borderRadius: "8px",
            backgroundColor: "#06AED4",
            padding: "0px",
            "&:hover": {
              backgroundColor: "secondary.main",
            },
          } }
          onClick={ generateAllAssignments }
          loading={ loading }
          loadingPosition="end"
          variant="contained"
        >
          {t("AnalyzedStatements.IdentifiedSections.GenerateAllAssessments")}
        </LoadingButton>
        <div style={{
          marginTop: "12px",
          display: "flex",
        }}>
          <Button
            sx={ {
              width: "30%",
              height: "32px",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "20px",
              borderRadius: "8px",
              border: "1px solid #D0D5DD",
              backgroundColor: "#F9F9FB",
              color: "#475467",
              padding: "0px",
              letterSpacing: "0px",
              "&:hover": {
                backgroundColor: "#F9F9FB",
              },
            } }
          >
            { " " }
            <img
              src={ filterIcon }
              alt="filter"
              style={ {
                width: "15px",
                height: "20px",
                marginRight: "8px",
              } }
            />
            {t("CommonStrings.FilterButton")}
          </Button>
          <Button
            sx={ {
              width: "70%",
              height: "32px",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "20px",
              borderRadius: "8px",
              border: "1px solid #D0D5DD",
              backgroundColor: "#F9F9FB",
              color: "#98A2B3",
              padding: "0px",
              marginLeft: "16px",
              letterSpacing: "0px",
              justifyContent: "flex-start",
              "&:hover": {
                backgroundColor: "#F9F9FB",
              },
            } }
          >
            { " " }
            <img
              src={ searchIcon }
              alt="filter"
              style={ {
                width: "17px",
                height: "17px",
                marginRight: "9.5px",
                marginLeft: "10.5px",
                color: "#98A2B3",
              } }
            />
            {t("CommonStrings.SearchBar.Placeholder")}
          </Button>
        </div>
      </div>
      <TableContainer component={Paper} sx={{
        "& .MuiTableContainer" : {
          ":root": {
            width: "90%",
          },
        },
      }}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  padding: "13px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#475467",
                    lineHeight: "18px",
                    marginLeft: "50px",
                    width: "45%",
                    maxWidth: "305px",
                  }}
                >
                  {t("AnalyzedStatements.Sections")}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#475467",
                    lineHeight: "18px",
                  }}
                >
                  {" "}
                  {t("AnalyzedStatements.Table.Header.Assessments")}
                  <img
                    src={AssessmentIcon}
                    alt="Assessment"
                    style={{
                      width: "13.33px",
                      height: "13.33px",
                      marginLeft: "5px",
                    }}
                  />
                </Typography>
              </Box>
              <Divider />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <RowMobile key={row.name} row={row} />
              ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={() => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                padding: 1,
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "15px",
                }}
                onClick={() => {
                  page !== 0 && handleChangePage(null, page - 1);
                }}
              >
                <IconButton disabled={page === 0} aria-label="previous page">
                  <ArrowBackIcon />
                </IconButton>
                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: page === 0 ? "#00000061" : "#475467",
                    lineHeight: "20px",
                    cursor: page === 0 ? "default" : "pointer",
                  }}
                >
                  {" "}
                  {t("CommonStrings.Table.Pagination.Previous")}
                </Typography>
              </div>
              {Array.from(
                { length: paginationNumber(rows.length, rowsPerPage) },
                (_, index) => index + 1
              ).map((pageNumber) => (
                <Typography
                  key={pageNumber}
                  sx={{
                    fontSize: "14px",
                    fontWeight: page + 1 === pageNumber ? 600 : 500,
                    color: page === pageNumber ? "#1D2939" : "#475467",
                    lineHeight: "20px",
                    marginLeft: "15px",
                    marginRight: "15px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleChangePage(null, pageNumber - 1);
                  }}
                >
                  {" "}
                  {pageNumber}{" "}
                </Typography>
              ))}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: "15px",
                }}
                onClick={() => {
                  page !== paginationNumber(rows.length, rowsPerPage) - 1 &&
                    handleChangePage(null, page + 1);
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color:
                      page !== paginationNumber(rows.length, rowsPerPage) - 1
                        ? "#475467"
                        : "#00000061",
                    lineHeight: "20px",
                    cursor:
                      page !== paginationNumber(rows.length, rowsPerPage) - 1
                        ? "default"
                        : "pointer",
                  }}
                >
                  {" "}
                  {t("CommonStrings.Table.Pagination.Next")}
                </Typography>
                <IconButton
                  disabled={
                    page >= paginationNumber(rows.length, rowsPerPage) - 1
                  }
                  aria-label="next page"
                >
                  <ArrowForwardIcon />
                </IconButton>
              </div>
            </Box>
          )}
        />
      </TableContainer>
    </Box>
  );

  const DesktopDisplay = () => (
    <Box sx={{display:{xs:"none",sm:"none",md:"block",lg:"block",xl:"block"}}}>
      <div
        style={ {
          marginTop: "12px",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
        } }
      >
        <LoadingButton
          sx={ {
            width: "225px",
            height: "32px",
            fontSize: "14px",
            fontWeight: "600",
            lineHeight: "20px",
            borderRadius: "8px",
            backgroundColor: "#06AED4",
            padding: "0px",
            "&:hover": {
              backgroundColor: "secondary.main",
            },
          } }
          onClick={ generateAllAssignments }
          loading={ loading }
          loadingPosition="end"
          variant="contained"
        >
          {t("AnalyzedStatements.IdentifiedSections.GenerateAllAssessments")}
        </LoadingButton>
        <div style={{
          marginTop: "12px",
          display: "flex",
        }}>
          <Button
            sx={ {
              width: "87px",
              height: "32px",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "20px",
              borderRadius: "8px",
              border: "1px solid #D0D5DD",
              backgroundColor: "#F9F9FB",
              color: "#475467",
              padding: "0px",
              letterSpacing: "0px",
              "&:hover": {
                backgroundColor: "#F9F9FB",
              },
            } }
          >
            { " " }
            <img
              src={ filterIcon }
              alt="filter"
              style={ {
                width: "15px",
                height: "20px",
                marginRight: "8px",
              } }
            />
            {t("CommonStrings.FilterButton")}
          </Button>
          <Button
            sx={ {
              width: "200px",
              height: "32px",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "20px",
              borderRadius: "8px",
              border: "1px solid #D0D5DD",
              backgroundColor: "#F9F9FB",
              color: "#98A2B3",
              padding: "0px",
              marginLeft: "16px",
              letterSpacing: "0px",
              justifyContent: "flex-start",
              "&:hover": {
                backgroundColor: "#F9F9FB",
              },
            } }
          >
            { " " }
            <img
              src={ searchIcon }
              alt="filter"
              style={ {
                width: "17px",
                height: "17px",
                marginRight: "9.5px",
                marginLeft: "10.5px",
                color: "#98A2B3",
              } }
            />
            {t("CommonStrings.SearchBar.Placeholder")}
          </Button>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  padding: "13px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#475467",
                    lineHeight: "18px",
                    marginLeft: "50px",
                    width: "100%",
                    maxWidth: "685px",
                  }}
                >
                  {t("AnalyzedStatements.Sections")}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#475467",
                    lineHeight: "18px",
                  }}
                >
                  {" "}
                  {t("AnalyzedStatements.Table.Header.Assessments")}
                  <img
                    src={AssessmentIcon}
                    alt="Assessment"
                    style={{
                      width: "13.33px",
                      height: "13.33px",
                      marginLeft: "5px",
                    }}
                  />
                </Typography>
              </Box>
              <Divider />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <RowForDesktop key={row.name} row={row} />
              ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={() => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                padding: 1,
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "15px",
                }}
                onClick={() => {
                  page !== 0 && handleChangePage(null, page - 1);
                }}
              >
                <IconButton disabled={page === 0} aria-label="previous page">
                  <ArrowBackIcon />
                </IconButton>
                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: page === 0 ? "#00000061" : "#475467",
                    lineHeight: "20px",
                    cursor: page === 0 ? "default" : "pointer",
                  }}
                >
                  {" "}
                  {t("CommonStrings.Table.Pagination.Previous")}
                </Typography>
              </div>
              {Array.from(
                { length: paginationNumber(rows.length, rowsPerPage) },
                (_, index) => index + 1
              ).map((pageNumber) => (
                <Typography
                  key={pageNumber}
                  sx={{
                    fontSize: "14px",
                    fontWeight: page + 1 === pageNumber ? 600 : 500,
                    color: page === pageNumber ? "#1D2939" : "#475467",
                    lineHeight: "20px",
                    marginLeft: "15px",
                    marginRight: "15px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleChangePage(null, pageNumber - 1);
                  }}
                >
                  {" "}
                  {pageNumber}{" "}
                </Typography>
              ))}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: "15px",
                }}
                onClick={() => {
                  page !== paginationNumber(rows.length, rowsPerPage) - 1 &&
                    handleChangePage(null, page + 1);
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color:
                      page !== paginationNumber(rows.length, rowsPerPage) - 1
                        ? "#475467"
                        : "#00000061",
                    lineHeight: "20px",
                    cursor:
                      page !== paginationNumber(rows.length, rowsPerPage) - 1
                        ? "default"
                        : "pointer",
                  }}
                >
                  {" "}
                  {t("CommonStrings.Table.Pagination.Next")}
                </Typography>
                <IconButton
                  disabled={
                    page >= paginationNumber(rows.length, rowsPerPage) - 1
                  }
                  aria-label="next page"
                >
                  <ArrowForwardIcon />
                </IconButton>
              </div>
            </Box>
          )}
        />
      </TableContainer>
    </Box>
  );
  

  return (
    <Box>
      <MobileDisplay />
      <DesktopDisplay />
      <div style={{
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "24px",
      }}>
        <div style={{
          marginRight: "26px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
        onClick={() => navigate("/home")}
        >
        <ArrowForwardIcon />
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            color: "#051C2E",
            lineHeight: "20px",
          }}
        >
           View Statements
        </Typography>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
        onClick={handelOpenConfirmDialog}
        >
        <DeleteIcon style={{
          color: "#B42318",
        }} />
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            color: "#B42318",
            lineHeight: "20px",
          }}
        >

           Delete Statement
        </Typography>
        </div>
        <Dialog
        open={openConfirmDialog}
        onClose={handleConfirmDialog}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          Confirm Delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => handleConfirmDialog(true)} color="primary">
            Confirm
          </Button>
          <Button onClick={() => handleConfirmDialog(false)} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    </Box>
  );
}
