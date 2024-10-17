import React from 'react';

const Login= () => {
  return (
    <div className="flex items-center justify-center w-screen min-h-screen p-10 text-white bg-black">
      
      {/* Login Form Container */}
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        
        {/* Heading */}
        <h1 className="mb-6 text-3xl font-bold text-center text-orange-400">Login</h1>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 text-white bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-3 text-white bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter your password"
          />
        </div>

        {/* Login Button */}
        <button className="w-full p-3 font-bold text-black bg-orange-400 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600">
          Login
        </button>
        
        {/* Bottom Links */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Don't have an account? 
            <a href="/signup" className="ml-1 text-orange-400 hover:text-orange-500">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
