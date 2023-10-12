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
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { paginationNumber } from "../../../utils";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Chip, TablePagination } from "@mui/material";
import { styled } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import filterIcon from "../../../assets/images/filter-icon.svg";
import searchIcon from "../../../assets/images/search-icon.svg";
import { useTranslation } from "react-i18next";

function createData(
  name: string,
  calories: number,
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

// const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({

//   height: 8,
//   borderRadius: 5,
//   width: "112px",
//   [`&.${linearProgressClasses.colorPrimary}`]: {
//     backgroundColor:
//       theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
//   },
//   [`& .${linearProgressClasses.bar}`]: {
//     borderRadius: 5,
//     backgroundColor: theme.palette.mode === "light" ? "#35668A" : "#308fe8",
//   },
// }));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));

  const getWidth = () => {
    if (isSmallScreen) return "225px";
    if (isMediumScreen) return "112px";
    return "112px"; // Default width
  };

  return {
    height: 8,
    borderRadius: 5,
    width: getWidth(),
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#35668A" : "#308fe8",
    },
  };
});

const options = ["None", "Atria", "Callisto"];

const ITEM_HEIGHT = 48;

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open1 = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell
          component="th"
          scope="row"
          style={{
            color: "#101828",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "20px",
          }}
        >
          {row.name}
        </TableCell>
        <TableCell
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <BorderLinearProgress
            variant="determinate"
            value={10}
            style={{
              marginBottom: "13px",
            }}
          />
          <Typography
            style={{
              color: "#344054",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "20px",
              marginLeft: "10px",
              marginBottom: "13px",
            }}
          >
            10%
          </Typography>
        </TableCell>
        <TableCell>
          <Chip
            label="Emails"
            sx={{
              height: "18px",
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "18px",
              color: "#026AA2",
              backgroundColor: "#F0F9FF",
            }}
          />
          <Chip
            label="SMS"
            sx={{
              height: "18px",
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "18px",
              color: "#026AA2",
              backgroundColor: "#F0F9FF",
              marginLeft: "4px",
            }}
          />
          <Chip
            label="+4"
            sx={{
              height: "18px",
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "18px",
              color: "#344054",
              backgroundColor: "#F2F4F7",
              marginLeft: "4px",
            }}
          />
        </TableCell>
        <TableCell>
          <Chip
            label="4 Events"
            sx={{
              height: "18px",
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "18px",
              color: "#026AA2",
              backgroundColor: "#F0F9FF",
            }}
          />
        </TableCell>
        <TableCell>
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
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function RowMobile(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open1 = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell
          scope="row"
          style={{
            color: "#101828",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "20px",
          }}
        >
          <Box>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <Checkbox
                edge="start"
                checked={false}
                tabIndex={-1}
                disableRipple
              />
              <div>
                <Typography
                  style={{
                    color: "#101828",
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "18px",
                  }}
                >
                  {row.name}
                </Typography>
                <Typography
                  style={{
                    color: "#101828",
                    fontSize: "14px",
                    fontWeight: 600,
                    lineHeight: "18px",
                    marginTop: "13px",
                  }}
                >
                  Assessements
                </Typography>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "8px",
                  }}
                >
                  <BorderLinearProgress variant="determinate" value={10} />
                  <Typography
                    style={{
                      color: "#344054",
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "20px",
                      marginLeft: "10px",
                    }}
                  >
                    10%
                  </Typography>
                </div>
                <div style={{
                  marginTop: "8px",
                }}>
                  <Chip
                    label="6 Evidences"
                    sx={{
                      height: "18px",
                      fontSize: "12px",
                      fontWeight: 500,
                      lineHeight: "18px",
                      color: "#026AA2",
                      backgroundColor: "#F0F9FF",
                    }}
                  />
                  <Chip
                    label="4 Events"
                    sx={{
                      height: "18px",
                      fontSize: "12px",
                      fontWeight: 500,
                      lineHeight: "18px",
                      color: "#026AA2",
                      backgroundColor: "#F0F9FF",
                      marginLeft: "4px",
                    }}
                  />
                </div>
              </div>
            </div>
          </Box>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData(
    "Someone has been using a company logo without authorization and stealing profits",
    159,
    6.0,
    24,
    4.0,
    3.99
  ),
  createData("Someone stole money from an office.", 237, 9.0, 37, 4.3, 4.99),
  createData(
    "Someone stole something from their office.",
    262,
    16.0,
    24,
    6.0,
    3.79
  ),
  createData(
    "a neighbour makes too much noise during late hours and hit someone",
    305,
    3.7,
    67,
    4.3,
    2.5
  ),
  createData(
    "Someone is using a logo without permission, which is a violation of copyright.",
    356,
    16.0,
    49,
    3.9,
    1.5
  ),
  createData(
    "Someone is using a logo without permission, which is a violation of copyright.",
    356,
    16.0,
    49,
    3.9,
    1.5
  ),
  createData(
    "Someone has been using a company logo without authorization and stealing profits",
    356,
    16.0,
    49,
    3.9,
    1.5
  ),
];

