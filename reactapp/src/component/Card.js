import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Btn from './Btn';
import WavingHandIcon from '@mui/icons-material/WavingHand';


export default function Cards() {
  return (
    <Box className="">
    <Card sx={{ display: 'flex' }} p={2} id="card">
      <Box sx={{ flexDirection: 'column'}} style={{display:"flex"}}>
        <CardContent>
                  <Typography component="div" variant="h5" p={2} style={{textShadow:"5px 5px 10px black"}}>
            <h1>Hi <WavingHandIcon variant="h2" className='icon'/>
             <br/>
                I`m Charles, 
             <br/>   
                front-end Developer</h1>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" p={2}>
            I design and Develop experiances that make people`s live simpler through
            Web and Mobile App. I work with figma HTML, CSS, JavaScript, React, ReactNative
            and Flutter.
          </Typography>
        </CardContent>
      <Box className="BtnBox">
        <Btn style={{ color:"red",backgroundColor: "yellow"}} text="Hire Me" />
        <Btn text="See My Projects"/>
        </Box>
      </Box>
        <Box className='imgBox'>
        <img className='img' src='/profile pic.jpg'/>
        </Box>
    </Card>
    </Box>
  );
}
