import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#141C27",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "8rem", fontWeight: "bold" }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        The page you're looking for doesn't exist.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
        sx={{
          textTransform: "none",
          fontSize: "1rem",
          padding: "10px 20px",
        }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default NotFound;
