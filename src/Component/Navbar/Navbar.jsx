import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  // State for mobile menu and dropdown
  const [nav, setNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle function for navbar
  const handleNav = () => {
    setNav(!nav);
    document.body.style.overflow = nav ? 'auto' : 'hidden'; // Prevents background scrolling
  };

  // Toggle function for dropdown in mobile menu
  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Navigation items
  const navItems = [
    { id: 1, text: 'HOME', link: '/' },
    { id: 2, text: 'ABOUT', link: '/' },
    { id: 3, text: 'PRODUCTS', dropdown: true },
    { id: 4, text: 'CONTACT US', link: '/contact' },
  ];

  // Product dropdown options
  const productOptions = [
    { id: 1, text: 'Coconut', link: '/coconut' },
    { id: 2, text: 'Green Saplings', link: '/green_saplings' },
    { id: 3, text: 'Flower Saplings', link: '/flower_sapling' },
    { id: 4, text: 'Fruit Saplings', link: '/fruit_sapling' },
    { id: 5, text: 'Fertilizer', link: '/fertilizer' },
  ];

  return (
    <div className='bg-green-900 fixed top-0 left-0 w-full z-50 flex justify-between items-center h-auto px-3 md:px-8 shadow-md'>
      {/* Logo */}
      <img src="/logo.png" alt="Aaraniyam" className='w-26 h-28 p-2' />

      {/* Desktop Navigation */}
      <ul className='hidden md:flex lg:mr-20'>
        {navItems.map(item => (
          <li key={item.id} className='relative group'>
            <a
              href={item.link}
              onMouseEnter={() => item.dropdown && setDropdownOpen(true)}
              onMouseLeave={() => item.dropdown && setDropdownOpen(false)}
            >
              <div className="relative p-4 cursor-pointer duration-300 text-white hover:text-white hover:font-bold font-poppins after:content-[''] after:absolute after:left-0 after:bottom-1 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full">
                {item.text}
              </div>
            </a>
            {/* Dropdown for Desktop */}
            {item.dropdown && dropdownOpen && (
              <ul className='absolute left-0 bg-white shadow-lg z-50 w-40'>
                {productOptions.map(product => (
                  <li key={product.id} className='p-2 hover:text-brandGreen1 hover:font-bold'>
                    <a href={product.link}>{product.text}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='md:hidden z-50'>
        {nav ? <AiOutlineClose size={24} className="text-white" /> : <AiOutlineMenu size={24} className="text-white" />}
      </div>

      {/* Background Overlay */}
      {nav && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={handleNav}></div>}

      {/* Mobile Navigation Menu */}
      <ul
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-white shadow-md ease-in-out duration-500 z-50 p-6 ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Mobile Logo */}
        <h1 className='text-2xl font-bold text-brandGreen m-4 font-noto'>ஆரணியம்</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li key={item.id} className='p-4 border-b font-poppins duration-300 hover:text-brandGreen1 hover:font-bold cursor-pointer'>
            {item.dropdown ? (
              <>
                <div onClick={handleDropdown} className="flex justify-between items-center">
                  <span>{item.text}</span>
                  <span className="text-gray-600">{dropdownOpen ? "▲" : "▼"}</span>
                </div>
                {/* Mobile Dropdown */}
                {dropdownOpen && (
                  <ul className="mt-2 bg-gray-100">
                    {productOptions.map(product => (
                      <li key={product.id} className='p-2 hover:text-brandGreen1 hover:font-bold'>
                        <a href={product.link} onClick={handleNav}>{product.text}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <a href={item.link} onClick={handleNav}>{item.text}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
