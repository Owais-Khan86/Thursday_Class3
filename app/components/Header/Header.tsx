import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-blue-950 p-4 z-50">
      <h1 className="text-white text-2xl text-center">My GIAIC Assignment-3</h1>
      <nav>
        <ul className="flex space-x-3 text-white">
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
