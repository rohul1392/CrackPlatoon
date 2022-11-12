import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../assets/top_logo.png";
import Link from "@mui/material/Link";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const ResponsiveAppBar = () => {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
        <Link
            href="/"
          >
          <Box component="img" src={Logo} alt="graph" sx={{ height: 40 }} />
          </Link>
        </Typography>
        <nav>
          <Link
            href="/service"
            variant="button"
            color="text.primary"
            sx={{ my: 1, mx: 1.5, textDecoration: "none" }}
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            variant="button"
            color="text.primary"
            sx={{ my: 1, mx: 1.5, textDecoration: "none" }}
          >
            Contact
          </Link>
          <Link
            href="/about"
            variant="button"
            color="text.primary"
            sx={{ my: 1, mx: 1.5, textDecoration: "none" }}
          >
            About us
          </Link>

        </nav>
        <Button
          href="#"
          variant="outlined"
          sx={{ backgroundColor: "blue", color: "white" }}
        >
          Lets Talk
          <ArrowCircleRightOutlinedIcon
            style={{
              paddingLeft: "5px",
              height: "30px",
              color: "white",
            }}
          />
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;
