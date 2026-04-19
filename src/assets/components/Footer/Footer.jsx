/* eslint-disable no-unused-vars */
import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaGoogle,
  FaPhone,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#df8e27] to-[#e47600] pt-12 pb-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold uppercase">Coders Cafe</h1>
            <p className="text-sm max-w-[300px] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              voluptates aspernatur ex error modi dolorem nam magnam maxime!
            </p>
            <div>
              <p className="flex items-center gap-2 mb-2">
                <FaPhone />
                +1 (123) 456-7890
              </p>
              <p className="flex items-center gap-2">
                <FaMapLocation />
                Noida, Uttar Pradesh
              </p>
            </div>
          </motion.div>

          {/* Footer Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-2 gap-3">
              {/* First Column */}
              <div className="space-y-2">
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-black transition-colors text-sm">Home</a></li>
                  <li><a href="#" className="hover:text-black transition-colors text-sm">About</a></li>
                  <li><a href="#" className="hover:text-black transition-colors text-sm">Contact us</a></li>
                  <li><a href="#" className="hover:text-black transition-colors text-sm">Privacy Policy</a></li>
                </ul>
              </div>
              {/* Second Column */}
              <div className="space-y-2">
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-black transition-colors text-sm">Home</a></li>
                  <li><a href="#" className="hover:text-black transition-colors text-sm">About</a></li>
                  <li><a href="#" className="hover:text-black transition-colors text-sm">Contact us</a></li>
                  <li><a href="#" className="hover:text-black transition-colors text-sm">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Social Links & Payment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300 cursor-pointer" />
            </div>

            <div className="space-y-4">
              <h1 className="text-xl font-bold font-semibold">Payment Methods</h1>
              <div className="flex items-center gap-4">
                <img 
                  src="https://e7.pngegg.com/pngimages/111/982/png-clipart-payment-gateway-credit-card-money-computer-icons-credit-card-text-service.png" 
                  alt="Payment Methods"
                  className="w-[180px] bg-white rounded p-1 object-contain" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm font-semibold transition-colors">
                  SUBSCRIBE
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 512c35.3 0 64-28.7 64-64H160c0 35.3 28.7 64 64 64zm150-109v-45c0-11-9-20-20-20h-23.7c-9.6 0-17.7-6.9-19.4-16.3C302.2 249.2 291 192 224 192s-78.2 57.2-86.9 129.7c-1.7 9.4-9.8 16.3-19.4 16.3H94c-11 0-20 9-20 20v45c0 11 9 20 20 20h260c11 0 20-9 20-20zM358 192c0-82-62.4-149.2-142.3-158.4C211 16 195.9-4 175.7-4c-20.2 0-35.3 20-40.1 37.6C55.4 42.8-7 110-7 192c0 23.9 4.3 46.9 12.1 68.3 11.5 31.7 8.3 67-9.5 96.1-7.1 11.6-1.5 27 10.9 33.3 12.3 6.3 28.1 1.4 34.4-10.9 23-45 5.5-98.3-25.5-139.7C10.7 220 7 192 7 192c0-61.9 50.1-112 112-112s112 50.1 112 112c0 0-3.7 28-8.4 47.1-31 41.4-48.5 94.7-25.5 139.7 6.3 12.3 22.1 17.2 34.4 10.9 12.4-6.3 18-21.7 10.9-33.3-17.8-29.1-21-64.4-9.5-96.1C353.7 238.9 358 215.9 358 192z"></path></svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <p className="text-center mt-8 pt-8 border-t border-white/20 text-sm">
          Copyright &copy; 2024 Company Name. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
