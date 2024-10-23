import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { JobData } from "../constants";

const ItemDetail = () => {
  const { id } = useParams(); // Get the URL parameter
  const navigate = useNavigate();

  // Simulate checking if the ID is valid (replace with your actual validation logic)
  const isValidId = (id) => {
    // For example, if ID must be numeric or within a specific range
    return id in JobData;
  };

  useEffect(() => {
    console.log(isValidId(id));
    if (!isValidId(id)) {
      // Redirect to NotFound page if the ID is invalid
      navigate("/not-found", { replace: true });
    }
  }, [id, navigate]);

  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    const loadImage = async () => {
      try {
        const image = await import(`../icons/${JobData[id].image_link}`);
        setImageSrc(image.default); // Use image.default for dynamic imports
        setLoading(false); // Set loading to false once the image is loaded
      } catch (error) {
        console.error("Error loading image:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };
    loadImage();
  }, [id]); // Empty dependency array to run once on mount

  return (
    <>
      {id in JobData && (
        <Box
          sx={{
            width: "100%",
            overflowX: "hidden",
            backgroundColor: "#1d2939",
            color: "white",
          }}
        >
          {/* Full width image with fixed height */}
          {!loading ? (
            <Box
              component="img"
              src={imageSrc} // Replace with your image URL
              alt="Item Image"
              sx={{
                width: "100%", // Full width of the screen
                height: { xs: "300px", md: "500px" }, // Fixed height for different screen sizes
                objectFit: "initial", // Ensures the image covers the whole area
                display: "block",
              }}
            />
          ) : (
            <CircularProgress />
          )}

          {/* Item Heading */}
          <Container sx={{ textAlign: "left", marginTop: 4, marginLeft: 0 }}>
            <Typography
              variant="h5" // Reduced from h3 to h5 for a smaller heading
              component="h1"
              gutterBottom
            >
              {JobData[id].title ?? ""}
            </Typography>
          </Container>

          {/* Description Section */}
          <Container
            sx={{
              textAlign: "left",
              paddingBottom: 4,
              marginLeft: 0,
            }}
          >
            <Typography
              variant="body2" // Reduced from body1 to body2 for a smaller description
              sx={{ fontSize: "1rem" }} // Further control over font size if needed
            >
              {JobData[id].body ?? ""}
            </Typography>
          </Container>
          <Container sx={{ marginTop: 4, marginBottom: "60px" }}>
            <ul className="grid grid-cols-3 gap-4 md:grid-cols-3 sm:grid-cols-1">
              {JobData[id] &&
                JobData[id].points.map((point, index) => (
                  <li key={index} className="flex items-center">
                    <span className="h-2 w-2 bg-white rounded-full mr-2"></span>
                    {point}
                  </li>
                ))}
            </ul>
          </Container>
        </Box>
      )}
    </>
  );
};

export default ItemDetail;
