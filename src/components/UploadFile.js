import { useState, useRef, useEffect } from "react";
import * as React from 'react';
import FormAlert from './FormAlert'; 
import UploadFileButton from "./UploadFileButton";
import EmailForm from "./EmailForm";
import handleSubmitFunc from "./HandleSubmitFunc";
import handleChangeFunc from "./HandleChangeFunc";
import DuringUploadFile from "./DuringUploadFile";


const ApiUrl= 'https://blobform.azurewebsites.net/api/Storage/Upload'
const DocxFile = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

const validateEmail = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

export const UploadFile = () =>{
    const [changeButton, setChangeButton] = useState(false)

    const [visible, setVisible] = useState(false);
    const [isFileSent, setIsFileSent] = useState(true);
    const [circleVision, setCircleVision] = useState(false)

    const filePicker = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const [email, setEmail] = React.useState('');
    const [error, setError] = React.useState(false);

    const [changeMode, setChangeMode] = useState(true);

  useEffect(() => {
    const handleCombinedState = () => {
      if (changeButton && error) {
        setChangeMode(true)
      }else{
         setChangeMode(false)
      } 
    };

      handleCombinedState();
    return () => { 
  };

}, [changeButton, error]);

useEffect(() => {
  if(visible){
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  } 
  
}, [visible]);

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
      setError(validateEmail(event.target.value));
    };

    const handleFileChange = (event) => {
      handleChangeFunc(event, setChangeButton, setSelectedFile, DocxFile);
    };

    const handleFormSubmit = async () => {
      await handleSubmitFunc(email, selectedFile, setVisible, setIsFileSent, ApiUrl, setCircleVision, setChangeMode);
    };

    const handlePick = () =>{
        filePicker.current.click();
    }

    
    return(
        <>
            <EmailForm 
              email={email} 
              handleEmailChange={handleEmailChange} 
              error={error}
            />      
            <UploadFileButton 
              selectedFile={selectedFile} 
              changeButton={changeButton}
              filePicker={filePicker}
              changeMode={changeMode}
              handleSubmit={handleFormSubmit}
              handlePick={handlePick}
              handleChange={handleFileChange}
            />
            <FormAlert  isFileSent={isFileSent} visible={visible}/>
            <DuringUploadFile circleVision={circleVision} />
        </>
    )
};