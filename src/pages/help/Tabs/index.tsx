import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FAQs from "./FAQs";
import Glossary from "./Glossary";
import Contact from "./Contact";
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
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function HelpTabs() {
  const { t } = useTranslation("translation");
  const [value, setValue] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const getColorBasedOnCondition = (tabValue: number) => {
    return value === tabValue ? "#051C2E" : "#667085"; // Red color when true, default color when false
  };

  const MobileDisplay = () => (
    <Box sx={{ display: { sm: "block", md: "none", lg: "none", xl: "none" } }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", marginTop: "-12px" }}>
        <Tabs
          value={value}
          textColor="secondary"
          indicatorColor="secondary"
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label={
              <div>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: getColorBasedOnCondition(0),
                    lineHeight: "20px",
                    textTransform: "none",
                  }}
                >
                  {t("Help.Tab.FAQs")}
                </span>
              </div>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <div>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: getColorBasedOnCondition(1),
                    lineHeight: "20px",
                    textTransform: "none",
                  }}
                >
                  {t("Help.Tab.Glossary")}
                </span>{" "}
              </div>
            }
            {...a11yProps(1)}
          />
          <Tab
            label={
              <div>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: getColorBasedOnCondition(2),
                    lineHeight: "20px",
                    textTransform: "none",
                  }}
                >
                  {t("Help.Tab.Contact")}
                </span>{" "}
              </div>
            }
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <FAQs />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Glossary />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Contact />
      </CustomTabPanel>
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
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          textColor="secondary"
          indicatorColor="secondary"
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label={
              <div>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: getColorBasedOnCondition(0),
                    lineHeight: "20px",
                    textTransform: "none",
                  }}
                >
                  {t("Help.Tab.FAQs")}
                </span>
              </div>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <div>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: getColorBasedOnCondition(1),
                    lineHeight: "20px",
                    textTransform: "none",
                  }}
                >
                  {t("Help.Tab.Glossary")}
                </span>{" "}
              </div>
            }
            {...a11yProps(1)}
          />
          <Tab
            label={
              <div>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: getColorBasedOnCondition(2),
                    lineHeight: "20px",
                    textTransform: "none",
                  }}
                >
                  {t("Help.Tab.Contact")}
                </span>{" "}
              </div>
            }
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <FAQs />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Glossary />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Contact />
      </CustomTabPanel>
    </Box>
  );

  return (
    <Box sx={{ width: "100%", marginTop: "24px" }}>
      <MobileDisplay />
      <DesktopDisplay />
    </Box>
  );
}
