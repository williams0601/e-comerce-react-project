import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from "../assets/logo.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';



export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img style={{ width: 40, height: 40 }} src={logo} alt="Wonderful logo"/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Inline Skate Shop
          </Typography>
          <div>
            <Button color="inherit" variant='outlined'>
                <strong>Sign In</strong>
            </Button>
            <Button color="inherit" >Login</Button>
          </div>
          <IconButton aria-label='show cart items' color='inherit'>
            <Badge badgeContent={2} color='secondary'>
              <ShoppingCartIcon fontSize='large' color='white'></ShoppingCartIcon>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
