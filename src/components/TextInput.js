import * as React from 'react';
import Box from '@mui/material/Box';
import { FormControl, InputLabel, OutlinedInput, FormHelperText } from '@mui/material';


const validateEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };

export default function BasicTextFields() {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError(!validateEmail(event.target.value));
  };

  return (
    <Box
      className='App-input'
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        "& .MuiOutlinedInput-input": {
            color: "white",
            },
      }}
      noValidate
      autoComplete="off"
    >
        <FormControl variant="outlined" sx={{
        label: {
            color: '#A0AAB4',
          },
        '& label.Mui-focused': {
            color: '#A0AAB4',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#B2BAC2',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#E0E3E7',
            },
            '&:hover fieldset': {
              borderColor: '#B2BAC2',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#6F7E8C',
            }}
      }}>
            <InputLabel htmlFor="outlined-email-input" >Email</InputLabel>
                <OutlinedInput
                    id="outlined-email-input"
                    label="Email"
                    value={email}
                    onChange={handleEmailChange}
                    error={error}
        
                />
      {error && <FormHelperText error>Invalid email format</FormHelperText>}
            </FormControl>
    </Box>
  );
}


