import React, { Component } from 'react';
import copyObject from './copyObject';
import Radium from 'radium';

const style = {
  //backgroundColor: 'rgba(0, 0, 0, 0)',
  //border: 'none',
  color: '#7D4CDB',
  ':hover': {
    cursor: 'pointer',
    textDecoration: 'underline'
  }
};

class ButtonLink extends Component {
  render() {
    return (
      <span
        style={ (() => {
          var customStyle = copyObject(style);

          if(this.props.fontSize) {
            customStyle.fontSize = this.props.fontSize;
          }

          return customStyle;
        })() }
        onClick={ this.props.onClick }
      >
        <b>{ this.props.label }</b>
      </span>
    );
  }
}

ButtonLink = Radium(ButtonLink);

export default ButtonLink;