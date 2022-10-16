import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../atom/Typography';
import OurServices from '../../assets/infograpic.png'


function Services() {

  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'white', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h6" marked="center" component="h6" sx={{ mb: 1,color:'#004CF9' }}>
        Service plan
        </Typography>
        <Typography variant="h4" marked="center" component="h4" sx={{ mb: 1 }}>
        How we approach a process and progress
        </Typography>
        <div>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12} lg={12}>
            <Box
                component="img"
                src={OurServices}
                alt="graph"
                sx={{ height: 500 }}
              />
            </Grid>
          </Grid>
        </div>
        <Typography variant="h6" marked="center" component="h6" sx={{ mb: 1,color:'#004CF9' }}>
        We’re on a mission to provide demand-able technology services across the world and implementing our process to achieve clients goal.        </Typography>
      </Container>
    </Box>
  );
}

export default Services;