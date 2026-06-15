import React from "react";
import { FiMail } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-[#8A8A8A] py-16 px-6 md:px-12 lg:px-24 font-sans relative overflow-hidden mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative z-10 border-b border-[[#8A8A8A] pb-5">
        <div>
          <h3 className="text-white font-medium text-lg mb-5">Sell a home</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Request a callback
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Review
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Office visit
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-medium text-lg mb-5">About</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Buy properties
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Rent properties
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Our Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-6">
          <div>
            <h3 className="text-white font-medium text-base mb-3">
              Contact Us
            </h3>
            <p className="text-sm">+971 501-145-170</p>
            <p className="text-sm mt-1">+971 516-185-859</p>
          </div>

          <div>
            <h4 className="text-white font-medium text-sm mb-3">Follow us:</h4>
            <div className="flex items-center space-x-4 text-white">
              <a
                href="#"
                className="hover:opacity-80 transition-opacity aria-label='Facebook'"
              >
                <FaFacebookF className="text-base" />
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity aria-label='Instagram'"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity aria-label='LinkedIn'"
              >
                <FaLinkedinIn className="text-lg" />
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity aria-label='X (formerly Twitter)'"
              >
                <FaXTwitter className="text-base" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium text-sm mb-2">Locations</h4>
            <p className="text-sm leading-relaxed max-w-50">
              Street 1234, no Rd. Dubai, UAE
            </p>
          </div>
        </div>
        <div className="flex justify-start lg:justify-end items-start pt-2">
          <a
            href="mailto:hello@realco.com"
            className="flex items-center space-x-2 border border-zinc-700 rounded-full px-5 py-2.5 text-white hover:bg-zinc-800 transition-all text-sm group"
          >
            <FiMail className="text-lg text-[#8A8A8A] group-hover:text-white transition-colors" />
            <span>hello@dwell.com</span>
          </a>
        </div>
      </div>
      <div className="text-sm pt-3 max-w-7xl mx-auto">
        Created by alfiyanijin@gmail.com
      </div>
    </footer>
  );
};

export default Footer;
