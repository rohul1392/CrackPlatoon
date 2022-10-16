import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../../atom/Typography";

function AboudUsContract() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", bgcolor: "#ffffff", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            top: -180,
            opacity: 0.7,
          }}
        />
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Typography variant="h4" align="center">
                As a core mobile app development enterprise, we will enable you
                to realise your mobile app ideas in the shape of feature-rich
                user experiences. We provide bespoke mobile app development
                services for both iOS and Android platforms irrespective of
                device type phone or tablet.
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography
                variant="h4"
                align="center"
                sx={{
                  my: 1,
                  padding: 1,
                  mt: 1,
                  mb: 1,
                  background: "#ffffff",
                }}
              >
                We have the perfect blend of <span style={{color:'#004CF9'}}>design expertise, technical skill
                set, and business</span> domain knowledge required to deliver highly
                sophisticated yet user-centric mobile apps.{" "}
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default AboudUsContract;
