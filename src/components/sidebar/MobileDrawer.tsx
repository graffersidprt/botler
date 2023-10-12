import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Auth } from "aws-amplify";
import { styled, Theme, CSSObject } from "@mui/material/styles";
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

interface TemporaryDrawerProps {
  open: boolean;
  onClose: () => void;
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const MobileDrawer: React.FC<TemporaryDrawerProps> = ({ open, onClose }) => {
  const classes = sidebarStyle();
  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "flex", md: "none", lg: "none", xl: "none" },
      }}
    >
      <Drawer anchor="left" open={open} onClose={onClose} sx={{
        "& .MuiDrawer-paper": {
            justifyContent: "space-between",
        },
      }}>
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
                    marginRight: "92px",
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
            <ListItem sx={{ display: "block" }} onClick={onClose}>
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
              </div>
              <Button
                sx={{
                  marginTop: "8px",
                  width: "189px",
                  height: "36px",
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "20px",
                }}
              >
                Add more Assessments
              </Button>
            </div>
          )}
          <List>
            <ListItem disablePadding sx={{ display: "block" }} onClick={onClose}>
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
    </Box>
  );
};

export default MobileDrawer;
