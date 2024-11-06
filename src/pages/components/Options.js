import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { JobData } from "../../constants";
import backgroundImage from "../../icons/itemdetail_background.webp"; // Adjust the path to your image

const CircularBox = styled(Box)(({ bgImage }) => ({
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "180px",
  height: "180px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  borderRadius: "20%",
  position: "relative",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  textAlign: "center",
  cursor: "pointer",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const CircularText = styled(Typography)({
  padding: "0 10px", // Add padding for better visibility
  whiteSpace: "normal", // Allow text to wrap to the next line
  textAlign: "center", // Center align the text
});

const CircularGrid = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = (id) => {
    // Open the item detail page in a new tab
    const newTab = window.open(`/job/${id}`, "_blank");
    if (newTab) {
      newTab.focus(); // Focus on the new tab
    } else {
      // Handle the case where the new tab could not be opened (e.g., pop-up blocker)
      alert("Please allow popups for this website");
    }
  };

  return (
    <Box
      sx={{
        marginTop: "12px",
        width: "100%",
        margin: "auto",
        padding: 2,
        backgroundColor: "",
        boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
        backgroundImage: `url(${backgroundImage})`, // Set the background image
        backgroundSize: "cover", // Cover the entire box with the image
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent the image from repeating
      }}
    >
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        paddingTop="48px"
        paddingBottom="48px"
        style={{ textAlign: "center" }}
      >
        {Object.keys(JobData).map((key) => {
          const item = JobData[key]; // Access the section object by key
          return (
            <Grid
              item
              xs={12} // For small screens, each item takes full width
              sm={6} // For medium screens, each item takes 6/12 (half width)
              md={3} // For large screens, each item takes 3/12 (1/4 width)
              key={key} // Use the section key as the unique key
              container
              justifyContent="center"
              direction="column" // Ensure the column layout
              alignItems="center" // Align items to center vertically
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* Circular Image Box */}
                <CircularBox
                  bgImage={require(`../../icons/${item.image_link}`)} // Use the image link from the section
                  onClick={() => handleClick(key)} // Handle click by the key
                >
                  {/* <CircularText variant="body" color="grey">
                    {item.title}
                  </CircularText> */}
                  {/* Display the section title */}
                </CircularBox>

                {/* Add heading just below the CircularBox */}
                <h3 style={{ marginTop: "16px", color: "white" }}>
                  {item.title}
                </h3>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CircularGrid;
