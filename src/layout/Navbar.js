import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import './nav.css';
export default function Navbar() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div>

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='toolbar'>
          
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Ticket Flash
          </Typography>
          <Button color="inherit">
          
          <Link className="btn_adduser" to="/Home"><span title="Click here to go to the Admin page">Admin </span></Link></Button>
         
          <Link className="btn_adduser" to="/">LogOut
          <LogoutIcon/>
          </Link>

        </Toolbar>
      </AppBar>
    </Box>
  

    </div>
  )
}