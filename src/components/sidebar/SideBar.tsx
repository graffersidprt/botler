import { Auth } from "aws-amplify";
import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Chip } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import mainLogo from "../../assets/images/main-logo.svg";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BotlerLogo from "../../assets/images/botler-icon.svg";
import BotlerWordIcon from "../../assets/images/botler-wordmark.svg";
import MenuOpen from "../../assets/images/menu-open.svg";
import StatementMenuIcon from "../../assets/images/statement-icon.svg";
import CaseManagementMenuIcon from "../../assets/images/case-management-icon.svg";
import EnforcementMenuIcon from "../../assets/images/enforcement-icon.svg";
import VaultMenuIcon from "../../assets/images/vault-icon.svg";
import HelpMenuIcon from "../../assets/images/help-icon.svg";
import AddCreditIcon from "../../assets/images/add-credit-icon.svg";
import AddCreditMobileIcon from "../../assets/images/add-credit-blue-icon.svg";
import LogoutIcon from "../../assets/images/logout-icon.svg";
import CloseIcon from "../../assets/images/close-icon.svg";
import MenuIconMobile from "../../assets/images/menu-icon.svg";
import Home from "../../pages/home/Home";
import { Button } from "@mui/material";
import { sidebarStyle } from "./SidebarCss";
import { useState } from "react";
import CaseManagement from "../../pages/caseManagement/CaseManagement";
import Enforcement from "../../pages/enforcement/Enforcement";
import EvidenceAndEventVault from "../../pages/evidenceAndEventsVault/EvidenceAndEventsVault";
import Help from "../../pages/help/Help";
import AnalyzedStatement from "../../features/Statements/AnalyzedStatement";
import Footer from "../footer/Footer";
import MenuIcon from "@mui/icons-material/Menu";
import Settings from "../../pages/settings/Settings";
import SettingTabs from "../../pages/settings/tabs";
import MobileDrawer from "./MobileDrawer";

