import React from "react";
import { Paper, Typography } from "@mui/material";
// import MyForm from "./components/Form";

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row h-[83.5vh] xl:py-40 xl:px-40 bg-[#1d2939]">
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
            <a
              href="tel:+11234567890"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography variant="body1">(123) 456-7890</Typography>
            </a>
          </div>
          <div className="flex items-center mb-2">
            <i className="fas fa-envelope mr-2 text-lg text-blue-600"></i>
            <a
              href="mailto:support@amikaur.com"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography variant="body1">Support@amikaur.com</Typography>
            </a>
          </div>
          <div className="flex items-center mb-2">
            <i className="fas fa-map-marker-alt mr-2 text-lg text-blue-600"></i>
            <Typography variant="body1">
              6220 Westpark Dr Houston, TX 77057, USA
            </Typography>
          </div>
          <div className="flex items-center mb-2">
            <i className="fab fa-linkedin mr-2 text-lg text-blue-600"></i>
            <Typography variant="body1">
              <a
                href="https://www.linkedin.com/company/amikaur-llc/posts/?feedView=all"
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // Recommended for security reasons
                style={{ textDecoration: "none", color: "inherit" }} // Styling if needed
              >
                https://www.linkedin.com/amikaur-llc
              </a>
            </Typography>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default ContactUs;
