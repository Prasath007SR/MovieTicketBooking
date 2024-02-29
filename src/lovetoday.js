import { AppBar, Toolbar,Typography,Button,Rating,Stack, CardActionArea, CardContent,InputLabel, CardMedia, Paper, Box, MenuItem, Select } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import './lovetoday.css';
import Avata from './assets/avat.png';
import { Card } from '@mui/material';

import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from './layout/Navbar';
const Lovetoday = () => {
    return (
        <div class="container7">
          
        <div class="login-container7">
            <form class="forms7">
                <div className="login7">
                <AppBar position='sticky' >
            <Toolbar sx={{justifyContent:'space-between'}} className='topp'>
            <Box sx={{display:'flex',alignItems:'center',gap:'20px'}}>
                 
            <Typography  sx={{display:'flex',alignItems:'center',gap:'20px'}}>
             <HomeIcon sx={{fontSize: 35}}/> <h3>Home</h3>
            </Typography>
           </Box>
           <Box sx={{display:'flex',alignItems:'center',gap:'20px'}}>
            <Typography >
              <h2>Ticket Flash</h2>
            </Typography>
            </Box>
            <Box sx={{display:'flex',alignItems:'center',gap:'20px'}}>
            <InputLabel id="demo-simple-select-label"><p className='white18'>Location</p></InputLabel>
          <Select
          labelId="demo-simple-select-label">
          <MenuItem >Coimbatore</MenuItem>
          <MenuItem  >Chennai</MenuItem>
          <MenuItem >Erode</MenuItem>
          <MenuItem >Trichy</MenuItem>
          <MenuItem >Tirupur</MenuItem>
        </Select>
            <Avatar alt="Profile" src={Avata} />
            </Box>

            </Toolbar>
        </AppBar>

                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <div><marquee>  || <b> MOVIES </b> || ||  LOVE TODAY  ||  PS1  ||  GOLD  ||  KANTARA  ||  JAYA HEY  ||  AGENT KANAIRAM  ||  AVATAR: THE WAY OF WATER  ||  BLACK PANTHER: WAKANDA FOREVER  ||  BLACK ADAM  || ||<b>EVENT</b>  ||  YUVAN LIVE CONCERT  ||</marquee></div>
                  <br></br>
                  <br></br>
                  <div classname='img-resize7'>
                 <Container maxwidth="1">
                 <Stack direction="row" sx={{gap:'75px'}}>
                        <CardMedia class="media15">
                    <p className='exame'>
            <img alt="Veeran" src="https://th-i.thgim.com/public/entertainment/movies/a08frl/article66531459.ece/alternates/FREE_1200/First%20look%20of%20%E2%80%98Veeran%E2%80%99" height="500px" width={"500px"}  />  </p>
            <p class="j15">Movie Tickets → Movies → Veeran (U) -Tamil</p>
            <p>
            <h4>About the movie:</h4>
            A 15-year-old boy living in Veeranor, gets struck by lightning and goes into a short coma. After recovery, he gradually realizes that he has superpowers of lightning and mind control.</p>
                    </CardMedia>
                    

         <p class="s15">
         Veeran - Tamil
Tamil | U/A<br></br><br></br>
Action | Drama | 11/4/2022 | 2 hrs 35 mins<br></br><br></br>
Actors: Hiphop tamizha | Sarathkumar | Sathyaraj | Yogi Babu<br></br><br></br>

Director: ARK Saravanan<br></br><br></br>

Music Director: Hip Hop Tamizha<br></br><br></br>

SYNOPSIS
A 15-year-old boy living in Veeranor, gets struck by lightning and goes into a short coma. After recovery, he gradually realizes that he has superpowers of lightning and mind control.
<br></br>
<br></br>
<Button onClick={() => alert('Ticket Booked Check your mail for the ticket')} variant="contained"  sx={{backgroundColor:' rgb(216, 109, 109)'}}>Book now!</Button>
</p>


 <br></br>
                </Stack>
                
                 </Container>
                 
                 <p class="u15">
                 Chamarajanagar   Chidambaram   Chinnamanur   Coimbatore   Cumbum   Devakottai   Dharapuram   
                 <br></br>Dharmapuri   Gobichettipalayam   Gudiyatham   Kovilpatti   Krishnagiri  Madurai   Marthandam Kumbakonam <br></br>  
                 Nagercoil   Neyveli-Township   Palani   Perundurai   Pollachi   Puducherry   Pudukkottai   Rasipuram   Tenkasi      
                 <br></br>Tirunelveli  Thiruvannamalai   Thiruvarur  Tirupur   Tuticorin   Udumalpet   Vaniyambadi   Vellore Salem  
                   
                 </p>
       
                 </div>
                </div>
            </form>
        </div>
    </div>
    )
}
export default Lovetoday;