import React, { Component } from 'react';
import {
  Link,
  Typography
} from '@material-ui/core';

const conversions = {
  /*p: (comp) => {
    return <Typography style={ comp.props.style } variant='body1' gutterBottom>{ convert(comp.props.children) }</Typography>;
  },*/
  a: (comp) => {
    return <Link href={ comp.props.href }>{ convert(comp.props.children) }</Link>;
  },
  /*span: (comp) => {
    return <Typography variant='body1'>{ comp.props.children }</Typography>;
  }*/
};

function convert(comp) {
  if(typeof comp === 'string') {
    return comp;
  } else if(typeof comp === 'object') {
    if(Array.isArray(comp)) {
      return comp.map((e) => convert(e));
    } else if(comp) {
      const f = conversions[comp.type];

      if(f) {
        return f(comp);
      } else {
        return React.createElement(comp.type, comp.props, convert(comp.props.children));
      }
    } else {
      return null;
    }
  } else if(typeof comp == 'undefined') {
    return null;
  } else {
    throw `Unhandled component type ${typeof comp}.`;
  }
}

class HTMLToMUI extends Component {
  render() {
    return convert(this.props.children);
  }
}

export default HTMLToMUI;