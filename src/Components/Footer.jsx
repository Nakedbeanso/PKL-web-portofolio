import React from "react";
import { Card } from "flowbite-react";

const Footer = () => {
  return (
    <footer className="text-black py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Contact Information */}
          <Card className=" border-none shadow-lg text-center">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm mb-4">
              Address: Jl.Situgunting Timur 
            </p>
            <p className="text-sm">Phone: +62 831 0815 1831</p>
            <p className="text-sm">Email: rizalsuhari@gmail.com</p>
          </Card>

          {/* Card 2: Quick Links */}
          <Card className=" border-none shadow-lg text-center">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li className="mb-2 hover:text-gray-400">
                <a href="#home">Home</a>
              </li>
              <li className="mb-2 hover:text-gray-400">
                <a href="#about">About</a>
              </li>
            </ul>
          </Card>

        </div>

        {/* Copyright */}
        <div className="text-center mt-6 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
