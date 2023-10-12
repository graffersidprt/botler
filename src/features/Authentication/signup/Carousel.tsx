import { Typography } from '@mui/material'
import React from 'react'
import Carousel from "react-material-ui-carousel";
import StatementAnalysisImg1 from "../../../assets/images/statement-analysis-img-1.svg";
import StatementAnalysisImg2 from "../../../assets/images/statement-analysis-img-2.svg";
import StatementAnalysisImg3 from "../../../assets/images/statement-analysis-img-3.svg";
import AnalyzeStatements from "../../../assets/images/analyze-statements.svg";
import IdentifyLaw from "../../../assets/images/identify-laws.svg";
import GenerateAssessements from "../../../assets/images/generate-assessements.svg";
import CaseManagement from "../../../assets/images/case-management.svg";
import CaseValidation from "../../../assets/images/case-validation.svg";
import CaseEnforcement from "../../../assets/images/case-inforcement.svg";
import { DesktopCarouselContent, DesktopCarouselItem, DesktopCarouselItemContent, DesktopRightContent } from './signupCss';


const CarouselView = () => {
  return (
    <div>
      <Carousel autoPlay={ false } animation="slide" indicators={ true }>
        <div>
          <DesktopRightContent>
            <img src={ StatementAnalysisImg1 } alt="Brain Gym" />
          </DesktopRightContent>
          <DesktopCarouselContent>
            <DesktopCarouselItem>
              <DesktopCarouselItemContent>
                <img src={ AnalyzeStatements } alt="Brain Gym" />
                <Typography
                  sx={ {
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#7CD4FD",
                  } }
                >
                  Analyze Statements
                </Typography>
              </DesktopCarouselItemContent>
              <DesktopCarouselItemContent>
                <img src={ IdentifyLaw } alt="Brain Gym" />
                <Typography
                  sx={ {
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#7CD4FD",
                  } }
                >
                  Identify Law
                </Typography>
              </DesktopCarouselItemContent>
              <DesktopCarouselItemContent>
                <img src={ GenerateAssessements } alt="Brain Gym" />
                <Typography
                  sx={ {
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#7CD4FD",
                  } }
                >
                  Generate Assessements
                </Typography>
              </DesktopCarouselItemContent>
            </DesktopCarouselItem>
            <DesktopCarouselItem></DesktopCarouselItem>
          </DesktopCarouselContent>
        </div>
        <div>
          <DesktopRightContent>
            <img src={ StatementAnalysisImg2 } alt="Brain Gym" />
          </DesktopRightContent>
          <DesktopCarouselContent>
            <DesktopCarouselItem>
              <DesktopCarouselItemContent>
                <img src={ CaseManagement } alt="Brain Gym" />
                <Typography
                  sx={ {
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#7CD4FD",
                  } }
                >
                  Case Management
                </Typography>
              </DesktopCarouselItemContent>
              <DesktopCarouselItemContent>
                <img src={ CaseValidation } alt="Brain Gym" />
                <Typography
                  sx={ {
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#7CD4FD",
                  } }
                >
                  Case Validation
                </Typography>
              </DesktopCarouselItemContent>
            </DesktopCarouselItem>
            <DesktopCarouselItem></DesktopCarouselItem>
          </DesktopCarouselContent>
        </div>
        <div>
          <DesktopRightContent>
            <img src={ StatementAnalysisImg3 } alt="Brain Gym" />
          </DesktopRightContent>
          <DesktopCarouselContent>
            <DesktopCarouselItem>
              <DesktopCarouselItemContent>
                <img src={ CaseEnforcement } alt="Brain Gym" />
                <Typography
                  sx={ {
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#7CD4FD",
                  } }
                >
                  Case Enforcement
                </Typography>
              </DesktopCarouselItemContent>
              <DesktopCarouselItemContent>
                <img src={ IdentifyLaw } alt="Brain Gym" />
                <Typography
                  sx={ {
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#7CD4FD",
                  } }
                >
                  Identify Law
                </Typography>
              </DesktopCarouselItemContent>
              <DesktopCarouselItemContent>
                <img src={ GenerateAssessements } alt="Brain Gym" />
                <Typography
                  sx={ {
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#7CD4FD",
                  } }
                >
                  Generate Assessements
                </Typography>
              </DesktopCarouselItemContent>
            </DesktopCarouselItem>
            <DesktopCarouselItem></DesktopCarouselItem>
          </DesktopCarouselContent>
        </div>
      </Carousel>

    </div>
  )
}

export default CarouselView;
