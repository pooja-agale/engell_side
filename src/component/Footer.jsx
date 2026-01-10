import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#4B2E83] text-white w-full">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Left Logo Section */}
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded">
              <img src="/logo.png" alt="ENGELL Logo" className="h-6 w-20"/>
            </div>
            <div className="text-sm">
              <p className="font-semibold">ENGELL</p>
              <p className="text-gray-200 text-xs">
                German and Japanese Language Institute
              </p>
            </div>
          </div>

          {/* Middle Navigation */}
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-gray-300">About</a>
            <a href="#" className="hover:text-gray-300">German</a>
            <a href="#" className="hover:text-gray-300">Japanese</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </div>

          {/* Right Copyright */}
          <div className="text-xs text-gray-300 text-center md:text-right">
            © 2003 - 2026 ENGELL. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
