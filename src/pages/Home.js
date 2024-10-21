import React, { useEffect, useState } from "react";
import { Box, IconButton, Breadcrumbs, Typography, Paper } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircularGrid from "./components/Options";
import BottomNavBar from "./components/Bottomnavbar";
import SmallContainer from "./components/Heading";
import { homeImages } from "../constants";
import VisionValues from "./components/values";

const Home = () => {
  // Sample images

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? homeImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === homeImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextImage();
    }, 5000); // 5000ms = 5 seconds

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "500px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${homeImages[currentImageIndex].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Centered Content */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Slightly darker background for better contrast
            padding: { xs: "10px", md: "20px" },
            borderRadius: "8px",
            color: "white",
            textAlign: "center",
            maxWidth: { xs: "90%", sm: "80%", md: "600px" }, // Responsive width
            overflowY: "auto", // Allow vertical scrolling if necessary
            maxHeight: "70%", // Limit height for better usability
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
          >
            Welcome to Amikaur
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: "0.875rem", md: "1rem" }, lineHeight: 1.5 }}
          >
            {homeImages[currentImageIndex].body}
          </Typography>
        </Box>

        {/* Previous Button */}
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            left: "16px",
            transform: "translateY(-50%)",
            color: "white",
            zIndex: 2,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
          }}
          onClick={handlePrevImage}
        >
          <ArrowBackIosIcon />
        </IconButton>

        {/* Next Button */}
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            right: "16px",
            transform: "translateY(-50%)",
            color: "white",
            zIndex: 2,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
          }}
          onClick={handleNextImage}
        >
          <ArrowForwardIosIcon />
        </IconButton>

        {/* Circular Dots as Breadcrumbs */}
        <Box
          sx={{
            position: "absolute",
            bottom: "16px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2,
          }}
        >
          {homeImages.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              sx={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor:
                  currentImageIndex === index
                    ? "white"
                    : "rgba(255, 255, 255, 0.5)",
                margin: "0 6px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            />
          ))}
        </Box>
      </Box>

      <SmallContainer />
      <VisionValues />
      <CircularGrid />
    </div>
  );
};

export default Home;
