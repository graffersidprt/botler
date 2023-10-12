import { WidthFull } from "@mui/icons-material";
import { alpha } from "@mui/material/styles";

export default function Input(theme: any) {
   return {
      MuiTextField: {
         defaultProps: {
            variant: "filled"
         },
         root: {
            fontSize: "24px",
            width: 360,
            height: 44,
            borderRadius: 8,
            padding: "10px, 14px, 10px, 14px",
         }
      },
      MuiFormControl: {
         styleOverrides: {
            root: {
               "&.MuiTextField-root": {
                  borderRadius: 8,
                  border: "1px solid #D0D5D9",
                  width: '100%',
               }
            }
         }
      },
      MuiInputBase: {
         styleOverrides: {
            root: {
               "&.Mui-disabled": {
                  "& svg": { color: theme.palette.text.disabled }
               },
               '& .MuiInputLabel-shrink': {
                  display: 'none',
               },
               // backgroundColor: "white",
               '& .MuiTablePagination-select': {
                  display: 'none',
               }
            },
            input: {
               "&::placeholder": {
                  // color: theme.palette.text.disabled,
                  padding: "10 0 10 0",
               },
               Width: 360,
            },
            colorPrimary: {
               
            },
         }
      },
      MuiFilledInput: {
         defaultProps: {
            disableUnderline: true
         },
         styleOverrides: {
            root: {
               borderRadius: 8,
               // padding: "0 0 1em 0",
               backgroundColor: "white",
               "&:hover": {
                  backgroundColor: "white",
                  
               },
               // "&.Mui-error": {
               //    // backgroundColor: alpha(theme.palette.error.main, 0.08),
               //    // color: theme.palette.error.main,
               //    // border: `solid 1px ${theme.palette.error.darker}`
               // },
               "& .Mui-focused": {
                  backgroundColor: alpha(theme.palette.error.light, 0.08),
                  color: "white",
               },
               // "&.Mui-disabled": {
               //    // backgroundColor: theme.palette.action.disabledBackground
               // }
            },
            input: {
               padding: "0.5em 0.5em 0.5em 0.5em",
               width: '100%',
               // maxWidth: '360px',
               height: '24px',
               fontSize: '16px',
               lineHeight: '24px',
            },
            underline: {
               "&:before": {
                  borderBottomColor: theme.palette.grey[0]
               }
            }
         }
      },
      MuiInputLabel: {	
         styleOverrides: {	
           root: {	
             display: "block", // By default, the label is visible	
             transform: "translate(12px, 9px) scale(1)",
           },	
           shrink: {	
             display: "none", // When input is focused, the label will be hidden	
           },	
         },
      },
   };
}
