import * as React from "react";
import ProductHeroLayout from "./ProductHeroLayout";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "../atom/Typography";

import backgroundImage from "../../assets/backgroundImage.png";
const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  px: 2,
};
export default function ProductHeroAbout() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      <div>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} lg={12}>
            <Box sx={item}>
              <Typography
                variant="h4"
                align="flex-start"
                style={{ color: "white" }}
              >
                Let us help you Accelerate Your Dream
              </Typography>
              <Typography variant="h5" align="flex-start" sx={{ mt: 1, mb: 1 }}>
                CP decided to provide offshore development service, on-demand
                dispatch service, and the recruiting service for non-Bangladesh
                companies facing IT issues and support Bangladeshi IT talents to
                find new opportunities to be active with their skills.{" "}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
    </ProductHeroLayout>
  );
}
