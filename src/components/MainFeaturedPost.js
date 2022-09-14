import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function MainFeaturedPost(props) {
  const { post } = props;

  return (
    <Paper
      sx={{
        position: 'relative', // is positioned relative to its normal position. https://www.w3schools.com/css/css_positioning.asp
        backgroundColor: 'grey',
        color: '#fff',
        mb: 4, // margin bottom
        backgroundSize: 'cover', // https://developer.mozilla.org/en-US/docs/Web/CSS/background-size Scales the image (while preserving its ratio) to the smallest possible size to fill the container (that is: both its height and width completely cover the container), leaving no empty space.
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <Box
        // Add grey overlay
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)', // .3 is opacity ,  alpha channel - which specifies the opacity for a color.
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 }, // padding
              // pr: { md: 0 }, // padding right
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography>
            <Link variant="subtitle1" href="#">
              {post.linkText}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MainFeaturedPost;