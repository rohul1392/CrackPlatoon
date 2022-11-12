import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "../atom/Button";
import Typography from "../atom/Typography";
import TextField from "@mui/material/TextField";
const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  px: 5,
};

function ContactAbout() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hxjl3vs', 'template_gbls9du', form.current, 'CVA97pm3-fv4p33rP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Box
      component="section"
      sx={{ display: "flex", bgcolor: "white", overflow: "hidden" }}
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
            <Grid item xs={12} md={7} lg={7}>
              <Box sx={item}>
                <Typography
                  variant="h6"
                  marked="center"
                  component="h6"
                  sx={{ mt: 3, mb: 3 }}
                >
                  Outsourcing has never been easier
                </Typography>
                <Typography variant="h4" align="flex-start" >
                Are you looking for Most dedicated software developers?
                </Typography>
                <Typography
                  variant="h5"
                  align="flex-start"
                  sx={{ mt: 3, mb: 3 }}
                >
                  Are you having a hard time finding the skill you need at the right price and at the right time? Let us help you to fulfill your dreams!!!
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} lg={5}>
              <Box
                sx={{
                  marginTop: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box noValidate sx={{ mt: 3 }}>
                <form ref={form} onSubmit={sendEmail}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="given-name"
                        name="user_name"
                        required
                        fullWidth
                        id="firstName"
                        label="Name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="user_email"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="outlined-multiline-static"
                        label="Message"
                        name="message"
                        multiline
                        rows={3}
                        defaultValue=""
                      />
                    </Grid>
                  </Grid>
                  {/* <Link
                    href="https://www.linkedin.com/company/crack-platoon/"
                    title="Creative Commons BY 3.0"
                    target="_blank"
                    rel="noopener noreferrer"
                  > */}
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Send
                    </Button>
                  {/* </Link> */}
                  </form>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default ContactAbout;
