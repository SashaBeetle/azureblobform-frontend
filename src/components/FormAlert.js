import * as React from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

export default function SimpleAlert({isFileSent, visible}) {

  return ( 
    <>
        { visible &&
            <Box sx={{display: 'flex',
                    justifyContent: 'center',
                }}>
                {isFileSent ? 
                    <Alert variant="filled" severity="success">
                        The file has been sent.
                    </Alert> :
                        <Alert variant="filled" severity="error">
                            It was not sent. The file may already exist. Try again or change your data.
                        </Alert>}  
            </Box>
        } 
    </>
  );
}