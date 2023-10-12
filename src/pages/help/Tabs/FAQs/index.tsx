import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { Box, BoxProps, Divider, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, CardActions } from "@mui/material";
import { useTranslation } from "react-i18next";
import { MobileHelpCardDescription, MobileHelpCardHeading, MobileAccordionTitle, DesktopAccordionTitle, DesktopHelpCardHeading, DesktopHelpCardDescription } from "./FQAsCss";

export default function FAQs() {
  const { t } = useTranslation("translation");
  const [isExpanded, setIsExpanded] = React.useState<Boolean>(false);

  const handleChange = (event: any, isExpanded: any) => {
    setIsExpanded(isExpanded);
    console.log("Accordion is expanded:", isExpanded);
  };

  const MobileDisplay = () => (
    <Box sx={{ display: { sm: "block", md: "none", lg: "none", xl: "none" } }}>
      <Box
        sx={{
          paddingTop: "12px",
          maxWidth: "850px",
        }}
      >
        <Accordion
          onChange={handleChange}
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            paddingBottom: "18px",
          }}
        >
          <AccordionSummary
            sx={{
              padding: "0px",
            }}
            expandIcon={<AddCircleOutlineIcon sx={{ color: "#98A2B3" }} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <MobileAccordionTitle>
              Is there a free trial available?
            </MobileAccordionTitle>
          </AccordionSummary>
          <AccordionDetails sx={{
            padding: "0px",
          }}>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Divider />
        <Accordion
          onChange={handleChange}
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            paddingBottom: "18px",
          }}
        >
          <AccordionSummary
            expandIcon={<AddCircleOutlineIcon sx={{ color: "#98A2B3" }} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <MobileAccordionTitle>
              Can I change my plan later?
            </MobileAccordionTitle>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Divider />
        <Accordion
          onChange={handleChange}
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            paddingBottom: "18px",
          }}
        >
          <AccordionSummary
            expandIcon={<AddCircleOutlineIcon sx={{ color: "#98A2B3" }} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <MobileAccordionTitle>
              What is your cancellation policy?
            </MobileAccordionTitle>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Divider />
        <Accordion
          onChange={handleChange}
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            paddingBottom: "18px",
          }}
        >
          <AccordionSummary
            expandIcon={<AddCircleOutlineIcon sx={{ color: "#98A2B3" }} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <MobileAccordionTitle>
              Can other info be added to an invoice?
            </MobileAccordionTitle>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Divider />
        <Accordion
          onChange={handleChange}
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            paddingBottom: "18px",
          }}
        >
          <AccordionSummary
            expandIcon={<AddCircleOutlineIcon sx={{ color: "#98A2B3" }} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <MobileAccordionTitle>
              Can other info be added to an invoice?
            </MobileAccordionTitle>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Divider />
        <Accordion
          onChange={handleChange}
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            paddingBottom: "18px",
          }}
        >
          <AccordionSummary
            expandIcon={<AddCircleOutlineIcon sx={{ color: "#98A2B3" }} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <MobileAccordionTitle>
              Can other info be added to an invoice?
            </MobileAccordionTitle>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Divider />
        <Accordion
          onChange={handleChange}
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            paddingBottom: "18px",
          }}
        >
          <AccordionSummary
            expandIcon={<AddCircleOutlineIcon sx={{ color: "#98A2B3" }} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <MobileAccordionTitle>
              Can other info be added to an invoice?
            </MobileAccordionTitle>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Card sx={{ maxWidth: 345,
         borderRadius: "16px",
         border: "1px solid #D0D5DD",
      }}>
              <CardActionArea>
                <CardContent>
                  <MobileHelpCardHeading
                    gutterBottom
                  >
                    {t("Help.FAQs.HelpCardHeading")}
                  </MobileHelpCardHeading>
                  <MobileHelpCardDescription>
                    {t("Help.FAQs.HelpCardDescription")}
                  </MobileHelpCardDescription>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  sx={{
                    maxWidth: "134px",
                    height: "48px",
                  }}
                >
                  {t("Help.FAQs.GetInTouch")}
                </Button>
              </CardActions>
            </Card>
      </Box>
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
    >
      <Box
        sx={{
          display: "grid",
          gridAutoColumns: "1fr",
          gap: 1,
        }}
      >
        <Item sx={{ gridRow: "1", gridColumn: "span 3" }}>
          <Box
            sx={{
              paddingTop: "12px",
              maxWidth: "850px",
            }}
          >
            <Accordion
              onChange={handleChange}
              sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                paddingBottom: "18px",
              }}
            >
              <AccordionSummary
                expandIcon={<AddCircleOutlineIcon sx={{ color: "#98A2B3" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <DesktopAccordionTitle>
                  Is there a free trial available?
                </DesktopAccordionTitle>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
<Divider />
            <Accordion
              onChange={handleChange}
              sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                paddingBottom: "18px",
              }}
            >
              <AccordionSummary
                expandIcon={<AddCircleOutlineIcon sx={{ color: "#98A2B3" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <DesktopAccordionTitle>
                  Can I change my plan later?
                </DesktopAccordionTitle>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
<Divider />
            <Accordion
              onChange={handleChange}
              sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                paddingBottom: "18px",
              }}
            >
              <AccordionSummary
                expandIcon={<AddCircleOutlineIcon sx={{ color: "#98A2B3" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <DesktopAccordionTitle>
                  What is your cancellation policy?
                </DesktopAccordionTitle>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
<Divider />
            <Accordion
              onChange={handleChange}
              sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                paddingBottom: "18px",
              }}
            >
              <AccordionSummary
                expandIcon={<AddCircleOutlineIcon sx={{ color: "#98A2B3" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <DesktopAccordionTitle>
                  Can other info be added to an invoice?
                </DesktopAccordionTitle>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
<Divider />
            <Accordion
              onChange={handleChange}
              sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                paddingBottom: "18px",
              }}
            >
              <AccordionSummary
                expandIcon={<AddCircleOutlineIcon sx={{ color: "#98A2B3" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <DesktopAccordionTitle>
                  Can other info be added to an invoice?
                </DesktopAccordionTitle>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
<Divider />
            <Accordion
              onChange={handleChange}
              sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                paddingBottom: "18px",
              }}
            >
              <AccordionSummary
                expandIcon={<AddCircleOutlineIcon sx={{ color: "#98A2B3" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <DesktopAccordionTitle>
                  Can other info be added to an invoice?
                </DesktopAccordionTitle>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
<Divider />
            <Accordion
              onChange={handleChange}
              sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                paddingBottom: "18px",
              }}
            >
              <AccordionSummary
                expandIcon={<AddCircleOutlineIcon sx={{ color: "#98A2B3" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <DesktopAccordionTitle>
                  Can other info be added to an invoice?
                </DesktopAccordionTitle>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
<Divider />
          </Box>
        </Item>
        <Item sx={{ gridRow: "1", gridColumn: "4 / 5" }}>
          <div
            style={{ display: "flex", alignItems: "flex-end", height: "100%" }}
          >
            <Card sx={{ maxWidth: 345, margin: 5 }}>
              <CardActionArea>
                <CardContent>
                  <DesktopHelpCardHeading
                    gutterBottom
                  >
                    {t("Help.FAQs.HelpCardHeading")}
                  </DesktopHelpCardHeading>
                  <DesktopHelpCardDescription>
                    {t("Help.FAQs.HelpCardDescription")}
                  </DesktopHelpCardDescription>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  sx={{
                    maxWidth: "134px",
                    height: "48px",
                  }}
                >
                  {t("Help.FAQs.GetInTouch")}
                </Button>
              </CardActions>
            </Card>
          </div>
        </Item>
      </Box>
    </Box>
  );

  function Item(props: BoxProps) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          ...sx,
        }}
        {...other}
      />
    );
  }

  return (
    <Box>
      <MobileDisplay />
      <DesktopDisplay />
    </Box>
  );
}
