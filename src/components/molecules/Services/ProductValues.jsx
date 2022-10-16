import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../../atom/Typography";

import appdevelopment from "../../../assets/appdevelopment.png";
import GameDevelopment from "../../../assets/GameDevelopment.png";
import webdevelopment from "../../../assets/webdevelopment.png";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "#ffffff" }}
    >
      <Container
        sx={{
          mt: 5,
          mb: 5,
          display: "flex",
          position: "relative",
          flexDirection: "column",
        }}
      >
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} lg={4}>
              <Box
                sx={item}
                style={{
                  backgroundColor: "#F4FAFF",
                  margin: "4px",
                  padding: "10px",
                }}
              >
                <Box
                  component="img"
                  src={appdevelopment}
                  alt="suitcase"
                  sx={{ height: 55 }}
                />
                <Typography variant="h6" sx={{ my: 5 }}>
                  iOS app development
                </Typography>
                <Typography variant="h5">
                  {
                    "We help clients develop innovative iOS apps using languages like Objective-C and Swift that work on iPhones."
                  }
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Box
                sx={item}
                style={{
                  backgroundColor: "#FFFFF4",
                  margin: "4px",
                  padding: "10px",
                }}
              >
                <Box
                  component="img"
                  src={GameDevelopment}
                  alt="graph"
                  sx={{ height: 55 }}
                />
                <Typography variant="h6" sx={{ my: 5 }}>
                  Android app development
                </Typography>
                <Typography variant="h5">
                  {
                    "We help clients develop innovative iOS apps using languages like Objective-C and Swift that work on iPhones."
                  }
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Box
                sx={item}
                style={{
                  backgroundColor: "#F4FFFA",
                  margin: "4px",
                  padding: "10px",
                }}
              >
                <Box
                  component="img"
                  src={webdevelopment}
                  alt="clock"
                  sx={{ height: 55 }}
                />
                <Typography variant="h6" sx={{ my: 5 }}>
                  Web app development
                </Typography>
                <Typography variant="h5">
                  {
                    "We help clients develop innovative iOS apps using languages like Objective-C and Swift that work on iPhones."
                  }
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
