import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../atom/Typography';

function AboudUs() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: '#c9c9c9', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 3,
          mb: 3,
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
        <Typography variant="h4" component="h2" sx={{ mb: 3,alignItems:'start' }}>
        About CP
        </Typography>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <Typography variant="h5" align="center">
                Bangladesh is working on “Digital Bangladesh” as a national policy. It is including human resource development to build world-class skills in all areas relating to ICT and the English language. There are international tech companies enter Bangladesh or looking at it as a place to outsource IT demands. Therefore the fact that there are not enough domestic opportunities for Bangladeshi IT talents.
cp currently working for recruiting services in the IT fields. cp decided to provide offshore development service, on-demand dispatch service, and the recruiting service for non-Bangladesh companies facing IT issues and support Bangladeshi IT talents to find new opportunities to be active with their skills.
                </Typography>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default AboudUs;