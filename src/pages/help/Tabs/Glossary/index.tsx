import * as React from "react";
import { Box, Divider } from "@mui/material";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { useTranslation } from "react-i18next";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Grid } from "@mui/material";
import searchIcon from "../../../../assets/images/search-icon.svg";
import glossaryIcon1 from "../../../../assets/images/glosarry-icon1.svg";
import {
  MobileCardHeadingText,
  MobileCardDescriptionText,
  MobileGlossaryContent,
  MobileMainContainer,
  DesktopCardHeadingText,
  DesktopCardDescriptionText,
  DesktopGlossaryContent,
  DesktopHeaderContent,
  DesktopMainContainer,
} from "./GlossaryCss";

export default function FAQs() {
  const { t } = useTranslation("translation");
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const MobileDisplay = () => (
    <Box sx={{ display: { sm: "block", md: "none", lg: "none", xl: "none" } }}>
      <MobileMainContainer>
        <div>
          <Button
            sx={{
              height: "32px",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "20px",
              borderRadius: "8px",
              border: "1px solid #D0D5DD",
              backgroundColor: "#FFFFFF",
              color: "#98A2B3",
              padding: "0px",
              letterSpacing: "0px",
              justifyContent: "flex-start",
              "&:hover": {
                backgroundColor: "#FFFFFF",
              },
            }}
          >
            {" "}
            <img
              src={searchIcon}
              alt="filter"
              style={{
                width: "17px",
                height: "17px",
                marginRight: "9.5px",
                marginLeft: "10.5px",
                color: "#98A2B3",
              }}
            />
            {t("CommonStrings.SearchBar.Placeholder")}
          </Button>
          <Pagination
            sx={{
              marginTop: "12px",
            }}
            count={alphabet.length}
            hidePrevButton
            renderItem={(item: any) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
                page={alphabet[item.page - 1]}
                sx={{
                  fontSize: "20px",
                  ...(item.selected
                    ? {
                        color: "#1D2939",
                        fontWeight: 700,
                      }
                    : {
                        color: "#475467",
                      }),
                }}
              />
            )}
          />
        </div>
        <MobileGlossaryContent>
          <Box>
            {Array.from(Array(6)).map((_, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Card
                  sx={{
                    maxWidth: "350px",
                    backgroundColor: "transparent",
                    border: "none",
                    borderShadow: "none",
                    boxShadow: "none",
                    marginTop: "30px",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="48"
                      width="48"
                      src={glossaryIcon1}
                      alt="green iguana"
                      sx={{
                        width: "48px",
                      }}
                    />
                    <CardContent
                      sx={{
                        padding: "0px",
                      }}
                    >
                      <MobileCardHeadingText>Accused</MobileCardHeadingText>
                      <MobileCardDescriptionText>
                        In criminal law, a person who is charged with an offence
                        under the Criminal Code is called the Accused. A person
                        is called the Accused up to and throughout a trial until
                        the charges have been dealt with and the matter is
                        concluded.
                      </MobileCardDescriptionText>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Divider
                  sx={{
                    marginTop: "20px",
                  }}
                />
              </Grid>
            ))}
          </Box>
        </MobileGlossaryContent>
      </MobileMainContainer>
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
      <DesktopMainContainer>
        <DesktopHeaderContent>
          <Pagination
            count={alphabet.length}
            hidePrevButton
            renderItem={(item: any) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
                page={alphabet[item.page - 1]}
                sx={{
                  fontSize: "18px",
                  ...(item.selected
                    ? {
                        color: "#1D2939",
                        fontWeight: 700,
                      }
                    : {
                        color: "#475467",
                      }),
                }}
              />
            )}
          />
          <Button
            sx={{
              width: "615px",
              height: "32px",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "20px",
              borderRadius: "8px",
              border: "1px solid #D0D5DD",
              backgroundColor: "#FFFFFF",
              color: "#98A2B3",
              padding: "0px",
              marginLeft: "16px",
              letterSpacing: "0px",
              justifyContent: "flex-start",
              "&:hover": {
                backgroundColor: "#FFFFFF",
              },
            }}
          >
            {" "}
            <img
              src={searchIcon}
              alt="filter"
              style={{
                width: "17px",
                height: "17px",
                marginRight: "9.5px",
                marginLeft: "10.5px",
                color: "#98A2B3",
              }}
            />
            {t("CommonStrings.SearchBar.Placeholder")}
          </Button>
        </DesktopHeaderContent>
        <DesktopGlossaryContent>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {Array.from(Array(6)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Card
                    sx={{
                      maxWidth: "350px",
                      backgroundColor: "transparent",
                      border: "none",
                      borderShadow: "none",
                      boxShadow: "none",
                    }}
                  >
                    <CardActionArea
                      sx={{
                        padding: "16px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="48"
                        width="48"
                        src={glossaryIcon1}
                        alt="green iguana"
                        sx={{
                          width: "48px",
                        }}
                      />
                      <CardContent
                        sx={{
                          padding: "0px",
                        }}
                      >
                        <DesktopCardHeadingText gutterBottom>
                          Accused
                        </DesktopCardHeadingText>
                        <DesktopCardDescriptionText>
                          In criminal law, a person who is charged with an
                          offence under the Criminal Code is called the Accused.
                          A person is called the Accused up to and throughout a
                          trial until the charges have been dealt with and the
                          matter is concluded.
                        </DesktopCardDescriptionText>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </DesktopGlossaryContent>
      </DesktopMainContainer>
    </Box>
  );

  return (
    <Box>
      <MobileDisplay />
      <DesktopDisplay />
    </Box>
  );
}
