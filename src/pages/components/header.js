import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Home", "About", "Contact"].map((text) => (
          <ListItem button key={text}>
            <ListItemText>
              <Link
                to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {text}
              </Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{
          boxShadow: "none",
          padding: 0,
          margin: 0,
          backgroundColor: "#1d2939",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component={Link} // Make the Typography a Link
            to="/" // Redirect to home
            sx={{ fontSize: "1.25rem", color: "white", textDecoration: "none" }}
          >
            Amikaur LLC
          </Typography>

          {isMobile ? (
            // Show Menu Icon on Mobile
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            // Show buttons on larger screens
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                color="inherit"
                component={Link}
                to="/"
                sx={{ fontSize: "1rem" }}
              >
                Home
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/about"
                sx={{ fontSize: "1rem" }}
              >
                About
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/contact"
                sx={{ fontSize: "1rem" }}
              >
                Contact
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile view */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </>
  );
};

export default Header;
