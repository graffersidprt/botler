import { WidthFull } from "@mui/icons-material";
import { alpha } from "@mui/material/styles";

export default function Button(theme: any) {
   return {
       MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    "&.Mui-disabled": {
                        "& svg": { color: theme.palette.text.disabled }
                    },
                    backgroundColor: "FFFFFF",
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    border: "1px solid #D0D5D9",
                    textTransform: "none",
                    width: "100%",
                    height: 44,
                    padding: "10px, 18px, 10px, 18px",
                    backgroundColor: "#06AED4",
                    color: "#FFFFFF",
                    fontWeight: 600,
                    fontSize: 16,
                    "&:hover": {
                        backgroundColor: "#051C2E",
                    }
                    
                },
            }
        },
   };
}
