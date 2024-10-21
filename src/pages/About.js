import React from "react";

const About = () => {
  return (
    <section className="about-section bg-gray-100 py-12 xl:h-[805px] flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-6">
        {/* Image Section */}
        {/* <div className="w-full md:w-1/2 flex justify-center"> */}
        <img
          src="https://civicminds.com/wp-content/uploads/2017/01/glaxy-next-dimension-1500x630.jpg" // Replace with your image URL
          alt="About Us"
          className="rounded-lg shadow-lg w-full max-w-[500px]"
        />
        {/* </div> */}

        {/* Text Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10 flex flex-col items-center text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-lg text-gray-600 mb-4">
            Our Company is not just another staffing agency; we are a dedicated
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
          <p className="text-lg text-gray-600">
            Join us on this exciting journey to create meaningful experiences
            that enhance the lives of our customers around the globe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
