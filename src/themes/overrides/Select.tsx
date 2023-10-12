import { alpha } from "@mui/material/styles";

export default function Select(theme: any) {
  return {
    MuiSelect: {
      styleOverrides: {
        root: {
            color: "#667085",
            // backgroundColor: "#FFFFFF",
            borderBottom: "none",
            fontSize: "12px",
        },
        icon: {
            color: "#667085",
        },
        select: {
            display: "flex",
        }
      }
    },
    MuiFormLabel: {
        styleOverrides: {
            root: {
                color: "#667085",
                // fontSize: "12px",
            }
        }
    },
    MuiMenuItem: {
        styleOverrides: {
            root: {
                color: "#667085",
                backgroundColor: "#FFFFFF",
                marginTop: "10px",
            }
        }
    },
  };
}
