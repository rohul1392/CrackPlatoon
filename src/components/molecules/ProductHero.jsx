import * as React from 'react';
import ProductHeroLayout from './ProductHeroLayout';

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "../atom/Typography";
import Review from "../../assets/object.png";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";


// const backgroundImage =
//   'https://image.shutterstock.com/image-vector/programming-code-coding-hacker-background-260nw-1714491562.jpg';
import backgroundImage from '../../assets/backgroundImage.png'
const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  px: 5,
};
export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
       <div>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} lg={8}>
            <Box sx={item}>
                <Typography variant="h4" align="flex-start" style={{color:'white'}}>
                We're build global technology service.
                </Typography>
                <Typography
                  variant="h5"
                  align="flex-start"
                  sx={{ mt: 2, mb: 2 }}
                >
                  Crack Platoon provides not only offshore developing but also on-demand dispatch and recruiting services. We cover App development, game development, Web service development, System maintenance/Operation, and so on. Try our IT solution to overcome your IT issues.
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    my: 1,
                    color: "white",
                    padding: 1,
                  }}
                >
                  Our portfolio{" "}
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