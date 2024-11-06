import React, { useEffect, useState } from "react";
import aboutBg from "../icons/about_page.webp"; // Assuming you are using this image
import BottomNavBar from "./components/Bottomnavbar";
import Header from "./components/header";
import loaderGif from "../icons/loader_gif.gif"; // Loader gif
import SmallContainer from "./components/Heading";
import VisionValues from "./components/values";
import CircularGrid from "./components/Options";

const About = () => {
  const [loading, setLoading] = useState(true); // Initial loading state

  // Preload the background image and check if it's loaded
  useEffect(() => {
    const img = new Image();
    img.src = aboutBg; // Image source

    img.onload = () => {
      setLoading(false); // Image loaded, set loading to false
    };

    img.onerror = (error) => {
      setLoading(false); // If image fails to load, still hide loader
    };
  }, []); // Empty array ensures this effect runs once on mount

  return (
    <div style={{ backgroundColor: "#1d2939" }}>
      {/* Global Loader */}
      {loading && (
        <div
          style={{
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
        </div>
      )}

      {/* Main Content */}
      {!loading && (
        <>
          <Header />
          <section className="about-section bg-black bg-cover bg-center py-12 xl:h-[805px] flex items-start relative">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage: `url(${aboutBg})`,
              }}
            ></div>

            {/* Overlay for darker background */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="container mx-auto relative flex justify-center px-6 text-white">
              {/* Text Section */}
              <div className="w-full md:w-2/3 flex flex-col items-center text-center md:text-left z-10">
                <h2 className="text-4xl font-bold mb-6">About Us</h2>
                <p className="text-lg mb-4">
                  Our Company is not just another staffing agency, we are a
                  dedicated team of professionals passionate about connecting
                  the right talent with the right opportunities. Founded on the
                  principles of integrity and commitment, our company has grown
                  from a small operation into a leader in the staffing industry
                  in Houston. Our mission is clear: to provide innovative
                  staffing solutions that empower businesses and candidates
                  alike. Our team is comprised of industry experts who bring
                  years of experience and a deep understanding of the job
                  market. We are also deeply committed to our community,
                  actively engaging in initiatives that promote growth and
                  development. By choosing Amikaur LLC, you’re not just getting
                  a staffing partner; you’re choosing a company that values
                  relationships and strives to make a positive impact in every
                  engagement.
                </p>
                <p className="text-lg">
                  Join us on this exciting journey to create meaningful
                  experiences that enhance the lives of our customers around the
                  globe.
                </p>
              </div>
            </div>
          </section>
          <BottomNavBar />
        </>
      )}
    </div>
  );
};

export default About;
