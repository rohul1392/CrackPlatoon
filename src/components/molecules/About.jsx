import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../atom/Typography';
import UperImage from '../../assets/uper_image.png'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  px: 5,
};

function About() {

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
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 5 }}>
          About Us
        </Typography>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={8}>
              <Box sx={item}>
                <Typography variant="h5" align="flex-start">
                Bangladesh is working on “Digital Bangladesh” as a national policy. It is including human resource development to build world-class skills in all areas relating to ICT and the English language. There are international tech companies enter Bangladesh or looking at it as a place to outsource IT demands. Therefore the fact that there are not enough domestic opportunities for Bangladeshi IT talents.
cp currently working for recruiting services in the IT fields. cp decided to provide offshore development service, on-demand dispatch service, and the recruiting service for non-Bangladesh companies facing IT issues and support Bangladeshi IT talents to find new opportunities to be active with their skills.
                </Typography>
                <Typography variant="h5" alignItems="flex-start" sx={{ my: 1 }}>
                 More About Us <ArrowCircleRightOutlinedIcon style={{paddingTop:'10px',height:'30px'}}/>
              </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
            <Box
                component="img"
                src={UperImage}
                alt="graph"
                sx={{ height: 350 }}
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default About;