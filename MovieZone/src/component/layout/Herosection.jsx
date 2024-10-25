import React from "react";

const Herosection = () => {
    return(
        <>
        <section className="flex flex-col items-center justify-between w-full p-8 bg-orange-800 lg:flex-row lg:p-16">
          {/* Hero Text */}
          <div className="text-center lg:w-1/2 lg:text-left">
            <h2 className="mb-4 text-5xl font-bold">Discover Amazing Movies</h2>
            <p className="mb-6 text-lg text-gray-200">
              Search for your favorite movies, get detailed info, and add them
              to your personalized list.
            </p>
            <button className="px-6 py-3 text-white transition bg-orange-600 rounded-lg hover:bg-orange-900">
              Get Started
            </button>
          </div>
          {/* Hero Slider (Image) */}
          <div className="mt-8 lg:w-1/2 lg:mt-0">
            <img src="https://images.pexels.com/photos/7991163/pexels-photo-7991163.jpeg?auto=compress&cs=tinysrgb&w=600" />
          </div>
        </section>

        </>
    )
}

export default Herosection;