import React, { Component } from 'react';
import Portfolio from './Portfolio';
import Blog from './Blog';
import IENotSupported from './IENotSupported';
import { Route, Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { detect } from 'detect-browser';
import {
  AppBar,
  Box,
  Button,
  Toolbar
} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

const browser = detect();
const history = createBrowserHistory();

class NavBar extends Component {
  render() {
    return (
      <ThemeProvider theme={ theme }>
        <AppBar position='static'>
          <Toolbar>
            <Button
              color='inherit'
              onClick={ () => history.push('/portfolio') }
            >
              Portfolio
            </Button>
            <Button
              color='inherit'
              onClick={ () => history.push('/blog') }
              style={ {
                marginLeft: '10px'
              } }
            >
              Blog
            </Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    );
  }
}

class App extends Component {
  render() {
    if(history.location.pathname === '/') {
      history.push('/portfolio');
    }

    return (
      (() => {
        if(browser.name === 'ie') {
          return <IENotSupported />;
        } else {
          return (
            <Router history={ history }>
              <NavBar />
              <Route path='/portfolio' component={ Portfolio } />
              <Route path='/blog' component={ Blog } />
            </Router>
          );
        }
      })()
    );
  }
}

export default App;