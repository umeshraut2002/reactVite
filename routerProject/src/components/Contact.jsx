import React from "react";

const Contact = () => {
  return (
    <>
      <div className="w-screen min-h-screen p-10 text-white bg-black">
        <div className="flex flex-col items-start justify-between md:flex-row">
          
          <div className="space-y-6 md:w-1/2">
            <h1 className="text-4xl font-bold text-orange-400">Get in Touch</h1>
            <p className="text-lg">
              We'd love to hear from you! Whether you have a question about
              features, pricing, or anything else, our team is ready to answer
              all your questions.
            </p>
            <p className="text-lg">
              Please fill out the form, and we’ll get back to you as soon as
              possible.
            </p>
          </div>

          {/* Right Side Form */}
          <div className="p-8 mt-8 bg-gray-800 rounded-lg shadow-lg md:w-1/2 md:mt-0">
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 text-white bg-gray-900 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-400"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 text-white bg-gray-900 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-400"
                  placeholder="youremail@example.com"
                />
              </div>

              {/* Mobile Number Field */}
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-300"
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  className="w-full px-4 py-2 text-white bg-gray-900 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-400"
                  placeholder="Your Mobile Number"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 font-bold text-white bg-orange-500 rounded-lg hover:bg-orange-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
