import React from "react";
import "./App.css";


const App = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen text-white font-inter">
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
      <section className="relative h-[70vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob top-10 left-20"></div>
          <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 top-40 right-20"></div>
          <div className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 bottom-20 left-60"></div>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 relative z-10">
          Digitizing ideas with <br /> Clean Code & Modern Design
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl relative z-10">
          At Websort, we turn digital visions into reality with expert web and
          app development, UI/UX design, and digital marketing. Based in
          Bangalore, we craft responsive websites, innovative mobile apps, and
          drive results through SEO, PPC, and social media strategies.
        </p>
        <div className="relative z-10">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </section>
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Project</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-6 shadow-xl transform transition duration-300 hover:scale-105">
            <img
              src="https://res.cloudinary.com/dszd8jabc/image/upload/v1750620786/aa65fe867c31b42c007cd24e67e251d288917393_gbebjk.jpg"
              alt="Web Design"
              className="rounded-xl mb-4 w-full h-auto object-cover"
            />
            <h3 className="text-2xl font-semibold">App Development</h3>
          </div>

          <div className="relative  rounded-2xl p-6 shadow-2xl transform transition duration-300 hover:scale-105 border-4 border-purple-400">
            <div className="absolute inset-0 p-4 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dszd8jabc/image/upload/v1750620896/09301d3daf6cd4d731199dc2e4fb42fd1f0cfb3a_yyik04.jpg"
                alt="UI/UX"
                className="w-full h-full object-contain mix-blend-luminosity opacity-50"
              />
            </div>
            <h3 className="text-4xl font-extrabold relative z-10">UI/UX</h3>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 shadow-xl transform transition duration-300 hover:scale-105">
            <img
              src="https://res.cloudinary.com/dszd8jabc/image/upload/v1750621120/055c1fe8a92fb48ac917a89f08452005d34671dd_gfhc1v.jpg"
              alt="Development"
              className="rounded-xl mb-4 w-full h-auto object-cover"
            />
            <h3 className="text-2xl font-semibold">Web Development</h3>
            <p className="text-gray-400 mt-2">
              Robust and scalable web applications.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 text-center bg-gray-900">
        <h2 className="text-4xl font-bold mb-4">
          Fueling the Future with Innovation
        </h2>
        <h3 className="text-6xl font-extrabold text-purple-500 mb-8">
          AI & IoT
        </h3>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
          Pioneering the next generation of smart solutions through Artificial
          Intelligence and the Internet of Things.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
          See Our Projects
        </button>
      </section>
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">
          See Our Work in Web Design & Development
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto text-center">
          <p className="text-2xl text-gray-300 ">
            We specialize in building responsive, user-friendly websites
            tailored to client needs. Take a look at our recent projects to see
            how design and functionality come together.
          </p>
          <div className="flex flex-col items-center justify-center bg-gray-800 rounded-2xl p-6 shadow-xl">
            <img
              src="https://res.cloudinary.com/dszd8jabc/image/upload/v1750621120/ab1646f8fce6d2d3c5d9f74f53dc0f4b9373c45a_gzrfhk.png"
              alt="Web Work 1"
              className="rounded-xl mb-6 w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      <section className="py-20 px-6 text-center bg-gray-900">
        <h2 className="text-4xl font-bold mb-12">Why We Stand Out</h2>
        <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto">
          <div className="md:w-1/2 text-left mb-10 md:mb-0 md:pr-10">
            <p className="text-2xl text-gray-300 leading-relaxed">
              At Websort, we don’t just build digital products — we build
              careers. By joining our team, you become part of a creative and
              collaborative environment that values innovation, continuous
              learning, and personal growth.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              className="w-3xs h-72 mb-6 md:mb-0"
              src="https://res.cloudinary.com/dszd8jabc/image/upload/v1750621120/6afdf3aef40aa3f791ec415881544cf6f679ab71_a6dag9.png"
              alt=""
            />
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-8">
            One of our product achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800 rounded-2xl p-6 shadow-xl flex flex-col items-center transform transition duration-300 hover:scale-105">
              <img
                src="https://res.cloudinary.com/dszd8jabc/image/upload/v1750621118/21d036cf8bc9bfa4c090115c6327ddb637ff0f43_mnzisw.jpg"
                alt="Web Development"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold">Web Development</h4>
            </div>
            <div className="bg-gray-800 rounded-2xl p-6 shadow-xl flex flex-col items-center transform transition duration-300 hover:scale-105">
              <img
                src="https://res.cloudinary.com/dszd8jabc/image/upload/v1750621118/aa65fe867c31b42c007cd24e67e251d288917393_1_k1cho0.jpg"
                alt="App Development"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold">App Development</h4>
            </div>
            <div className="bg-gray-800 rounded-2xl p-6 shadow-xl flex flex-col items-center transform transition duration-300 hover:scale-105">
              <img
                src="https://res.cloudinary.com/dszd8jabc/image/upload/v1750621118/8636492b76d6043bc55892f563bec6e171a63b66_gg1itw.jpg"
                alt="Digital Marketing"
                className="rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold">Digital Marketing</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-5xl font-bold leading-tight mb-4">
              Questions?
            </h2>
            <h2 className="text-5xl font-bold leading-tight text-purple-400 mb-8">
              We're here to answer them!
            </h2>
            <p className="text-lg text-gray-300">
              Feel free to reach out to us with any inquiries you may have. We
              are always ready to help you with your next big idea.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
            <form>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-300 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-300 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="number"
                  className="block text-gray-300 text-sm font-bold mb-2"
                >
                  Number
                </label>
                <input
                  type="text"
                  id="number"
                  className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600"
                  placeholder="Your Phone Number"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-300 text-sm font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 text-center bg-gray-900">
        <h2 className="text-4xl font-bold mb-8">
          See what opportunities await you
        </h2>
        <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
          Explore More
        </button>
      </section>
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
    </div>
  );
};

export default App;
