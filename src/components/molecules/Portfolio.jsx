import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../atom/Typography';
import Hatenya from '../../assets/Hatenya.png'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  px: 5,
  background:'#F4FFFA'
};

function Portfolio() {

  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'white', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 5,
          mb: 5,
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
       Portfolio
        </Typography>
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 5 }}>
        Our featured work
        </Typography>
        <div>
          <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={6}>
            <Box
                component="img"
                src={Hatenya}
                alt="graph"
                sx={{ height: 420,width:500 }}
              />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <Box sx={item}>
              <Typography variant="h6" marked="center" component="h6" sx={{ mt:2,mb: 2,color:'#004CF9' }}>
              Android & Ios
        </Typography>
        <Typography variant="h4" align="flex-start">
        Hatyana mobile and games application
                </Typography>
                <Typography variant="h5" align="flex-start" sx={{ mt:2,mb: 2 }}>
                We are delivering scalable and secure mobile, software and web apps, Game development, Business operation since 2018                </Typography>
                <Typography variant="h5" alignItems="flex-start" sx={{ my: 3 }}>
                 Developed By <span style={{color:'#004CF9'}}> Unity </span>
              </Typography>
              <Typography variant="h5" sx={{ my: 1,backgroundColor:'#004CF9',color:'white',padding:1 }}>
                Learn More <ArrowCircleRightOutlinedIcon style={{paddingTop:'10px',height:'30px',color:'white'}}/>
              </Typography>
              </Box>
            </Grid>

          </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default Portfolio;