import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-10 px-6 text-center text-gray-400">
      <div className="flex items-center justify-center mb-4">
        <img
          src="https://res.cloudinary.com/dszd8jabc/image/upload/v1750621120/2fdcf92ce27321079a9002edc684fad273c7e610_xbhnvj.png"
          alt="Logo"
          className="rounded-full mr-2"
        />
      </div>
      <p>&copy; {new Date().getFullYear()} WebDart. All rights reserved.</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="#" className="hover:text-purple-400">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="hover:text-purple-400">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="hover:text-purple-400">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#" className="hover:text-purple-400">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
