import React,{useState} from 'react'
import { AppBar,Tab,Tabs,Toolbar,Typography } from '@mui/material'
import BusinessIcon from '@mui/icons-material/Business';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Stack from '@mui/material/Stack';
import { Card} from '@mui/material';
import {CardMedia} from '@mui/material';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import tesla from'../images/tesla.gif';
import spacex from'../images/spacex.gif';
import google from'../images/google.gif';
import apple from'../images/apple.gif';
import { Link } from 'react-router-dom';
import "./Home.css";

export default function Header() {
   const[value,setValue]=useState();
  return (
    <div className='header'>

        <AppBar sx={{background: '#063970'}}>
        <Toolbar>
            
            <BusinessIcon/>
            <Tabs  textColor='inherit' value={value} onChange={(e,value)=> setValue(value)} indicatorColor="inverse">
              <Link to="/Home "> <Tab label="USERS"/> </Link>
              <Tab label="COMPANY DATA"/>
              <Tab label="SWAGGER"/>
              <Tab label="LOGOUT"/>
            </Tabs>
            <Tabs sx={{marginLeft:'auto'}}  textColor='inherit'>
            <Tab label="LOGIN"/>
            <Tab label="SiGNUP"/>
            </Tabs>
            </Toolbar>
        </AppBar>
         <div className='topb81'>

          <Stack className='url1' direction="row" spacing={3}>
       <Card class="url1" >
         <CardMedia class='home_img80' component="img" image={tesla} />
        </Card>
      <Card class="url1">
         <CardMedia class='home_img81' component="img" image={spacex} />
       </Card >
       <Card class="url1">
         <CardMedia class='home_img80' component="img" image={google} />
       </Card>
       <Card class='home_img81'>
         <CardMedia class='home_img80' component="img" image={apple} />
       </Card>

</Stack>
        
     
    
    
    </div>
    </div>
  )
}