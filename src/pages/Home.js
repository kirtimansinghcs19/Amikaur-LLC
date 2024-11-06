import React, { useState, useEffect } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { homeImages } from "../constants"; // Assuming homeImages contains image data
import loaderGif from "../icons/loader_gif.gif";
import SmallContainer from "./components/Heading";
import VisionValues from "./components/values";
import CircularGrid from "./components/Options";
import BottomNavBar from "./components/Bottomnavbar";
import Header from "./components/header";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true); // Initial loading state

  // Handle previous image
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? homeImages.length - 1 : prevIndex - 1
    );
  };

  // Handle next image
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === homeImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Preload all images and check when they are loaded
  useEffect(() => {
    // Preload images and set loading state
    const imagePromises = homeImages.map((imageObj) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imageObj.image; // Assuming imageObj.image contains the image URL

        img.onload = () => resolve(img); // Image loaded successfully
        img.onerror = (error) => reject(error); // Image failed to load
      });
    });

    // Wait for all images to load
    Promise.all(imagePromises)
      .then(() => {
        setLoading(false); // All images loaded
      })
      .catch(() => {
        setLoading(false); // Even if one image fails to load, we'll hide the loader
      });

    // Auto switch images every 5 seconds
    const intervalId = setInterval(() => {
      handleNextImage();
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div style={{ backgroundColor: "#1d2939" }}>
      {/* Global Loader */}
      {loading && (
        <Box
          sx={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999, // Ensure it appears on top of all content
          }}
        >
          <img src={loaderGif} alt="Loading..." />
        </Box>
      )}

      {/* Main Content */}
      {!loading && (
        <>
          <Header />
          <Box
            sx={{
              width: "100%",
              height: "700px",
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
                sx={{
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  lineHeight: 1.5,
                }}
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
          <BottomNavBar />
        </>
      )}
    </div>
  );
};

export default Home;

