import React, { Component } from 'react';
import {
  Box,
  Text
} from 'grommet';

class ProjectDescription extends Component {
  render() {
    return (
      <Box margin={{ 'vertical': 'small' }}>
        <Text size='medium'>{this.props.title}</Text>
        <Text size='small'>{this.props.description}</Text>
      </Box>
    );
  }
}

export default ProjectDescription;