const drawerWidth = 250;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideBar() {
  const [open, setOpen] = React.useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [showBanner, setShowBanner] = useState<Boolean>(true);
  const location = useLocation();
  const classes = sidebarStyle();

  const handleDrawer = () => {
    setOpen(!open);
  };

  // Helper function to get the content for the second MUI Box tag based on the current route
  const getContentForBox = () => {
    switch (location.pathname) {
      case "/home":
        return <Home />;
      case "/case-management":
        return <CaseManagement />;
      case "/enforcement":
        return <Settings />;
      case "/evidence-events-vault":
        return <EvidenceAndEventVault />;
      case "/help":
        return <Help />;
      default:
        return null;
    }
  };

  /**
   * Function to change state of showBanner to false
   * This function is passed to the Button component
   * in the banner component
   * @returns void
   */
  const handleBanner = () => {
    setShowBanner(false);
  };

  const MobileDisplay = () => (
    <Box
      sx={{
        display: { xs: "flex", sm: "flex", md: "none", lg: "none", xl: "none" },
      }}
    >
      <div className={classes.mainContainer}>
        <div className={classes.headerContainer}>
          <img src={mainLogo} alt="Botler" />
          <Chip
            label={
              <div style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "20px",
                    color: "#026AA2",
                  }}
                >
                  10
                </span>
                <img
                  src={AddCreditMobileIcon}
                  alt="Add"
                  style={{ marginLeft: "5px", color: "#026AA2" }}
                />
              </div>
            }
            sx={{
              height: "22px",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "20px",
              color: "#026AA2",
              backgroundColor: "#F0F9FF",
            }}
          />
          <img src={MenuIconMobile}
            onClick={() => setIsSidebarOpen(true)}
           alt="Menu"
           style={{
            width: "24px",
            height: "24px",
            marginRight: "5px",
          }} />
        </div>
        <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          justifyContent: "space-between",
          backgroundColor: "#F9F9FB",
          flexDirection: "column",
          display: "flex",
          minHeight: "93vh",
          flexWrap: "wrap",
        }}
      >
        {showBanner && (
          <div
            style={{
              width: "100%",
              height: "auto",
              padding: "8px",
              backgroundColor: "#D7E0E7",
              borderRadius: "12px",
              border: "1px solid #35668A",
            }}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#051C2E",
              }}
            >
              Banner with some news.
            </Typography>
            <img
              src={CloseIcon}
              alt=""
              style={{
                width: "10px",
                height: "10px",
                right: "27px",
              }}
              onClick={handleBanner}
            />
            </div>
            <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#082B44",
                }}
              >
                Supporting text.
              </Typography>
          </div>
        )}
        {getContentForBox()}
        <Routes>
          <Route path="/statement/:id" element={<AnalyzedStatement />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <Footer />
      </Box>
      </div>
      <MobileDrawer open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </Box>
  );

  const DesktopDisplay = () => (
    <Box
      sx={{
        display: { xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex" },
      }}
    >
      <Drawer variant="permanent" open={open}>
        <div>
          <DrawerHeader>
            {open ? (
              <>
                <img
                  src={BotlerLogo}
                  alt="Botler"
                  style={{
                    width: "32px",
                    height: "32px",
                  }}
                />
                <img
                  src={BotlerWordIcon}
                  alt="Botler"
                  style={{
                    marginLeft: "9px",
                    marginRight: "85px",
                  }}
                />
              </>
            ) : (
              <img
                src={BotlerLogo}
                style={{
                  width: "32px",
                  height: "32px",
                  marginRight: "11px",
                }}
                alt="Botler"
              />
            )}
          </DrawerHeader>
          <List>
            <ListItem sx={{ display: "block" }}>
              <NavLink
                to="/home"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemButton
                  sx={{
                    justifyContent: open ? "initial" : "center",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={StatementMenuIcon}
                      alt="Statement"
                      className={classes.img_Menu_Logo}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Statements"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </NavLink>
              <NavLink
                to="/case-management"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={CaseManagementMenuIcon}
                      alt="Case Management"
                      className={classes.img_Menu_Logo}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Case Management "
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </NavLink>
              <NavLink
                to="/enforcement"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={EnforcementMenuIcon}
                      alt="enforcement"
                      className={classes.img_Menu_Logo}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Enforcement"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </NavLink>
            </ListItem>
          </List>
        </div>
        <div
          style={{
            marginRight: "10px",
          }}
        >
          {open && (
            <div className={classes.creditSection}>
              <div className="creditSection__title">
                <Typography
                  sx={{
                    fontSize: "48px",
                    fontWeight: "600",
                    lineHeight: "58px",
                    color: "#101828",
                  }}
                >
                  10
                </Typography>
              </div>
              <div className={classes.creditSection__content}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "20px",
                    color: "#101828",
                  }}
                >
                  Available Credits
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "400",
                    lineHeight: "18px",
                    color: "#475467",
                    marginTop: "4px",
                  }}
                >
                  Enough for •• Basic Assessments or •• <br />
                  Advanced Assessments.
                </Typography>
              </div>
              <Button
                sx={{
                  marginTop: "8px",
                  width: "175px",
                  height: "36px",
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "20px",
                }}
              >
                <img
                  src={AddCreditIcon}
                  alt="Add"
                  style={{ marginRight: "8px" }}
                />
                Add more Credits
              </Button>
            </div>
          )}
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <NavLink
                to="/evidence-events-vault"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={VaultMenuIcon}
                      alt="Vault"
                      className={classes.img_Menu_Logo}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Evidence & Events Vault"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </NavLink>
              <NavLink
                to="/help"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={HelpMenuIcon}
                      alt="Help"
                      className={classes.img_Menu_Logo}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Help" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </NavLink>
              <Divider />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: "10px",
                  // marginLeft: "px",
                }}
              >
                <img
                  src={BotlerLogo}
                  alt=""
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "200px",
                    marginLeft: "7px",
                  }}
                />
                {open && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <div
                      style={{
                        marginLeft: "12px",
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
                        Pablo Eche...
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 600,
                          lineHeight: "20px",
                          color: "#344054",
                        }}
                      >
                        pablo@gmail.com
                      </Typography>
                    </div>
                    <img
                      src={LogoutIcon}
                      alt=""
                      style={{
                        marginLeft: "30px",
                        width: "17px",
                        height: "17px",
                        color: "#667085",
                      }}
                      onClick={() => Auth.signOut()} // TODO: Handle sign out properly
                    />
                  </div>
                )}
              </div>
            </ListItem>
          </List>
        </div>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          justifyContent: "space-between",
          backgroundColor: "#F9F9FB",
          flexDirection: "column",
          display: "flex",
          minHeight: "100vh",
          flexWrap: "wrap",
        }}
      >
        <img
          src={MenuOpen}
          onClick={handleDrawer}
          alt="Menu"
          style={{
            marginLeft: "-10px",
            position: "fixed",
          }}
        />
        {showBanner && (
          <div
            style={{
              display: "flex",
              // flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              height: "64px",
              backgroundColor: "#D7E0E7",
              borderRadius: "12px",
              border: "1px solid #35668A",
              marginLeft: "12px",
              position: "relative",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#051C2E",
                textAlign: "center",
                width: "100%",
              }}
            >
              Banner with some news.
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#082B44",
                  textAlign: "center",
                }}
              >
                Supporting text.
              </span>
            </Typography>
            <img
              src={CloseIcon}
              alt=""
              style={{
                width: "10px",
                height: "10px",
                position: "absolute",
                right: "27px",
              }}
              onClick={handleBanner}
            />
          </div>
        )}
        {getContentForBox()}
        <Routes>
          <Route path="/statement/:id" element={<AnalyzedStatement />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <Footer />
      </Box>
    </Box>
  );

  return (
    <Box>
      <MobileDisplay />
      <DesktopDisplay />
    </Box>
  );
}
