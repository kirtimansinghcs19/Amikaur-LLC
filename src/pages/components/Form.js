import React, { useState } from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";

const FormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(4),
  borderRadius: "8px",
  backgroundColor: "#fff",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  marginTop: theme.spacing(8), // Add top margin to center vertically
}));

const FormTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: "bold",
}));

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Use the Google Apps Script Web App URL here
    const WEB_APP_URL =
      "https://script.google.com/macros/s/AKfycbz3uQHZEz5DhxpgxjqlzOllVc57YfQj06jhluJpFQBUQooudIFJSKGdTWLlP4_1PkO_Mg/exec";

    console.log(formData);
    try {
      const response = await fetch(WEB_APP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Container maxWidth="sm">
      <FormContainer>
        <FormTitle variant="h5">User Information</FormTitle>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Mobile"
            name="mobile"
            type="tel"
            variant="outlined"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Role Number"
            name="roleNumber"
            variant="outlined"
            value={formData.roleNumber}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
            onSubmit={handleSubmit}
          >
            Submit
          </Button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default MyForm;
