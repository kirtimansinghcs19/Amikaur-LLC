import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";

const BottomNavBar = () => {
  const handleMailClick = () => {
    window.open("mailto:Support@amikaur.com", "_blank"); // Replace with your email
  };

  const handleLinkedinClick = () => {
    window.open(
      "https://www.linkedin.com/company/amikaur-llc/posts/?feedView=all",
      "_blank"
    ); // Replace with your LinkedIn link
  };

  const handlePhoneClick = () => {
    window.open("tel:+1234567890", "_blank"); // Replace with your phone number
  };

  return (
    <Box
      sx={{
        height: "100px", // Set height for the BottomNavBar
        backgroundColor: "#141C27", // Adjust opacity if needed
        display: "flex",
        flexDirection: "column",
        padding: 1, // Add padding to prevent content overflow
        boxSizing: "border-box", // Include padding in height calculation
        bottom: 0, // Align it to the bottom
        width: "100%", // Make sure it stretches across the screen width
        left: 0, // Align it with the left edge of the screen
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          padding: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <HomeIcon sx={{ color: "white" }} />
          <Typography
            variant="body2"
            color="white"
            sx={{ marginLeft: 1, fontSize: "0.875rem" }}
          >
            6220 Westpark Dr Houston, TX 77057, USA
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={handleMailClick} sx={{ color: "white" }}>
            <MailIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={handleLinkedinClick} sx={{ color: "white" }}>
            <LinkedInIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={handlePhoneClick} sx={{ color: "white" }}>
            <PhoneIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Typography
        variant="body2"
        color="white"
        sx={{ textAlign: "center", fontSize: "0.80rem" }}
      >
        © Amikaur LLC.
      </Typography>
    </Box>
  );
};

export default BottomNavBar;
