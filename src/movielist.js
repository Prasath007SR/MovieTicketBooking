import Button from '@mui/material/Button';
import { FaStar } from 'react-icons/fa';
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Avatar,Badge, Stack, Box, FormControl,MenuItem, InputLabel,IconButton,StyledBadge } from '@mui/material';
import './movieslist.css';
import Avata from './assets/avat.png';
import bel from './assets/bell.png';
import ava from './assets/Avatar2.jpg'
import badam from './assets/Badam.jpeg'
import bpan from './assets/panther2.jpg';
import * as FaIcons from "react-icons/fa";
import { Container } from '@mui/system';
import {  AiOutlineStar } from "react-icons/ai";
import Rating from '@mui/material/Rating';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import HomeIcon from '@mui/icons-material/Home';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import HomeSwiper from './pages/Swiper';

const Movie = () => {
  const navigate = useNavigate();
  
  const navigateVeeran = () => {
    
    navigate('/veerandetails');
  };
  const navigateGoodnight = () => {
    
    navigate('/goodnight');
  };
  const navigateSpiderman = () => {
    
    navigate('/spiderman');
  };
  const navigateTransformer = () => {
    
    navigate('/transformerdetails');
  };
  const navigatePS2 = () => {
    
    navigate('/ps2');
  };
  const navigateM2018 = () => {
    
    navigate('/2018');
  };
  const navigatePor = () => {
    
    navigate('/por');
  };
  
    return(
      <div>

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
        <div className='img-resize'>
          <HomeSwiper/>
          <br></br>
          <br></br>
      
      <Container maxWidth="l">
        <Stack direction="row" sx={{gap:'75px'}}>
     
        <div >
            <p className='example'>
            <img  alt="Veeran" src="https://th-i.thgim.com/public/entertainment/movies/a08frl/article66531459.ece/alternates/FREE_1200/First%20look%20of%20%E2%80%98Veeran%E2%80%99" height="500" width={"428"}   />  </p><br></br> 
             
            <div className='kin'style={{marginLeft:'30%'}}>
              Veeran - U <br></br>
             <p className='te'>Ratings: <Rating name="size-medium" defaultValue={0} /></p>
            <Button onClick={navigateVeeran} variant="contained"  sx={{backgroundColor:' rgb(216, 109, 109)'}}>Book now!</Button>
            </div>
            </div> 
            <div >
            <p className='example'>
            <img alt="Good night" src="https://m.media-amazon.com/images/M/MV5BMTJjN2NhY2EtYzZkOC00NDQ0LWFhMzEtNWZhYTFhNzNhNjllXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg" height="500px" width={"428px"}  />  </p>  <br></br>  
            <div className='kin'style={{marginLeft:'30%'}}>
            <>Good Night - U</> <br></br>
            <p className='te'>Ratings: <Rating name="size-medium" defaultValue={0} /></p>
            <Button onClick={navigateGoodnight} variant="contained"  sx={{backgroundColor:' rgb(216, 109, 109)'}}>Book now!</Button>
            </div>
            </div>
           
            <div>
            <p className='example'>
            <img alt="Spideyyy" src="https://m.media-amazon.com/images/M/MV5BNzQ1ODUzYjktMzRiMS00ODNiLWI4NzQtOTRiN2VlNTNmODFjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg" height="500px" width={"428px"}  />  </p> <br></br>  
            <div className='kin'style={{marginLeft:'30%'}}>
             Spider Man Spiderverse - U/A <br></br>
             <p className='te'>Ratings:<Rating name="size-medium" defaultValue={0} /></p>
            <Button onClick={navigateSpiderman} variant="contained" sx={{backgroundColor:' rgb(216, 109, 109)'}}>Book now!</Button>
            </div>
            </div>   
        </Stack>
        <Stack direction="row" sx={{gap:'75px'}}>
            <div>
            <p className='example'>
            <img alt="Transformers" src="https://m.media-amazon.com/images/M/MV5BZTNiNDA4NmMtNTExNi00YmViLWJkMDAtMDAxNmRjY2I2NDVjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg" height="500px" width={"428px"}  />  </p> <br></br>  
            <div className='kin'style={{marginLeft:'30%'}}>
             Transformers - U/A <br></br>
             <p className='te'>Ratings:<Rating name="size-medium" defaultValue={0} /></p>
            <Button onClick={navigateTransformer} variant="contained" sx={{backgroundColor:' rgb(216, 109, 109)'}}>Book now!</Button>
            </div>
            </div>

            <div>
            <p className='example'>
            <img alt="PS2" src="https://juksun.com/wp-content/uploads/2023/03/Ponniyin-Selvan-II-Movie-Poster.jpg" height="500px" width={"428px"}  />  </p> <br></br>  
            <div style={{marginLeft:'30%'}}>
             Ponniyin Selvan2 - U/A <br></br>
             <p className='te'>Ratings:<Rating name="size-medium" defaultValue={0} /></p>
            <Button onClick={navigatePS2} variant="contained" sx={{backgroundColor:' rgb(216, 109, 109)'}}>Book now!</Button>
            </div>
            </div>

            <div>
            <p className='example'>
            <img alt="2018" src="https://m.media-amazon.com/images/M/MV5BZWFhZjBjY2ItMmZmMC00N2RjLTg2ZjktNDUwNmYwNmVjMDA5XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_FMjpg_UX1000_.jpg" height="500px" width={"428px"}  />  </p> <br></br>  
            <div style={{marginLeft:'30%'}}>
             2018 - U <br></br>
             <p className='te'>Ratings:<Rating name="size-medium" defaultValue={0} /></p>
            <Button onClick={navigateM2018} variant="contained" sx={{backgroundColor:' rgb(216, 109, 109)'}}>Book now!</Button>
            </div>
            </div>
        </Stack>

        <Stack direction="row" sx={{gap:'75px'}}>

            <div>
            <p className='example'>
            <img alt="Neymar" src="https://m.media-amazon.com/images/M/MV5BNzkyNzMxNGMtOGI5OS00ZTk4LWE1ZWYtZTIwNDA1OTNlOTc5XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_FMjpg_UX1000_.jpg" height="500px" width={"428px"}  />  </p> <br></br>  
            <div style={{marginLeft:'30%'}}>
             Neymar - U <br></br>
             <p className='te'>Ratings:<Rating name="size-medium" defaultValue={0} /></p>
            <Button onClick={navigateTransformer} variant="contained" sx={{backgroundColor:' rgb(216, 109, 109)'}}>Book now!</Button>
            </div>
            </div>

            <div>
            <p className='example'>
            <img alt="Por THozhil" src="https://m.media-amazon.com/images/M/MV5BYjk4MTdhMzEtNDc5NS00MWIyLTk2NjItOTMzNDU2ZjFhM2EwXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_.jpg" height="500px" width={"428px"}  />  </p> <br></br>  
            <div style={{marginLeft:'30%'}}>
              Por Thozhil - U/A <br></br>
             <p className='te'>Ratings:<Rating name="size-medium" defaultValue={0} /></p>
            <Button onClick={navigatePor} variant="contained" sx={{backgroundColor:' rgb(216, 109, 109)'}}>Book now!</Button>
            </div>
            </div>

            <div>
            <p className='example'>
            <img alt="Suzume" src="https://m.media-amazon.com/images/M/MV5BNGVkNDc3NjUtNTY5ZS00ZmE0LWE3YzctMDk2OTRlNTdiZWQwXkEyXkFqcGdeQXVyMTU3NDg0OTgx._V1_.jpg" height="500px" width={"428px"}  />  </p> <br></br>  
            <div style={{marginLeft:'30%'}}>
             Suzume - U/A <br></br>
             <p className='te'>Ratings:<Rating name="size-medium" defaultValue={0} /></p>
            <Button variant="contained" sx={{backgroundColor:' rgb(216, 109, 109)'}}>Book now!</Button>
            </div>
            </div>

        </Stack>
        <br></br>
        <br></br>
        <div className='upmovies'>
        <h3>Upcoming Movies</h3>
          </div>
          <br></br>
          <br></br>
          <Stack direction="row" sx={{gap:'75px'}}>
            
          <div>
            <p className='example'>
            <img alt="Flash" src="https://m.media-amazon.com/images/M/MV5BMmM3OWU0YWItNTAzMC00YjNlLWJiM2ItODY5NjY0OTA4OTY1XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg" height="500px" width={"428px"}  />  </p> <br></br>  
            <div className='kin'style={{marginLeft:'30%'}}>
             The Flash - U/A <br></br>
             <p className='te'>Ratings:<Rating name="size-medium" defaultValue={0} /></p>
            <Button variant="contained" sx={{backgroundColor:' rgb(216, 109, 109)'}}>Book now!</Button>
            </div>
            </div>

          <div>
            <p className='example'>
            <img alt="Adipurush" src="https://assetscdn1.paytm.com/images/cinema/Gallery-image_5-bf762f60-e317-11ed-8235-2bfd8cec2fc6.jpg" height="500px" width={"428px"}  />  </p> <br></br>  
            <div style={{marginLeft:'30%'}}>
             Adipurush - U <br></br>
             <p className='te'>Ratings:<Rating name="size-medium" defaultValue={0} /></p>
            <Button variant="contained" sx={{backgroundColor:' rgb(216, 109, 109)'}}>Book now!</Button>
            </div>
            </div>

          <div>
            <p className='example'>
            <img alt="Jailer" src="https://moviegalleri.net/wp-content/uploads/2022/08/Rajinikanth-Jailer-Movie-First-Look-Poster-HD.jpg" height="500px" width={"428px"}  />  </p> <br></br>  
            <div style={{marginLeft:'30%'}}>
             Jailer - U/A <br></br>
             <p className='te'>Ratings:<Rating name="size-medium" defaultValue={0} /></p>
            <Button variant="contained" sx={{backgroundColor:' rgb(216, 109, 109)'}}>Book now!</Button>
            </div>
            </div>

          </Stack>

          <Stack direction="row" sx={{gap:'75px'}}>
          <div>
            <p className='example'>
            <img alt="Jawan" src="https://www.jaloga.com/wp-content/uploads/2022/06/FUU9tWsXwAAsIRq.jpg-large-2.jpeg" height="500px" width={"428px"}  />  </p> <br></br>  
            <div style={{marginLeft:'30%'}}>
             Jawan - U/A <br></br>
             <p className='te'>Ratings:<Rating name="size-medium" defaultValue={0} /></p>
            <Button variant="contained" sx={{backgroundColor:' rgb(216, 109, 109)'}}>Book now!</Button>
            </div>
            </div>

          <div>
            <p className='example'>
            <img alt="Cap Miller" src="https://m.media-amazon.com/images/M/MV5BYTg5ZjA4MTQtYjNmYy00NjY1LTg3MDItYTQ1MDgwMzA0ZDIzXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_FMjpg_UX1000_.jpg" height="500px" width={"428px"}  />  </p> <br></br>  
            <div style={{marginLeft:'30%'}}>
             Captain Miller <br></br>
             <p className='te'>Ratings:<Rating name="size-medium" defaultValue={0} /></p>
            <Button variant="contained" sx={{backgroundColor:' rgb(216, 109, 109)'}}>Book now!</Button>
            </div>
            </div>

          <div>
            <p className='example'>
            <img alt="Salaar" src="https://m.media-amazon.com/images/M/MV5BMjQ3MzhlNzQtZGEyOC00OWI2LWI5NDAtNTlmMTUwMGI3ODM3XkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg" height="500px" width={"428px"}  />  </p> <br></br>  
            <div style={{marginLeft:'30%'}}>
            Salaar - U/A<br></br>
             <p className='te'>Ratings:<Rating name="size-medium" defaultValue={0} /></p>
            <Button variant="contained" sx={{backgroundColor:' rgb(216, 109, 109)'}}>Book now!</Button>
            </div>
            </div>
          </Stack>
          </Container>
          
     </div>

            </div>
  
  )
}
  export default Movie;
  