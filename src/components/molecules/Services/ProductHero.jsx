import * as React from "react";
import ProductHeroLayout from "../ProductHeroLayout";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "../../atom/Typography";
import Review from "../../../assets/Service.png";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import Link from "@mui/material/Link";

// const backgroundImage =
//   'https://image.shutterstock.com/image-vector/programming-code-coding-hacker-background-260nw-1714491562.jpg';

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  px: 3,
};
export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        bgcolor: "#FAFAFA", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      <div>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={8}>
            <Box sx={item}>
              <Typography
                variant="h4"
                align="flex-start"
                style={{ color: "white" }}
              >
                We design and build IOS, android and web app products bringing
                new innovation to business and life.
              </Typography>
              <Link href="/contact">
                <Typography
                  variant="h5"
                  sx={{
                    my: 1,
                    color: "white",
                    padding: 1,
                  }}
                  style={{ textDecoration: "none" }}
                >
                  Contact us{" "}
                  <ArrowCircleRightOutlinedIcon
                    style={{
                      paddingTop: "10px",
                      height: "30px",
                      color: "white",
                    }}
                  />
                </Typography>
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Box
              component="img"
              src={Review}
              alt="graph"
              sx={{ height: 300 }}
            />
          </Grid>
        </Grid>
      </div>
    </ProductHeroLayout>
  );
}
