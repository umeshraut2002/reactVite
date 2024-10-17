import React from "react";

const Footer = () => {
  return (
    <div className="w-screen pb-0 mb-0 text-white bg-black">
      <footer className="p-10 text-gray-400 bg-gray-900">
        <div className="flex items-center justify-between">
          <img src="logo.png" alt="Footer Logo" className="h-10" />
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">
              Home
            </a>
            <a href="#" className="hover:text-white">
              GitHub
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <div className="space-y-2 text-sm">
            <h3 className="font-bold">Resources</h3>
            <a href="#" className="hover:text-white">
              Documentation
            </a>
            <a href="#" className="hover:text-white">
              API Reference
            </a>
          </div>
          <div className="space-y-2 text-sm">
            <h3 className="font-bold">Follow Us</h3>
            <a href="#" className="hover:text-white">
              Twitter
            </a>
            <a href="#" className="hover:text-white">
              LinkedIn
            </a>
          </div>
          <div className="space-y-2 text-sm">
            <h3 className="font-bold">Legal</h3>
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default Footer;