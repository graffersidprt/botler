import { Box, Typography } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Button } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import filterIcon from "../../../assets/images/filter-icon.svg";
import searchIcon from "../../../assets/images/search-icon.svg";
import { useTranslation } from "react-i18next";

const options = ["None", "Atria", "Callisto"];

const ITEM_HEIGHT = 48;

const PromptHistory = () => {
  const [checked, setChecked] = React.useState([0]);
  const { t } = useTranslation("translation");

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open1 = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const data = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Victor Wayne" },
    { id: 3, name: "Jane Doe" },
  ];

  const MobileDisplay = () => (
    <Box
      sx={{
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        },
      }}
    >
      <div>
        <div
          style={{
            marginTop: "10px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            sx={{
              width: "48%",
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
          <Button
            sx={{
              width: "48%",
              height: "32px",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "20px",
              borderRadius: "8px",
              border: "1px solid #D0D5DD",
              backgroundColor: "#F9FAFB",
              color: "#475467",
              padding: "6px, 8px, 6px, 8px",
              "&:hover": {
                backgroundColor: "#F9FAFB",
              },
            }}
          >
            {" "}
            {t("CommonStrings.Table.Pagination.Delete")}
          </Button>
        </div>
        <div>
          {data.map((data) => (
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                border: "1px solid #EAECF0",
                marginBottom: "32px",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  lineHeight: "18px",
                  color: "#475467",
                  margin: "13px",
                  display: "block",
                }}
              >
                Yesterday - Friday, June 30, 2023
              </span>
              <Divider />
              <List sx={{ width: "100%", padding: "0px" }}>
                {[0, 1, 2, 3, 4, 5, 6].map((value) => {
                  const labelId = `checkbox-list-label-${value}`;

                  return (
                    <>
                      <ListItem
                        key={value}
                        disablePadding
                      >
                        <ListItemButton
                          role={undefined}
                          onClick={handleToggle(value)}
                          dense
                        >
                          <ListItemIcon
                            style={{
                              minWidth: "0px",
                            }}
                          >
                            <Checkbox
                              edge="start"
                              checked={checked.indexOf(value) !== -1}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          </ListItemIcon>
                          <ListItemText id={labelId}>
                            <div
                              style={{
                                display: "flex",
                              }}
                            >
                              <Typography
                                style={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  lineHeight: "20px",
                                  color: "#101828",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                11:30 PM
                              </Typography>
                              <Typography
                                style={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  lineHeight: "20px",
                                  color: "#101828",
                                  marginLeft: "16px",
                                  overflow: "hidden",
                                  display: "-webkit-box",
                                  WebkitLineClamp: 3,
                                  WebkitBoxOrient: "vertical",
                                }}
                              >
                                Josh has been using our company logo without
                                authorization and stealing profits
                              </Typography>
                            </div>
                          </ListItemText>
                        </ListItemButton>
                        <Divider />
                      </ListItem>
                      <Divider />
                    </>
                  );
                })}
              </List>
            </Box>
          ))}
        </div>
      </div>
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
      <div>
        <div
          style={{
            marginTop: "10px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            sx={{
              width: "200px",
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
            Search
          </Button>
          <Button
            sx={{
              width: "60px",
              height: "32px",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "20px",
              borderRadius: "8px",
              border: "1px solid #D0D5DD",
              backgroundColor: "#FFFFFF",
              color: "#475467",
              padding: "6px, 8px, 6px, 8px",
              "&:hover": {
                backgroundColor: "#FFFFFF",
              },
            }}
          >
            {" "}
            Delete
          </Button>
        </div>
        <div>
          {data.map((data) => (
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                border: "1px solid #EAECF0",
                marginBottom: "32px",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  lineHeight: "18px",
                  color: "#475467",
                  margin: "13px",
                  display: "block",
                }}
              >
                Yesterday - Friday, June 30, 2023
              </span>
              <Divider />
              <List sx={{ width: "100%", padding: "0px" }}>
                {[0, 1, 2, 3, 4, 5, 6].map((value) => {
                  const labelId = `checkbox-list-label-${value}`;

                  return (
                    <>
                      <ListItem
                        key={value}
                        secondaryAction={
                          <>
                            <IconButton
                              aria-label="more"
                              id="long-button"
                              aria-controls={open ? "long-menu" : undefined}
                              aria-expanded={open ? "true" : undefined}
                              aria-haspopup="true"
                              onClick={handleClick}
                            >
                              <MoreVertIcon />
                            </IconButton>
                            <Menu
                              id="long-menu"
                              MenuListProps={{
                                "aria-labelledby": "long-button",
                              }}
                              anchorEl={anchorEl}
                              open={open1}
                              onClose={handleClose}
                              PaperProps={{
                                style: {
                                  maxHeight: ITEM_HEIGHT * 4.5,
                                  width: "20ch",
                                },
                              }}
                            >
                              {options.map((option) => (
                                <MenuItem
                                  key={option}
                                  selected={option === "Pyxis"}
                                  onClick={handleClose}
                                >
                                  {option}
                                </MenuItem>
                              ))}
                            </Menu>
                          </>
                        }
                        disablePadding
                      >
                        <ListItemButton
                          role={undefined}
                          onClick={handleToggle(value)}
                          dense
                        >
                          <ListItemIcon
                            style={{
                              minWidth: "0px",
                            }}
                          >
                            <Checkbox
                              edge="start"
                              checked={checked.indexOf(value) !== -1}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          </ListItemIcon>
                          <ListItemText id={labelId}>
                            <div
                              style={{
                                display: "flex",
                              }}
                            >
                              <Typography
                                style={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  lineHeight: "20px",
                                  color: "#101828",
                                }}
                              >
                                11:30 PM
                              </Typography>
                              <Typography
                                style={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  lineHeight: "20px",
                                  color: "#101828",
                                  marginLeft: "48px",
                                }}
                              >
                                Josh has been using our company logo without
                                authorization and stealing profits
                              </Typography>
                            </div>
                          </ListItemText>
                        </ListItemButton>
                        <Divider />
                      </ListItem>
                      <Divider />
                    </>
                  );
                })}
              </List>
            </Box>
          ))}
        </div>
      </div>
    </Box>
  );

  return (
    <Box>
      <MobileDisplay />
      <DesktopDisplay />
    </Box>
  );
};

export default PromptHistory;
