import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () =>{
    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{backgroundColor: "#191919"}}>
          <Toolbar >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              BLOB FORM
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
};
export default Header;