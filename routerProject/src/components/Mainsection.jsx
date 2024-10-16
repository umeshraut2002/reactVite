import React from "react";

const Mainsection = () => {
  return (
    <div className="w-screen text-white bg-black">
      <section className="flex flex-col items-center p-10 space-y-6">
        <img
          src="secondary-image.png"
          alt="Secondary"
          className="w-full max-w-4xl rounded-lg shadow-lg"
        />
        <h2 className="text-3xl font-bold text-orange-400">
          Seamless Integration
        </h2>
        <p className="max-w-2xl text-lg text-center md:text-left">
          Experience unmatched integration with various technologies and
          services.
        </p>
      </section>
    </div>
  );
};

export default Mainsection;
