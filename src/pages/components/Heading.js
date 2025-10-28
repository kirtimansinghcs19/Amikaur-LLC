import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Styled header with multiple colors
const MultiColorHeader = styled(Typography)(({ theme }) => ({
  background: "linear-gradient(90deg, #ff6f61, #6fa3ef, #f7a7a2)", // Gradient background
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize: "48px",
  fontWeight: "bold",
  fontStyle: "italic",
  textAlign: "center",
  padding: "10px 0", // Padding for the header
}));

const SmallContainer = () => {
  return (
    <Box
      sx={{
        width: "100%", // Full width
        maxWidth: "1050px", // Maximum width for the container
        margin: "0 auto", // Center the container
        padding: 2,
        marginTop: "40px",
        borderRadius: "8px", // Optional rounded corners
        backgroundColor: "white", // Background color for the container
        border: "2px solid #1d2939", // Dark border color (adjust as needed)
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Optional shadow for depth
      }}
    >
      {/* Header with multiple colors */}
      <Typography
        style={{
          color: "#092E20",
          fontSize: "48px",
          fontWeight: "bold",
          fontStyle: "italic",
          textAlign: "center",
          padding: "10px 0",
        }}
      >
        Amikaur LLC PURPOSE
      </Typography>

      {/* Body content */}
      <Box
        sx={{
          padding: 2, // Padding for body
          textAlign: "center", // Center align body text
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: "16px", fontStyle: "italic" }}
        >
          At Amikaur LLC, we understand that in a competitive HR services
          landscape, it’s essential to stand out. This is why we emphasize our
          unique selling propositions that differentiate us from other HR services
          agencies. Our team brings a wealth of industry expertise, having
          worked across various sectors, allowing us to grasp the specific
          challenges and requirements of each field. We believe in personalized
          service; we take the time to understand the needs of both our clients
          and candidates, ensuring that we make the best possible match. Our
          commitment to excellence is unwavering; we consistently strive for the
          highest standards in our recruitment processes and client
          interactions. With a proven track record of successful placements and
          high client satisfaction, you can trust us to deliver exceptional
          results.
        </Typography>
      </Box>
    </Box>
  );
};

export default SmallContainer;
