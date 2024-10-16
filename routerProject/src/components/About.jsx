import React from "react";

const About = () => {
  return (
    <>
      <div className="w-screen min-h-screen p-10 text-white bg-black">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:w-1/2 md:mb-0">
            <img
              src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6 md:w-1/2">
            <h1 className="text-4xl italic font-bold text-orange-400">About Us</h1>
            <p className="text-lg">
              We are dedicated to creating modern, user-friendly solutions for
              developers around the world. Our goal is to empower you with tools
              that make your development process faster, smoother, and more
              efficient.
            </p>
            <p className="text-lg">
              With years of experience in the tech industry, we bring top-notch
              UI components that seamlessly integrate into any project, ensuring
              a great user experience and satisfaction.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;