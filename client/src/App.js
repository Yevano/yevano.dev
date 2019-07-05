import React, { Component } from 'react';
import Portfolio from './Portfolio';
import Blog from './Blog';
import IENotSupported from './IENotSupported';
import NavBar from './NavBar';
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

class App extends Component {
  render() {
    if(history.location.pathname === '/') {
      history.push('/portfolio');
    }

    return (
      <ThemeProvider theme={ theme }>
        { (() => {
          if(browser.name === 'ie') {
            return <IENotSupported />;
          } else {
            return (
              <Router history={ history }>
                <NavBar history={ history }/>
                <Route path='/portfolio' component={ Portfolio } />
                <Route path='/blog' component={ Blog } />
              </Router>
            );
          }
        })() }
      </ThemeProvider>
    );
  }
}

export default App;