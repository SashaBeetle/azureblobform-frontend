import { useState, useRef, useEffect } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SendIcon from '@mui/icons-material/Send';


const ApiUrl='https://localhost:7123/api/Storage/Upload'

export const UploadFile = () =>{
    const [changeButton, setChangeButton] = useState(true)
    const filePicker = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleChange = (event) =>{
        console.log(event.target.files)
        setSelectedFile(event.target.files[0])

        if(event.target.files[0] == null){
            setChangeButton(true);
        } else{
            setChangeButton(false);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
      
        const formData = new FormData();
        formData.append("blob", selectedFile);
      
        try {
          const response = await fetch(ApiUrl, {
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
            {selectedFile && (
                <div id="eden" onClick={handlePick} >
                    
                    <img id="doc-img"  src='doc.png'></img>
                    <h2 id="doc-text">{selectedFile.name}</h2> 
                    
                </div>
            )}
            {changeButton ? 
            <Button component="label" onClick={handlePick} role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>
                Select file
            </Button> : 
            <Button variant="contained" onClick={handleSubmit} endIcon={<SendIcon />}> 
                Upload now! 
            </Button> }
            
            <div><input type='file' className="hidden" ref={filePicker} onChange={handleChange} accept="document/*,.docx" /></div>
            
            
        </>
    )
};

 