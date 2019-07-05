import React, { Component } from 'react';
import {
  AppBar,
  Button,
  Toolbar
} from '@material-ui/core';

class NavBar extends Component {
  render() {
    return (
      <AppBar position='static'>
        <Toolbar>
          <Button
            color='inherit'
            onClick={ () => this.props.history.push('/portfolio') }
          >
            Portfolio
          </Button>
          <Button
            color='inherit'
            onClick={ () => this.props.history.push('/blog') }
            style={ {
              marginLeft: '10px'
            } }
          >
            Blog
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;