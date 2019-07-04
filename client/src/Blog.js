import React, {
  Component,
  Link
} from 'react';
import {
  Anchor,
  Box,
  Button,
  Grid,
  Text
} from 'grommet';
import rp from 'request-promise';
import renderHtml from 'react-render-html';
import { createBrowserHistory } from 'history';
import smoothscroll from 'smoothscroll-polyfill';
import ButtonLink from './ButtonLink';
import clientConfig from './client.config';

const history = createBrowserHistory();
smoothscroll.polyfill();

history.listen((location, action) => {
  const node = document.getElementById(history.location.pathname);

  if(node) {
    window.scrollTo({ left: 0, top: node.offsetTop, behavior: 'smooth' });
  }
});

class Blog extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    const options = {
      method: 'POST',
      uri: `https://${clientConfig.apiHost}:${clientConfig.apiPort}/api/db`,
      body: {
        action: 'get-posts'
      },
      json: true
    };

    rp(options).then(
      res => {
        console.log('loaded');
        const posts = this.state.posts;

        res.reverse().forEach(e => {
          posts.push(e);
        });

        this.setState({ posts: posts });
      },
      err => {
        console.log(err);
      }
    );
  }

  componentDidUpdate() {
    const node = document.getElementById(history.location.pathname);
    
    if(node) {
      window.scrollTo({ left: 0, top: node.offsetTop, behavior: 'smooth' });
    }
  }

  render() {
    return (
      <Box align='center'>
        { this.state.posts.map((post, i) =>
          <Box
            key={ i }
            align='start'
            margin='large'
            border={ { color: 'brand', size: 'small' } }
            width='80%'
            pad='small'
            id={ '/blog/' + post._id }
            elevation='medium'
          >
            <Grid
              fill
              rows={ ['fill'] }
              columns={ ['flex', 'flex'] }
              areas={ [
                { name: 'left', start: [0, 0], end: [0, 0] },
                { name: 'right', start: [1, 0], end: [1, 0] }
              ] }
            >
              <Box gridArea='left' justify='center' align='start'>
                <Text size='xlarge'>{ post.title }</Text>
              </Box>
              <Box gridArea='right' justify='center' align='end'>
                <ButtonLink
                  label='Link'
                  fontSize='20px'
                  onClick={ () => history.push('/blog/' + post._id) }
                />
                <Text size='small'>{ post.date }</Text>
              </Box>
            </Grid>
            { renderHtml(post.body) }
          </Box>
        ) }
      </Box>
    );
  }
}

export default Blog;