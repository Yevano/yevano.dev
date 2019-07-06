import React, { Component } from 'react';
import {
  AppBar,
  Button,
  Toolbar
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

class NavBar extends Component {
  render() {
    return (
      <AppBar position='static'>
        <Toolbar>
          <Button
            color='inherit'
            onClick={ () => this.props.history.push('/portfolio') }
            style={ {
              marginLeft: '10px'
            } }
          >
            Portfolio
          </Button>
          <Button
            color='inherit'
            onClick={ () => this.props.history.push('/blog') }
          >
            Blog
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;