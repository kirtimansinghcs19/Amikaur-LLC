import React from "react";
import { Paper, TextField, Button, Typography } from "@mui/material";
import MyForm from "./components/Form";

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row h-[83.5vh] xl:py-40 xl:px-40 bg-[#2e415b]">
      {/* Left Side: Contact Form */}
      {/* <div className="flex-1 flex flex-col justify-center mx-2 mb-5 md:mb-0">
        <MyForm />
      </div> */}

      {/* Right Side: Contact Information */}
      <div className="flex-1 flex flex-col justify-center mx-2">
        <Paper className="p-5 transition-transform transform hover:scale-105 shadow-lg mt-8 mb-8">
          <Typography variant="h6" className="text-xl font-semibold mb-4">
            Get in Touch
          </Typography>
          <div className="flex items-center mb-2">
            <i className="fas fa-phone-alt mr-2 text-lg text-blue-600"></i>
            <Typography variant="body1">(123) 456-7890</Typography>
          </div>
          <div className="flex items-center mb-2">
            <i className="fas fa-envelope mr-2 text-lg text-blue-600"></i>
            <Typography variant="body1">contact@yourdomain.com</Typography>
          </div>
          <div className="flex items-center mb-2">
            <i className="fas fa-map-marker-alt mr-2 text-lg text-blue-600"></i>
            <Typography variant="body1">
              123 Your Street, Your City, ST 12345
            </Typography>
          </div>
          <div className="flex items-center mb-2">
            <i className="fab fa-facebook mr-2 text-lg text-blue-600"></i>
            <Typography variant="body1">Facebook</Typography>
          </div>
          <div className="flex items-center mb-2">
            <i className="fab fa-twitter mr-2 text-lg text-blue-600"></i>
            <Typography variant="body1">Twitter</Typography>
          </div>
          <div className="flex items-center mb-2">
            <i className="fab fa-linkedin mr-2 text-lg text-blue-600"></i>
            <Typography variant="body1">LinkedIn</Typography>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default ContactUs;
