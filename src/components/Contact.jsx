import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "../components/atom/Button";
import Typography from "../components/atom/Typography";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import AddLocationRoundedIcon from "@mui/icons-material/AddLocationRounded";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import FbIcon from "../assets/facebook.png";
import LinkedIcon from "../assets/linkdin.png";
import googlemeet from "../assets/googlemeet.png";
import line from "../assets/line.png";
import skype from "../assets/skype.png";
import slack from "../assets/slack.png";
import whatsapp from "../assets/whatsapp.png";
import zoom from "../assets/zoom.png";
const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  px: 5,
};
const contact = {
  backgroundColor: "#052265",
};

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hxjl3vs",
        "template_gbls9du",
        form.current,
        "CVA97pm3-fv4p33rP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
                <Typography variant="h4" align="flex-start">
                  Contact with us.
                </Typography>
                <Typography
                  variant="h5"
                  align="flex-start"
                  sx={{ mt: 1, mb: 1 }}
                >
                  We are delivering scalable and secure mobile, software.
                </Typography>

                <Typography
                  variant="h5"
                  align="flex-start"
                  sx={{ mt: 3, mb: 1 }}
                >
                  Dirrect contact
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={6} lg={6}>
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                    >
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={contact}>
                            <EmailRoundedIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Email"
                          secondary="info@crackplatoonit.com"
                        />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                    >
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={contact}>
                            <LocalPhoneRoundedIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Phone"
                          secondary="+8801521218772"
                        />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={6} lg={6}>
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                    >
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={contact}>
                            <AddLocationRoundedIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Location"
                          secondary="Plot :29 Road:10 South Bari-Dhara Rampura Dhaka 1212"
                        />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                    >
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={contact}>
                            <WifiCalling3Icon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Skype" secondary="CracPlatoon" />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={12} lg={12}>
                    <Stack direction="row" spacing={2}>
                      <Link href="https://www.facebook.com/crack.platoon.2022/">
                        <Avatar alt="Facebook" src={FbIcon} />
                      </Link>
                      <Link href="https://www.facebook.com/crack.platoon.2022/">
                        <Avatar alt="Linkedin" src={LinkedIcon} />
                      </Link>
                    </Stack>
                  </Grid>
                </Grid>
                <Typography
                  variant="h5"
                  align="flex-start"
                  sx={{ mt: 5, mb: 1 }}
                >
                  24 Hour online
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={12} lg={12}>
                    <Stack direction="row" spacing={2}>
                      <Avatar alt="Facebook" src={googlemeet} />
                      <Avatar alt="Linkedin" src={line} />
                      <Avatar alt="Facebook" src={skype} />
                      <Avatar alt="Linkedin" src={whatsapp} />
                      <Avatar alt="Facebook" src={zoom} />
                      <Avatar alt="Linkedin" src={slack} />
                    </Stack>
                  </Grid>
                </Grid>
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
                <Box noValidate sx={{ mt: 2 }}>
                  <Typography variant="h4" align="flex-start">
                    How can we help you?
                  </Typography>
                  <Typography
                    variant="h5"
                    align="flex-start"
                    sx={{ mt: 2, mb: 1 }}
                  >
                    Fill out the form and we will be in touch shortly.
                  </Typography>

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
                  </form>
                  {/* </Link> */}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default Contact;
