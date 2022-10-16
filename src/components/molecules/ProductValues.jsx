import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../atom/Typography';

import appdevelopment from '../../assets/appdevelopment.png'
import GameDevelopment from '../../assets/GameDevelopment.png'
import webdevelopment from '../../assets/webdevelopment.png'
import Businessdevelopment from '../../assets/Businessdevelopment.png'
import syestemdevelopment from '../../assets/syestemdevelopment.png'
import Recruitmentsupport from '../../assets/Recruitmentsupport.png'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: '#FAFAFA' }}
    >
      <Container sx={{ mt: 10, mb: 10, display: 'flex', position: 'relative',flexDirection: 'column', }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Typography variant="p" component="p" sx={{ mb: 1,alignItems:'start',color:'#004CF9' }}>
        Services
        </Typography>
                <Typography variant="h4" component="h2" sx={{ mb: 1,alignItems:'start' }}>
        We are Really Good at
        </Typography>
<div>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4} lg={4}>
            <Box sx={item} style={{backgroundColor:'white',margin:'4px',padding:'10px'}}>
              <Box
                component="img"
                src={appdevelopment}
                alt="suitcase"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
              App development 
              </Typography>
              <Typography variant="h5">
                {
                  'From the latest trendy boutique hotel to the iconic palace with XXL pool'
                }
              </Typography>
              <Typography variant="h5" sx={{ my: 1 }}>
                Learn More <ArrowCircleRightOutlinedIcon style={{paddingTop:'10px',height:'30px'}}/>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Box sx={item} style={{backgroundColor:'white',margin:'4px',padding:'10px'}}>
              <Box
                component="img"
                src={GameDevelopment}
                alt="graph"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
              	Game Development
              </Typography>
              <Typography variant="h5">
                {
                  'Privatize a pool, take a Japanese bath or wake up in 900m2…'
                }
              </Typography>
              <Typography variant="h5" sx={{ my: 1 }}>
                Learn More <ArrowCircleRightOutlinedIcon style={{paddingTop:'10px',height:'30px'}}/>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Box sx={item} style={{backgroundColor:'white',margin:'4px',padding:'10px'}}>
              <Box
                component="img"
                src={webdevelopment}
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
              Web service Development
              </Typography>
              <Typography variant="h5">
                {'By registering, you will access specially negotiated rates '}
              </Typography>
              <Typography variant="h5" sx={{ my: 1 }}>
                Learn More <ArrowCircleRightOutlinedIcon style={{paddingTop:'10px',height:'30px'}}/>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Box sx={item} style={{backgroundColor:'white',margin:'4px',padding:'10px'}}>
              <Box
                component="img"
                src={Businessdevelopment}
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
               Business System Development 
              </Typography>
              <Typography variant="h5">
                {'By registering, you will access specially negotiated rates '}
              </Typography>
              <Typography variant="h5" sx={{ my: 1 }}>
                Learn More <ArrowCircleRightOutlinedIcon style={{paddingTop:'10px',height:'30px'}}/>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Box sx={item} style={{backgroundColor:'white',margin:'4px',padding:'10px'}}>
              <Box
                component="img"
                src={Recruitmentsupport}
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
              Recruitment Support
              </Typography>
              <Typography variant="h5">
                {'By registering, you will access specially negotiated rates '}
              </Typography>
              <Typography variant="h5" sx={{ my: 1 }}>
                Learn More <ArrowCircleRightOutlinedIcon style={{paddingTop:'10px',height:'30px'}}/>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Box sx={item} style={{backgroundColor:'white',margin:'4px',padding:'10px'}}>
              <Box
                component="img"
                src={syestemdevelopment}
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
               System maintenance
              </Typography>
              <Typography variant="h5">
                {'By registering, you will access specially negotiated rates '}
              </Typography>
              <Typography variant="h5" sx={{ my: 1 }}>
                Learn More <ArrowCircleRightOutlinedIcon style={{paddingTop:'10px',height:'30px'}}/>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default ProductValues;