import React from "react";
import { Box, Typography } from "@mui/material";

const VisionValues = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: 2,
        marginTop: "16px",
        paddingLeft: { xs: 0, md: "120px" }, // Adjust padding for smaller screens
        paddingRight: { xs: 0, md: "120px" },
        paddingBottom: "48px",
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stack vertically on small screens
        gap: 2, // Space between containers
      }}
    >
      {/* First Container */}
      <Box
        sx={{
          width: { xs: "100%", md: "48%" }, // Full width on small screens
          boxShadow: 1,
          display: "flex",
          backgroundColor: "#fff",
          flexDirection: "column",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "rotateY(5deg) rotateX(5deg)",
          },
        }}
      >
        <Box
          sx={{
            height: "50px",
            backgroundColor: "#1d2939",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingLeft: 2,
            color: "white",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          Our Vision
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
            padding: 2,
          }}
        >
          <Typography variant="">
            Our vision at Amikaur LLC is to be recognized as the leading HR
            services agency in Houston, known for our innovative approaches and
            unwavering dedication to excellence. We aspire to create a HR
            services ecosystem where businesses can thrive through the right
            talent and where job seekers find fulfilling careers that align with
            their skills and aspirations. In the coming years, we aim to expand
            our reach into new industries, enhance our technological
            capabilities to streamline recruitment processes, and further our
            involvement in community initiatives. Our commitment is to build
            successful partnerships that drive growth for both clients and
            candidates, ultimately shaping the future of the workforce.
          </Typography>
        </Box>
      </Box>

      {/* Second Container */}
      <Box
        sx={{
          width: { xs: "100%", md: "48%" }, // Full width on small screens
          display: "flex",
          boxShadow: 1,
          flexDirection: "column",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "rotateY(-5deg) rotateX(-5deg)",
          },
        }}
      >
        <Box
          sx={{
            height: "50px",
            backgroundColor: "#1d2939",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingLeft: 2,
            color: "white",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          Our Values
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
            padding: 2,
          }}
        >
          <Typography variant="">
            At the core of Amikaur LLC are our values, which guide our
            operations and interactions with clients and candidates alike.
            Integrity is paramount; we believe in conducting our business with
            honesty and transparency, fostering trust in every relationship we
            build. Our commitment extends beyond simply filling positions; we
            strive to understand the unique needs of our clients and candidates,
            delivering personalized service that ensures successful outcomes.
            Excellence is a hallmark of our agency; we continually seek ways to
            improve our services and processes, emphasizing continuous training
            and adaptation to industry trends. Additionally, we value
            collaboration, recognizing that teamwork—both within our agency and
            in our partnerships—leads to the best results. Together, these
            values form the foundation of our approach, driving us to achieve
            exceptional results for all those we serve.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default VisionValues;
