import React, {
  Component,
  Link
} from 'react';
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
      null
    );
  }
}

export default Blog;