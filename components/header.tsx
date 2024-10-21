import React from 'react';

const Header = () => {
  return (
    <div className="bg-blue-500 p-3">
      <ul className="flex flex-wrap justify-start gap-[0.4rem] md:gap-5">
        <li>
          <a href="#" className="text-sm bg-blue-700 hover:text-base text-white p-2  rounded-lg font-bold transition duration-300 ease-in-out transform hover:-translate-y-1">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-sm bg-blue-700 hover:text-base text-white p-2 rounded-lg font-bold transition duration-300 ease-in-out transform hover:-translate-y-1">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-sm bg-blue-700 hover:text-base text-white p-2 rounded-lg font-bold transition duration-300 ease-in-out transform hover:-translate-y-1">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="text-sm bg-blue-700 hover:text-base text-white p-2 rounded-lg font-bold transition duration-300 ease-in-out transform hover:-translate-y-1">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
