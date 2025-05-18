import React from "react";

const Footer = () => (
  <footer className="bg-gray-100 py-4 mt-10 border-t">
    <div className="container mx-auto text-center text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} Fruit Market. All rights reserved.
    </div>
  </footer>
);

export default Footer;
