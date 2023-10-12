import { alpha } from "@mui/material/styles";

export default function Accordion(theme: any) {
  return {
    MuiAccordion: {
        styleOverrides: {
            root: {
                boxShadow: "none",
                "&:before": {
                    display: "none",
                },
                // "&$expanded": {
                //     margin: "auto",
                // },
            },
        },
    },
    MuiAccordionSummary: {
        styleOverrides: {
            root: {
                padding : "0px 0px 0px 0px",
                position: "inherit",
            },
        },
    },
    MuiAccordionDetails: {
        styleOverrides: {
            root: {
                padding : "0px 0px 0px 0px",
            },
        },
    },
    
  };
}
