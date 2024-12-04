import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Welcome to MotorMind!
        </Typography>
        <Button color="inherit">About</Button>
        <Button color="inherit">User Guide</Button>
        <Button color="inherit">Documentation</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
