import React, { Component } from 'react';

class IENotSupported extends Component {
  render() {
    return (
      <span>Looks like you're using an outdated browser called Internet Explorer. Try a modern browser like <a href='https://www.mozilla.org/en-US/firefox/'>Firefox</a>, <a href='https://www.google.com/chrome/'>Chrome</a>, <a href='https://www.microsoft.com/en-us/windows/microsoft-edge'>Edge</a>, or <a href='https://www.opera.com/'>Opera</a>.
      </span>
    );
  }
}

export default IENotSupported;