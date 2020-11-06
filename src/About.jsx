import React from 'react';
import './App.css';
import firebase from './config/firebaseConfig.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box,Typography, Button, Paper, Icon, TextField, Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import {Link} from 'react-router-dom';
// import router from './config/router';

class About extends React.Component {


  // Menu Pages herrarchey Routing
  gohome = () => {
    this.props.history.push('/');
  }
  goabout = () => {
    this.props.history.push('/about');
  }

    render() {
        return (
            <Box className="reactdiv">
            <AppBar>
              <Toolbar>
                <Typography style={{flexGrow: 1}}>Haseeb Developer</Typography>
                <Button onClick={this.gohome}    startIcon={<HomeRoundedIcon />} variant="contained" color="secondary">Home</Button>
                <Button onClick={this.goabout}   color="inherit">About Us</Button>
              </Toolbar>
            </AppBar>
            <h1>This is about page</h1>
            </Box>
        )
    }

}

export default  About;