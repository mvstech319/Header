import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='bg-slate-700 flex items-center justify-between px-4 h-16'>
      {/* Logo */}
      <div className='text-white text-2xl font-bold'>
        <h1>MVS-Tech</h1>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden sm:flex gap-10 text-white cursor-pointer'>
        <li className='hover:text-gray-300'>Home</li>
        <li className='hover:text-gray-300'>About</li>
        <li className='hover:text-gray-300'>Contact</li>
      </ul>

      {/* Mobile Menu Toggle Button with Icon */}
      <div className='sm:hidden'>
        <button
          className='text-white text-2xl'
          onClick={toggleMenu}
        >
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className='absolute top-16 left-0 w-full bg-slate-800 sm:hidden'>
          <ul className='flex flex-col items-center gap-4 text-white py-4'>
            <li className='hover:text-gray-300'>Home</li>
            <li className='hover:text-gray-300'>About</li>
            <li className='hover:text-gray-300'>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
