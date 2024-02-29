import { AppBar, Toolbar,Typography,Button,Rating,Stack, CardActionArea, CardContent,InputLabel, CardMedia, Paper, Box, MenuItem, Select } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import './lovetoday.css';
import Avata from './assets/avat.png';
import { Card } from '@mui/material';

import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from './layout/Navbar';
const Tranformers = () => {
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
            <img alt="Veeran" src="https://i.redd.it/tj2tdw4s02za1.jpg" height="500px" width={"500px"}  />  </p>
            <p class="j15">Movie Tickets → Movies → Tranformers Rise of Beast (U/A) -Tamil</p>
            <p>
            <h4>About the movie:</h4>
            Optimus Prime and the Autobots take on their biggest challenge yet. When a new threat capable of destroying the entire planet emerges, they must team up with a powerful faction of Transformers known as the Maximals to save Earth.</p>
                    </CardMedia>
                    

         <p class="s15">
         Transformers Rise of beast - 
Tamil | U/A<br></br><br></br>
Action | Sci-fi | 11/4/2023 | 2 hrs 35 mins<br></br><br></br>
Actors: Anthony Ramos | Liza Koshy | Peter Cullen | Ron Perlman<br></br><br></br>

Director: Steven Caple Jr.<br></br><br></br>

Music Director: Jongnic Bontemps<br></br><br></br>

SYNOPSIS:
Optimus Prime and the Autobots take on their biggest challenge yet. When a new threat capable of destroying the entire planet emerges, they must team up with a powerful faction of Transformers known as the Maximals to save Earth
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
export default Tranformers;