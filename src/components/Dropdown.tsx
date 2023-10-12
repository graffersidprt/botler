import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import canadaFlag from "../assets/images/CA.svg";
import { Typography } from "@mui/material";

export default function FormSelectInput(props: any) {
  const [language, setLanguage] = React.useState("10");

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
    console.log(event, "event.target.value")
    props.handleLanguage(event.target.value);
  };

  return (
    <FormControl
      variant="standard"
      style={{ width: "90px", marginTop: "-22px", marginRight: "16px" }}
    >
      <InputLabel style={{ marginTop: "10px" }}>Age</InputLabel>
      <Select value={language} onChange={handleChange} label="Age">
        <MenuItem value={10}>
          <img
            src={canadaFlag}
            style={{ width: "20px", height: "20px" }}
            alt="canada"
          />
          <Typography style={{ marginLeft: "10px", fontSize: "12px" }}>
            CA-EN
          </Typography>
        </MenuItem>
        <MenuItem value={30}>
          <img
            src={canadaFlag}
            style={{ width: "20px", height: "20px" }}
            alt="canada"
          />
          <Typography style={{ marginLeft: "10px", fontSize: "12px" }}>
            FR
          </Typography>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
