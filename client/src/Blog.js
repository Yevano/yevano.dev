import React, {
  Component,
  Link
} from 'react';
import rp from 'request-promise';
import renderHtml from 'react-render-html';
import smoothscroll from 'smoothscroll-polyfill';
import clientConfig from './client.config';
import {
  Box,
  Button,
  Grid,
  Icon,
  Paper,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';

smoothscroll.polyfill();

const useStyles = makeStyles(theme => ({
  copyLinkButton: {
    marginBottom: theme.spacing(2)
  }
}));

const CopyLinkButton = (props) => {
  const classes = useStyles();

  return (
    <Box className={ classes.copyLinkButton }>
      <CopyToClipboard text={ window.location.href }>
        <Button
          variant='contained'
          color='primary'
          onClick={ props.onClick }
        >
          Copy link
        </Button>
      </CopyToClipboard>
    </Box>
  );
};

class Blog extends Component {
  state = {
    posts: [],
    historyUnlisten: null
  };

  componentDidMount() {
    const history = this.props.history;

    const historyUnlisten = history.listen((location, action) => {
      const node = document.getElementById(history.location.pathname);

      if(node) {
        window.scrollTo({ left: 0, top: node.offsetTop, behavior: 'smooth' });
      }
    });

    this.setState({ historyUnlisten: historyUnlisten });

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

  componentWillUnmount() {
    this.state.historyUnlisten();
  }

  componentDidUpdate() {
    const node = document.getElementById(this.props.history.location.pathname);
    
    if(node) {
      window.scrollTo({ left: 0, top: node.offsetTop, behavior: 'smooth' });
    }
  }

  render() {
    return (
      <Box
        style={ {
          marginTop: '5%',
          marginBottom: '5%',
          marginLeft: '10%',
          marginRight: '10%'
        } }
      >
        { this.state.posts.map((post, i) =>
          <Paper id={ '/blog/' + post._id }>
            <Grid
              container
              space={ 0 }
              style={ {
                padding: '5%'
              } }
            >
              <Grid item xs={ 6 }>
                <Typography variant='h5'>
                  { post.title }
                </Typography>
              </Grid>
              <Grid item xs={ 6 }>
                <Box
                  style={ {
                    float: 'right'
                  } }
                >
                  <CopyLinkButton onClick={ () => this.props.history.push(`/blog/${post._id}`) } />
                  <Typography variant='body1'>
                    { post.date }
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Box
              style={ {
                paddingLeft: '5%',
                paddingRight: '5%',
                paddingBottom: '5%',
                fontFamily: 'Roboto'
              } }
            >
              { renderHtml(post.body) }
            </Box>
          </Paper>
        ) }
      </Box>
    );
  }
}

export default Blog;