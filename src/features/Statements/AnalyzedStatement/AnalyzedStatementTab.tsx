import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Chip } from "@mui/material";
import plusIcon from "../../../assets/images/plus-icon.svg";
import filterIcon from "../../../assets/images/filter-icon.svg";
import searchIcon from "../../../assets/images/search-icon.svg";
import { LoadingButton, TabContext, TabList, TabPanel } from "@mui/lab";
import IdentifiedSectionTable from "./IdentifiedSectionTable";
import { getAllAssessments } from "../../../app/services/assesmentsServices";
import { useTranslation } from "react-i18next";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={ value !== index }
      id={ `simple-tabpanel-${index}` }
      aria-labelledby={ `simple-tab-${index}` }
      { ...other }
    >
      { value === index && (
        <Box sx={ { p: 3 } }>
          <Typography>{ children }</Typography>
        </Box>
      ) }
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const getColorBasedOnCondition = (tabValue: number) => {
    return value === tabValue ? "#051C2E" : "#667085"; // Red color when true, default color when false
  };

  const MobileDisplay = () => (
    <Box
      sx={{
        display: { xs: "block", sm: "block", md: "none", lg: "none", xl: "none" },
      }}
    >
      <Box sx={ { borderBottom: 1, borderColor: "divider" } }>
        <Tabs
          value={ value }
          textColor="secondary"
          indicatorColor="secondary"
          onChange={ handleChange }
          aria-label="basic tabs example"
        >
          <Tab
            label={
              <div>
                <span
                  style={ {
                    fontSize: "14px",
                    fontWeight: "600",
                    color: getColorBasedOnCondition(0),
                    lineHeight: "20px",
                    textTransform: "none",
                  } }
                >
                  {t('AnalyzedStatements.Tab.IdentifiedSections')}
                </span>{ " " }
              </div>
            }
            { ...a11yProps(0) }
          />
          <Tab
            label={
              <div>
                <span
                  style={ {
                    fontSize: "14px",
                    fontWeight: "600",
                    color: getColorBasedOnCondition(1),
                    lineHeight: "20px",
                    textTransform: "none",
                  } }
                >
                  {t('AnalyzedStatements.Tab.Evidence')}
                </span>{ " " }
              </div>
            }
            { ...a11yProps(1) }
          />
          <Tab
            label={
              <div>
                <span
                  style={ {
                    fontSize: "14px",
                    fontWeight: "600",
                    color: getColorBasedOnCondition(2),
                    lineHeight: "20px",
                    textTransform: "none",
                  } }
                >
                  {t('AnalyzedStatements.Tab.Events')}
                </span>{ " " }
              </div>
            }
            { ...a11yProps(2) }
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={ value } index={ 0 }>
        <IdentifiedSectionTable />
      </CustomTabPanel>
      <CustomTabPanel value={ value } index={ 1 }>
        Evidence Content
      </CustomTabPanel>
      <CustomTabPanel value={ value } index={ 2 }>
        Events Content
      </CustomTabPanel>
    </Box>
  );

  const DesktopDisplay = () => (
    <Box sx={{ display: { xs: "none", sm: "none", md: "block", lg:"block", xl: "block" } }}>
      <Box sx={ { borderBottom: 1, borderColor: "divider" } }>
        <Tabs
          value={ value }
          textColor="secondary"
          indicatorColor="secondary"
          onChange={ handleChange }
          aria-label="basic tabs example"
        >
          <Tab
            label={
              <div>
                <span
                  style={ {
                    fontSize: "14px",
                    fontWeight: "600",
                    color: getColorBasedOnCondition(0),
                    lineHeight: "20px",
                    textTransform: "none",
                  } }
                >
                  {t('AnalyzedStatements.Tab.IdentifiedSections')}
                </span>{ " " }
                <Chip
                  label="240"
                  style={ {
                    backgroundColor: "#AEC2D0",
                    color: "#051C2E",
                    fontSize: "12px",
                    fontWeight: "600",
                    lineHeight: "18px",
                    fontFamily: "sans-serif",
                  } }
                />
              </div>
            }
            { ...a11yProps(0) }
          />
          <Tab
            label={
              <div>
                <span
                  style={ {
                    fontSize: "14px",
                    fontWeight: "600",
                    color: getColorBasedOnCondition(1),
                    lineHeight: "20px",
                    textTransform: "none",
                  } }
                >
                  {t('AnalyzedStatements.Tab.Evidence')}
                </span>{ " " }
                <Chip
                  label={
                    <div>
                      <img src={ plusIcon } alt="plusIcon" />
                      <span
                        style={ {
                          fontSize: "12px",
                          fontWeight: "600",
                          color: "#344054",
                          lineHeight: "18px",
                          marginLeft: "4px",
                        } }
                      >
                        Add
                      </span>{ " " }
                    </div>
                  }
                  style={ {
                    backgroundColor: "#F2F4F7",
                    color: "#344054",
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "18px",
                    fontFamily: "sans-serif",
                  } }
                />
              </div>
            }
            { ...a11yProps(1) }
          />
          <Tab
            label={
              <div>
                <span
                  style={ {
                    fontSize: "14px",
                    fontWeight: "600",
                    color: getColorBasedOnCondition(2),
                    lineHeight: "20px",
                    textTransform: "none",
                  } }
                >
                  {t('AnalyzedStatements.Tab.Events')}
                </span>{ " " }
                <Chip
                  label={
                    <div>
                      <img src={ plusIcon } alt="plusIcon" />
                      <span
                        style={ {
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#344054",
                          lineHeight: "18px",
                          marginLeft: "4px",
                        } }
                      >
                        Add
                      </span>{ " " }
                    </div>
                  }
                  style={ {
                    backgroundColor: "#F2F4F7",
                    color: "#344054",
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "18px",
                    fontFamily: "sans-serif",
                  } }
                />
              </div>
            }
            { ...a11yProps(2) }
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={ value } index={ 0 }>
        <IdentifiedSectionTable />
      </CustomTabPanel>
      <CustomTabPanel value={ value } index={ 1 }>
        Evidence Content
      </CustomTabPanel>
      <CustomTabPanel value={ value } index={ 2 }>
        Events Content
      </CustomTabPanel>
    </Box>
  );

  return (
    <Box sx={ { width: "100%" } }>
      <MobileDisplay />
      <DesktopDisplay />
    </Box>
  );
}
