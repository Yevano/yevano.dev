import React, { Component } from 'react';
import {
  Box,
  Button,
  Grommet,
  ThemeContext
} from 'grommet';
import Portfolio from './Portfolio';
import Blog from './Blog';
import IENotSupported from './IENotSupported';
import { theme } from './theme';
import { Route, Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { detect } from 'detect-browser';
import Radium from 'radium';
import ButtonLink from './ButtonLink';

const browser = detect();
const history = createBrowserHistory();

class NavBar extends Component {
  render() {
    return (
      <Box
        align='start'
        direction='row'
        elevation='large'
      >
        <Box margin='small'>
          <ButtonLink
            label='Portfolio'
            fontSize='24px'
            onClick={ () => history.push('/portfolio') }
          />
        </Box>
        <Box margin='small'>
          <ButtonLink
            label='Blog'
            fontSize='24px'
            onClick={ () => history.push('/blog') }
          />
        </Box>
      </Box>
    );
  }
}

class App extends Component {
  render() {
    if(history.location.pathname === '/') {
      history.push('/portfolio');
    }

    return (
      <Grommet theme={ theme }>
        { (() => {
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
        })() }
      </Grommet>
    );
  }
}

export default App;