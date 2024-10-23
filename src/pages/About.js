import React from "react";
import aboutBg from "../icons/about_page.webp";

const About = () => {
  return (
    <section className="about-section bg-black bg-cover bg-center py-12 xl:h-[805px] flex items-start relative">
      {" "}
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${aboutBg})`,
        }}
      ></div>
      {/* Overlay for darker background if needed */}
      {/* Overlay for darker background if needed */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto relative flex justify-center px-6 text-white">
        {/* Text Section */}
        <div className="w-full md:w-2/3 flex flex-col items-center text-center md:text-left z-10">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg mb-4">
            Our Company is not just another staffing agency, we are a dedicated
            team of professionals passionate about connecting the right talent
            with the right opportunities. Founded on the principles of integrity
            and commitment, our company has grown from a small operation into a
            leader in the staffing industry in Houston. Our mission is clear: to
            provide innovative staffing solutions that empower businesses and
            candidates alike. Our team is comprised of industry experts who
            bring years of experience and a deep understanding of the job
            market. We are also deeply committed to our community, actively
            engaging in initiatives that promote growth and development. By
            choosing Amikaur LLC, you’re not just getting a staffing partner;
            you’re choosing a company that values relationships and strives to
            make a positive impact in every engagement.
          </p>
          <p className="text-lg">
            Join us on this exciting journey to create meaningful experiences
            that enhance the lives of our customers around the globe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
