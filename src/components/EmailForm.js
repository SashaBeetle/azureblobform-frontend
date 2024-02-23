import React from "react";
import Box from "@mui/material/Box";
import { FormControl, InputLabel, OutlinedInput, FormHelperText } from "@mui/material";


const EmailForm = ({ email, handleEmailChange, error }) => {


    
  return (
    <Box
      className="App-input"
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        "& .MuiOutlinedInput-input": {
          color: "white",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl
        variant="outlined"
        sx={{
          label: {
            color: "#A0AAB4",
          },
          "& label.Mui-focused": {
            color: "#A0AAB4",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#B2BAC2",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#E0E3E7",
            },
            "&:hover fieldset": {
              borderColor: "#B2BAC2",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#6F7E8C",
            },
          },
        }}
      >
        <InputLabel htmlFor="outlined-email-input">Email</InputLabel>
        <OutlinedInput
          id="outlined-email-input"
          label="Email"
          value={email}
          onChange={handleEmailChange}
          error={!error}
        />
        {!error && <FormHelperText error>Invalid email format</FormHelperText>}
      </FormControl>
    </Box>
  );
};

export default EmailForm;