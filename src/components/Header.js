// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-pink-800 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Milestone 2: Basic UI Design, Custom CSS & Tailwind CSS</h1>
      <nav>
        <Link to="/" className="px-2">Home</Link>
        <Link to="/about" className="px-2">About</Link>
        <Link to="/contact" className="px-2">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