export default function CollapsibleTable() {
  const [page, setPage] = React.useState(0);
  const { t } = useTranslation("translation");

  // const theme = useTheme();
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const pageNumbers = Array.from({ length: 4 }, (_, index) => index + 1);
  // const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

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
      <>
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
              backgroundColor: "#F9FAFB",
              color: "#475467",
              padding: "0px",
              letterSpacing: "0px",
              "&:hover": {
                backgroundColor: "#F9FAFB",
              },
            }}
          >
            {" "}
            <img
              src={filterIcon}
              alt="filter"
              style={{
                width: "15px",
                height: "20px",
                marginRight: "8px",
              }}
            />
            Filters
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
            Search
          </Button>
        </div>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    color: "#475467",
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "18px",
                    width: "645px",
                  }}
                >
                  Statement
                </TableCell>
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
                    Previous
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
                    Next
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
      </>
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
      <>
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
              width: "87px",
              height: "32px",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "20px",
              borderRadius: "8px",
              border: "1px solid #D0D5DD",
              backgroundColor: "#FFFFFF",
              color: "#475467",
              padding: "0px",
              letterSpacing: "0px",
              "&:hover": {
                backgroundColor: "#FFFFFF",
              },
            }}
          >
            {" "}
            <img
              src={filterIcon}
              alt="filter"
              style={{
                width: "15px",
                height: "20px",
                marginRight: "8px",
              }}
            />
            {t("CommonStrings.FilterButton")}
          </Button>
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
        </div>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    color: "#475467",
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "18px",
                    width: "645px",
                  }}
                >
                  {t("AnalyzedStatements.Table.Header.Statement")}
                </TableCell>
                <TableCell
                  style={{
                    color: "#475467",
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "18px",
                  }}
                >
                  {t("AnalyzedStatements.Table.Header.Assessments")}{" "}
                </TableCell>
                <TableCell
                  style={{
                    color: "#475467",
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "18px",
                  }}
                >
                  {t("AnalyzedStatements.Table.Header.Evidence")}
                </TableCell>
                <TableCell
                  style={{
                    color: "#475467",
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "18px",
                  }}
                >
                  {t("AnalyzedStatements.Table.Header.Events")}
                </TableCell>
                <TableCell
                  style={{
                    color: "#475467",
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "18px",
                  }}
                >
                  <Divider orientation="vertical" />
                  {t("AnalyzedStatements.Table.Header.Actions")}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <Row key={row.name} row={row} />
                ))}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
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
                    {t("CommonStrings.Table.Pagination.Previous")}{" "}
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
                    {t("CommonStrings.Table.Pagination.Next")}{" "}
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
      </>
    </Box>
  );

  return (
    <Box>
      <MobileDisplay />
      <DesktopDisplay />
    </Box>
  );
}
