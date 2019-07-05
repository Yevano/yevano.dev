import React, { Component } from 'react';
import {
  Box,
  Grid,
  Link,
  Typography
} from '@material-ui/core';

const boxStyle = {
  margin: '2%'
}

class Portfolio extends Component {
  render() {
    return (
      <Grid
        container
        spacing={ 0 }
      >
        <Grid item xs={ 8 }>
          <Box style={ boxStyle }>
            <Typography variant='h3' display='block' gutterBottom>
              James King
            </Typography>
            <Typography variant='body1'>
              Software developer, media enthusiast, video game hobbyist, and math geek.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={ 4 }>
          <Box style={ boxStyle }>
            <Link
              variant='body1'
              href='mailto:jamking1996@gmail.com'
            >
              jamking1996@gmail.com
            </Link>
          </Box>
        </Grid>
        <Grid item xs={ 8 }>
          <Box style={ boxStyle }>
            <Typography variant='h4' display='block' gutterBottom>
              Projects
            </Typography>
            <Typography variant='h5' gutterBottom>
              <Link href='https://github.com/Team-CC-Corp/JVML-JIT'>JVML-JIT</Link> — A JIT-compiled JVM written in Lua.</Typography>
            <Typography variant='body1' gutterBottom>
              Worked on a team to add just-in-time compilation to a JVM written in Lua.
            </Typography>
            <Typography variant='h5' gutterBottom>
              <Link href='https://www.youtube.com/watch?v=x4E-4keyeVM'>3D Software Rasterizer</Link> — A 3D rasterizer that runs in Minecraft.</Typography>
            <Typography variant='body1' gutterBottom>
              Developed a 3D rasterizer in Lua that runs in the ComputerCraft mod for Minecraft.
            </Typography>
            <Typography variant='h5' gutterBottom>
              <Link href='https://www.shadertoy.com/view/4dXBDs'>Mandelbrot Quaternion Extension</Link> — A raycaster that renders a 3D extension to the Mandelbrot set.</Typography>
            <Typography variant='body1' gutterBottom>
              Developed a raytracer in Shadertoy which, using quaternions instead of complex numbers, iterates and renders a 3D extension to the Mandelbrot set.
            </Typography>
            <Typography variant='h5' gutterBottom>
              <Link href='https://github.com/Yevano/parser_gen'>parser_gen</Link> — A recursive parser generator.</Typography>
            <Typography variant='body1' gutterBottom>
              Developed a macro-based system in Crystal for generating recursive descent parsers.
            </Typography>
            <Typography variant='h5' gutterBottom>
              <Link href='https://github.com/Yevano/zenith'>Zenith</Link> — A typed lambda calculus.</Typography>
            <Typography variant='body1' gutterBottom>
              Developed a macro-based system in Crystal for generating recursive descent parsers.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={ 4 }>
          <Box style={ boxStyle }>
            <Typography variant='h4' display='block' gutterBottom>
              Skills
            </Typography>
            <Typography variant='body1' gutterBottom>
              Programmer self-taught over ten years proficient in C++, Java, C#, D, and Lua.
            </Typography>
            <Typography variant='body1' gutterBottom>
              Also comfortable with Crystal, Ruby, and Rust.Knowledge in concurrency, OOP, functional programming, databases, and programming language development.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    );
  }
}

export default Portfolio;