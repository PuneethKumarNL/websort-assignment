import React from "react";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-6 relative z-10">
      <div className="flex items-center">
        <img
          src="https://res.cloudinary.com/dszd8jabc/image/upload/v1750621120/2fdcf92ce27321079a9002edc684fad273c7e610_xbhnvj.png"
          alt="Logo"
          className="rounded-full mr-2"
        />
      </div>
      <div className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-purple-400 transition duration-300">
          About Us
        </a>
        <a href="#" className="hover:text-purple-400 transition duration-300">
          Services
        </a>
        <a href="#" className="hover:text-purple-400 transition duration-300">
          Projects
        </a>
        <a href="#" className="hover:text-purple-400 transition duration-300">
          Careers
        </a>
      </div>
      {/* Mobile menu button will go here later */}
    </nav>
  );
};

export default NavBar;
