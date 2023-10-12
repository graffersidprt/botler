import { Accordion, AccordionDetails, AccordionSummary, Box, Breadcrumbs, Button, Divider, Link, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import starIcon from "../../../../../assets/images/star-icon.svg";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import basicCheckIcon from "../../../../../assets/images/basic-chceked-icon.svg";
import AdvanceCheckIcon from "../../../../../assets/images/advance-chceked-icon.svg";
import BasicIcon from "../../../../../assets/images/basic-icon.svg";
import AdvanceIcon from "../../../../../assets/images/advance-icon.svg";
import BookIcon from "../../../../../assets/images/book-icon.svg";
import HappyFace from "../../../../../assets/images/happy-face-icon.svg";
import NotHappyFace from "../../../../../assets/images/not-happy-face-icon.svg";
import EditIcon from "../../../../../assets/images/edit-pen-icon.svg";
import { LoadingButton } from '@mui/lab';
import RightArrowIcon from "../../../../../assets/images/right-arrow-icon.svg";
import CloseIcon from "@mui/icons-material/Close";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import CheckIcon from "@mui/icons-material/Check";

function RowForDesktop(props: { row: any }) {
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

export default RowForDesktop;
