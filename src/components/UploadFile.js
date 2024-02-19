import { useState, useRef } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SendIcon from '@mui/icons-material/Send';


const ApiUrl='https://localhost:7123/api/Storage/Upload'

export const UploadFile = () =>{
    const filePicker = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleChange = (event) =>{
        console.log(event.target.files)
        setSelectedFile(event.target.files[0])
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
                <div>
                    <img id="doc-img" src='doc.png'></img>
                    <h2 id="doc-text">{selectedFile.name}</h2> 
                </div>
            )}
            <Button component="label" onClick={handlePick} role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>
                Select file
            </Button>
            <input type='file' className="hidden" ref={filePicker} onChange={handleChange} accept="document/*,.docx" />
            <Button id='butt-send'variant="contained" onClick={handleSubmit} endIcon={<SendIcon />}> 
                Upload now! 
            </Button>
            
        </>
    )
};

 