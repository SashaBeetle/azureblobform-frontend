import { useState, useRef, useEffect } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SendIcon from '@mui/icons-material/Send';
import { FormControl, InputLabel, OutlinedInput, FormHelperText } from '@mui/material';


const ApiUrl= 'https://blobform.azurewebsites.net/api/Storage/Upload'
const DocxFile = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

const validateEmail = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

export const UploadFile = () =>{
    const [changeButton, setChangeButton] = useState(false)
    const filePicker = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const [email, setEmail] = React.useState('');
    const [error, setError] = React.useState(false);

    const [changeMode, setChangeMode] = useState(true);

    useEffect(() => {
      const handleCombinedState = () => {
        if (changeButton && error) {
          setChangeMode(true)
          console.log(error, changeButton, 'if')

        }else{
          setChangeMode(false)
          console.log(error, changeButton, 'else')
        } 
      };

      handleCombinedState();
    console.log(error, changeButton)
  return () => { 
  };

}, [changeButton, error]);

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
      setError(validateEmail(event.target.value));
      console.log(error, "email")
    };

    const handleChange = (event) =>{
        console.log(event.target.files)
        
        if(event.target.files[0] == null){
            setChangeButton(false);
        } else{

            if (event.target.files[0].type !== DocxFile) {
                console.error("Invalid file format. Only .docx files are allowed.");
    
                return;
              }
    
            setChangeButton(true);
        }
        
        setSelectedFile(event.target.files[0])

        
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
      
        const formData = new FormData();
        formData.append("blob", selectedFile);

        console.log(formData)
      
        try {
          const response = await fetch(ApiUrl + '?email=' + email, {
            method: "POST",
            body: formData,
          });
      
          if (response.ok) {
            const data = await response.json();
            console.log("File uploaded successfully:", data);
          } else {
            console.error("Upload failed:", response.statusText);
          }
        } catch (error) {
          console.error("Error uploading file:", error);
        }
        
      };

    const handlePick = () =>{
        filePicker.current.click();
    }

    
    return(
        <>
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
                    error={!error}
        
                />
      {!error && <FormHelperText error>Invalid email format</FormHelperText>}
            </FormControl>
    </Box>

            {selectedFile && (
                <div>
                    <img id="doc-upload" className="doc-img" src='doc.png' onClick={handlePick}></img>
                    <h2 id="doc-upload" className='doc-text'onClick={handlePick} >{selectedFile.name}</h2> 
                </div>
            )}
            {!changeButton ? 
            <Box>
                <Button component="label" onClick={handlePick} role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>
                    Select file
                </Button> 
                <p  className="error-message">*we are accepting only .docx files!*</p>
            </Box>: 
            <Button variant="contained" onClick={handleSubmit} endIcon={<SendIcon />} disabled={!changeMode ? true : false} > 
                Upload now! 
            </Button> }
            
            <div><input type='file' className="hidden" ref={filePicker} onChange={handleChange} accept="document/*,.docx" /></div>
            
            
        </>
    )
};

 