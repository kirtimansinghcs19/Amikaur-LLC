import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Avatar,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import logo from "../../icons/company_logo_wothout_text.jpg"; // Import your logo here

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
      sx={{
        width: 250,
        backgroundColor: "#1a1a1a", // Dark background for drawer
        height: "100%",
        color: "#fff", // White text color
        transition: "all 0.3s ease", // Smooth transition effect for drawer
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          { text: "Home", icon: <HomeIcon /> },
          { text: "About", icon: <InfoIcon /> },
          { text: "Contact", icon: <ContactMailIcon /> },
        ].map((item) => (
          <ListItem
            button
            key={item.text}
            sx={{
              "&:hover": {
                backgroundColor: "#333", // Darker background on hover
                transform: "scale(1.05)", // Scale effect on hover
                transition: "transform 0.3s ease", // Smooth hover effect
              },
              transition: "transform 0.2s ease", // Smooth animation
            }}
          >
            <ListItemIcon sx={{ color: "#fff" }}>
              {" "}
              {/* Keep icon color white */}
              {item.icon}
            </ListItemIcon>
            <ListItemText>
              <Link
                to={item.text === "Home" ? "/" : `/${item.text.toLowerCase()}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  transition: "color 0.3s ease", // Add smooth color transition
                }}
              >
                {item.text}
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
          height: "90px",
          boxShadow: "none",
          padding: 0,
          margin: 0,
          backgroundColor: "#141C27",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center", // Vertically center the content
            height: "100%", // Ensure the toolbar takes full height
          }}
        >
          {/* Replace the company name with the logo */}
          <Link
            to="/"
            style={{
              paddingTop: "6px",
              textDecoration: "none",
              display: "flex",
            }}
          >
            <Avatar
              src={logo} // Use your logo here
              alt="Company Logo"
              style={{ width: "120px", height: "80px" }} // Adjust the height as needed
            />
          </Link>

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
            <Box
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              <Button
                color="inherit"
                component={Link}
                to="/"
                sx={{
                  fontSize: "1rem",
                  position: "relative",
                  transition: "all 0.3s ease", // Smooth transform and color transition
                  "&:hover": {
                    transform: "scale(1.1)", // Scale effect on hover
                  },
                }}
              >
                Home
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/about"
                sx={{
                  fontSize: "1rem",
                  position: "relative",
                  transition: "all 0.3s ease", // Smooth transform and color transition
                  "&:hover": {
                    transform: "scale(1.1)", // Scale effect on hover
                  },
                }}
              >
                About
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/contact"
                sx={{
                  fontSize: "1rem",
                  position: "relative",
                  transition: "all 0.3s ease", // Smooth transform and color transition
                  "&:hover": {
                    transform: "scale(1.1)", // Scale effect on hover
                  },
                }}
              >
                Contact
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile view */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#1a1a1a", // Dark mode background for the drawer
            color: "#fff", // Text color in the drawer
          },
        }}
      >
        {list}
      </Drawer>
    </>
  );
};

export default Header;
