const handleChangeFunc = (event, setChangeButton, setSelectedFile, DocxFile) => {
    if (event.target.files[0] == null) {
      setChangeButton(false);
    } else {
      if (event.target.files[0].type !== DocxFile) {
        console.error("Invalid file format. Only .docx files are allowed.");
        return;
      }
      setChangeButton(true);
    }
    setSelectedFile(event.target.files[0]);
  };
  
  export default handleChangeFunc;