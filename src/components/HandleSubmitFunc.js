const handleSubmitFunc = async (email,
   selectedFile, 
   setVisible,
   setIsFileSent,
   ApiUrl,
   setCircleVision,
   setChangeMode ) => {
    setCircleVision(true);
    setChangeMode(false);

    const formData = new FormData();
    formData.append("blob", selectedFile);
  
    try {
      const response = await fetch(ApiUrl + "?email=" + email, {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("File uploaded successfully:", data);
        setVisible(true);
        setIsFileSent(true);
      } else {
        console.error("Upload failed:", response.statusText);
        setVisible(true);
        setIsFileSent(false);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setVisible(true);
      setIsFileSent(false);
    }
    setCircleVision(false)
    setChangeMode(true);

  };
  
  export default handleSubmitFunc;