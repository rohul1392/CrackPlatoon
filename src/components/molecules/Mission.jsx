import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../atom/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  px: 5,
};

function Mission() {

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
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 3 }}>
          Mission
        </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Box sx={item}>
                <Typography variant="h5" align="flex-start">
                Bangladesh is working on “Digital Bangladesh” as a national policy. It is including human resource development to build world-class skills in all areas relating to ICT and the English language. There are international tech companies enter Bangladesh or looking at it as a place to outsource IT demands. Therefore the fact that there are not enough domestic opportunities for Bangladeshi IT talents.
cp currently working for recruiting services in the IT fields. 
</Typography>
              </Box>
            </Grid>
          </Grid>
          <Typography variant="h4" marked="center" component="h2" sx={{ mb: 3,mt:3 }}>
          Vission
        </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Box sx={item}>
                <Typography variant="h5" align="flex-start">
                Crack Platoon provides not only offshore developing but also on-demand dispatch and recruiting services. We cover App development, game development, Web service development, System maintenance/Operation, and so on. Try our IT solution to overcome your IT issues.
                </Typography>
              </Box>
            </Grid>
          </Grid>

      </Container>
    </Box>
  );
}

export default Mission;