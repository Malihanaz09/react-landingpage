import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import { Stack } from '@mui/material';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }} className="Navbar">
      <AppBar position="static" style={{ backgroundColor:"white"}}>
        <Toolbar>
          <Stack direction="row" spacing={2}>
            <Box>
          <Button style={{color:"black", fontWeight:"bold"}}>About Me</Button>
          <Button style={{color:"black", fontWeight:"bold"}}>Skills</Button>
          <Button style={{color:"black", fontWeight:"bold"}}>Project</Button>
          <Button style={{color:"black", fontWeight:"bold"}}>Contact</Button>
          </Box>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


