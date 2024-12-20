import React from "react";
import { Paper, Typography } from "@mui/material";
import BottomNavBar from "./components/Bottomnavbar";
import Header from "./components/header";
// import MyForm from "./components/Form";

const ContactUs = () => {
  return (
    <>
      {" "}
      <Header />
      <div className="flex flex-col md:flex-row h-[83.5vh] xl:py-40 xl:px-40 bg-[#1d2939]">
        {/* Left Side: Contact Form */}
        {/* <div className="flex-1 flex flex-col justify-center mx-2 mb-5 md:mb-0">
        <MyForm />
      </div> */}

        {/* Right Side: Contact Information */}
        <div className="flex-1 flex flex-col justify-center mx-2">
          <Paper className="p-5 transition-transform transform shadow-lg mt-8 mb-8">
            <Typography variant="h6" className="text-xl font-semibold mb-4">
              Get in Touch
            </Typography>

            <div className="flex items-center mb-2">
              <i className="fas fa-phone-alt mr-2 text-lg text-blue-600"></i>
              <a
                href="tel:281-339-1295"
                style={{ textDecoration: "none", color: "inherit" }}
                className="hover:border-b-[1px] hover:border-blue-600"
              >
                <Typography
                  variant="body1"
                  className="hover:border-b-[1px] hover:border-blue-600"
                >
                  281-339-1295
                </Typography>
              </a>
            </div>

            <div className="flex items-center mb-2">
              <i className="fas fa-fax mr-2 text-lg text-blue-600"></i>{" "}
              {/* Fax Icon */}
              <a
                href="tel:281-666-2550"
                style={{ textDecoration: "none", color: "inherit" }}
                className="hover:border-b-[1px] hover:border-blue-600"
              >
                <Typography
                  variant="body1"
                  className="hover:border-b-[1px] hover:border-blue-600"
                >
                  281-666-2550-(Fax number)
                </Typography>
              </a>
            </div>

            <div className="flex items-center mb-2">
              <i className="fas fa-envelope mr-2 text-lg text-blue-600"></i>
              <a
                href="mailto:support@amikaur.com"
                style={{ textDecoration: "none", color: "inherit" }}
                className="hover:border-b-[1px] hover:border-blue-600"
              >
                <Typography
                  variant="body1"
                  className="hover:border-b-[1px] hover:border-blue-600"
                >
                  Support@amikaur.com
                </Typography>
              </a>
            </div>

            <div className="flex items-center mb-2">
              <i className="fas fa-envelope mr-2 text-lg text-blue-600"></i>
              <a
                href="mailto:Hr@amikaur.com"
                style={{ textDecoration: "none", color: "inherit" }}
                className="hover:border-b-[1px] hover:border-blue-600"
              >
                <Typography
                  variant="body1"
                  className="hover:border-b-[1px] hover:border-blue-600"
                >
                  Hr@amikaur.com
                </Typography>
              </a>
            </div>

            <div className="flex items-center mb-2">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blue-600"></i>
              <Typography
                variant="body1"
                className="hover:border-b-[1px] hover:border-blue-600"
              >
                6220 Westpark Dr Houston, TX 77057, USA
              </Typography>
            </div>

            <div className="flex items-center mb-2">
              <i className="fab fa-linkedin mr-2 text-lg text-blue-600"></i>
              <Typography
                variant="body1"
                className="hover:border-b-[1px] hover:border-blue-600"
              >
                <a
                  href="https://www.linkedin.com/company/amikaur-llc/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  https://www.linkedin.com/amikaur-llc
                </a>
              </Typography>
            </div>
          </Paper>
        </div>
      </div>
      <BottomNavBar />
    </>
  );
};

export default ContactUs;
