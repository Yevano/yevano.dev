import React, { Component } from 'react';
import Portfolio from './Portfolio';
import Blog from './Blog';
import IENotSupported from './IENotSupported';
import { Route, Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { detect } from 'detect-browser';
import ButtonLink from './ButtonLink';

const browser = detect();
const history = createBrowserHistory();

class NavBar extends Component {
  render() {
    return (
      null
    );
  }
}

class App extends Component {
  render() {
    if(history.location.pathname === '/') {
      history.push('/portfolio');
    }

    return (
      null
    );
  }
}

export default App;