import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../atom/Typography";
import Review from "../../assets/Review.png";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  px: 5,
  background: "#F4FFFA",
};

function Testomonial() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", bgcolor: "#F4FFFA", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 5,
          mb: 5,
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
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} lg={6}>
            <Box sx={item}>
                <Typography
                  variant="h6"
                  marked="center"
                  component="h6"
                  sx={{ mt: 2, mb: 2, color: "#004CF9" }}
                >
                  Testomonial
                </Typography>
                <Typography variant="h4" align="flex-start">
                Clients feedback about us.
                </Typography>
                <Typography
                  variant="h5"
                  align="flex-start"
                  sx={{ mt: 2, mb: 2 }}
                >
                  We build apps, web, game development, other maintenance And operation.
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    my: 1,
                    backgroundColor: "#004CF9",
                    color: "white",
                    padding: 1,
                  }}
                >
                  View more{" "}
                  <ArrowCircleRightOutlinedIcon
                    style={{
                      paddingTop: "10px",
                      height: "30px",
                      color: "white",
                    }}
                  />
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
            <Box
                component="img"
                src={Review}
                alt="graph"
                sx={{ height: 300,width:500 }}
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default Testomonial;
