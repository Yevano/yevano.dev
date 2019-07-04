import React, { Component } from 'react';
import {
  Anchor,
  Box,
  Grid,
  Link,
  Text
} from 'grommet';
import ProjectDescription from './ProjectDescription';

class Portfolio extends Component {
  render() {
    return (
      <Grid
        rows={ ['auto', 'auto'] }
        columns={ ['75%', '25%'] }
        areas={[
          { name: 'topleft', start: [0, 0], end: [0, 0] },
          { name: 'topright', start: [1, 0], end: [1, 0] },
          { name: 'left', start: [0, 1], end: [0, 1] },
          { name: 'right', start: [1, 1], end: [1, 1] },
        ]}
        fill
      >
        <Box pad='large' align='start' gridArea='topleft'>
          <Box>
            <Text size='xxlarge' weight='bold'>James King</Text>
          </Box>
          <Text size='xsmall'>Software developer, media enthusiast, video game hobbyist, and math geek.</Text>
        </Box>
        <Box pad='large' align='start' gridArea='topright'>
          <Text size='small' weight='bold'>(760) 681-1375</Text>
          <Text size='small'><Anchor href='mailto:jamking1996@gmail.com'>jamking1996@gmail.com</Anchor></Text>
        </Box>
        <Box pad='large' align='start' gridArea='left'>
          <Text size='large' margin={{ 'vertical': 'small' }}>Projects</Text>
          <ProjectDescription
            title={<Text><Anchor href='https://github.com/Team-CC-Corp/JVML-JIT'><b>JVML-JIT</b></Anchor> — A JIT-compiled JVM written in Lua.</Text>}
            description='Worked on a team to add just-in-time compilation to a JVM written in Lua.'
          />
          <ProjectDescription
            title={<Text><Anchor href='https://www.youtube.com/watch?v=x4E-4keyeVM'><b>3D Software Rasterizer</b></Anchor> — A 3D rasterizer that runs in Minecraft.</Text>}
            description='Developed a 3D rasterizer in Lua that runs in the ComputerCraft mod for Minecraft.'
          />
          <ProjectDescription
            title={<Text><Anchor href='https://www.shadertoy.com/view/4dXBDs'><b>Mandelbrot Quaternion Extension</b></Anchor> — A raycaster that renders a 3D extension to the Mandelbrot set.</Text>}
            description='Developed a raytracer in Shadertoy which, using quaternions instead of complex numbers, iterates and renders a 3D extension to the Mandelbrot set.'
          />
          <ProjectDescription
            title={<Text><Anchor href='https://github.com/Yevano/parser_gen'><b>parser_gen</b></Anchor> — A recursive parser generator.</Text>}
            description='Developed a macro-based system in Crystal for generating recursive descent parsers.'
          />
          <ProjectDescription
            title={<Text><Anchor href='https://github.com/Yevano/zenith'><b>Zenith</b></Anchor> — A typed typed lambda calculus.</Text>}
            description='Developed an automated reducer for a language similar to the Calculus of Constructions, using first order logic as a type system.'
          />
        </Box>
        <Box pad='large' align='start' gridArea='right'>
          <Text size='large' margin={ { 'vertical': 'small' } }>Skills</Text>
          <Text size='small'>Programmer self-taught over ten years proficient in C++, Java, C#, D, and Lua.</Text>
          <Text size='small'>Also comfortable with Crystal, Ruby, and Rust.</Text>
          <Text size='small'>Knowledge in concurrency, OOP, functional programming, databases, and programming language development.</Text>
        </Box>
      </Grid>
    );
  }
}

export default Portfolio;