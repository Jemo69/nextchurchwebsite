"use client"
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define base text color and hover/focus color for consistency
  const baseTextColor = "text-secondary-600 font-bold"; // Lighter text for better contrast on dark background
  const hoverFocusTextColor = "hover:text-primary-300 focus:text-primary-300";
  const mobileHoverBgColor = "hover:bg-secondary-700"; // Slightly lighter blue background on hover for mobile

  return (
    // Use a darker secondary background and a lighter text color for contrast
    <nav className="bg-gray-600 text-secondary-100 sticky top-0 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand Name - Ensure text color matches */}
        <Link href="/" className="text-xl font-bold flex flex-row items-center">
          <img
            src="https://18nlg60l9z.ufs.sh/f/XtuuqJbb4M5FERVSOteiVoFqWR1uLZhSajd85x2cCPeDN0QJ"
            alt="logo"
            className="w-10 my-3"
          />
          {/* Use consistent text color */}
          <span className={`p-3 ${baseTextColor} sm:text-md`}>
            RCCG the praise house
          </span>
        </Link>

        {/* Desktop Menu - Apply base and hover colors */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className={`${baseTextColor} ${hoverFocusTextColor}`}>
            Home
          </Link>
          <Link
            href="/about-us"
            className={`${baseTextColor} ${hoverFocusTextColor}`}
          >
            About Us
          </Link>
          <Link
            href="/blog"
            className={`${baseTextColor} ${hoverFocusTextColor}`}
          >
            Blog
          </Link>
          <Link
            href="/contact-us"
            className={`${baseTextColor} ${hoverFocusTextColor}`}
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Button - Use consistent text colors */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            // Use base text color for icon, primary color for focus outline
            className={`${baseTextColor} focus:outline-none ${hoverFocusTextColor}`}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Inherits nav background, apply consistent link styling */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } transition-all duration-300 ease-in-out`}
      >
        {/* Ensure mobile links use consistent colors and hover effects */}
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            onClick={toggleMenu} // Close menu on click
            className={`block px-3 py-2 rounded-md text-base font-medium ${baseTextColor} ${mobileHoverBgColor} ${hoverFocusTextColor}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={toggleMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium ${baseTextColor} ${mobileHoverBgColor} ${hoverFocusTextColor}`}
          >
            About Us
          </Link>
          {/* Assuming Sermons, Events, Give are needed */}
          <Link
            href="/blog"
            onClick={toggleMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium ${baseTextColor} ${mobileHoverBgColor} ${hoverFocusTextColor}`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={toggleMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium ${baseTextColor} ${mobileHoverBgColor} ${hoverFocusTextColor}`}
          >
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
