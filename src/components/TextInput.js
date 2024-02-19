import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function StateTextFields() {
  const [name, setName] = React.useState('');

  return (
    <Box
      className='App-input' 
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-controlled"
        label="Email"
        color='primary'
        type="email"
        sx={{
            "& .MuiOutlinedInput-input": {
            color: "white",
            },
        }}
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
       
      />
    </Box>
  );
}