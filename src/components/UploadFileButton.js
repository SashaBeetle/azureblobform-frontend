import React from "react";
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SendIcon from '@mui/icons-material/Send';
import Box from "@mui/material/Box";



const UploadFileButton = ({ 
    selectedFile,
    handlePick,
    changeButton,
    handleChange,
    handleSubmit,
    filePicker,
    changeMode, }) =>{

    return (<>
            
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
        
        </>);
};

export default UploadFileButton;

