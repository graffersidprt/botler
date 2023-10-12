import { WidthFull } from "@mui/icons-material";
import { alpha } from "@mui/material/styles";

export default function Table(theme: any) {
   return {
       MuiTablePagination: {
            styleOverrides: {
                root: {
                    display: "flex",
                    justifyContent: "flex-end",
                    "& .MuiTablePagination-selectLabel": {
                        display: "none",
                    },
                    "& .MuiTablePagination-spacer": {
                        display: "none",
                    },
                    "& .MuiTablePagination-select": {
                        display: "none",
                    },
                    "& .MuiTablePagination-displayedRows": {
                        display: "none",
                    },
                },
            }
        },
                
   };
}
