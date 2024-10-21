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
        borderRadius: "8px", // Optional rounded corners
        backgroundColor: "#fff", // Background color for the container
        border: "none", // Ensuring there is no border
      }}
    >
      {/* Header with multiple colors */}
      <MultiColorHeader>Amikaur LLC PURPOSE</MultiColorHeader>

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
          {" "}
          {/* Normal paragraph size and italic */}
          At Amikaur LLC, we understand that in a competitive staffing
          landscape, it’s essential to stand out. This is why we emphasize our
          unique selling propositions that differentiate us from other staffing
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
