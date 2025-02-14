import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'HOME', link: '/' },
    { id: 2, text: 'ABOUT', link: '/' },
    { id: 3, text: 'PRODUCTS', dropdown: true },
    { id: 4, text: 'CONTACT US', link: '/Contact' },
  ];

  // Array containing product options
  const productOptions = [
    { id: 1, text: 'Coconut', link: '/coconut' },
    { id: 2, text: 'Green Saplings', link: '/green-saplings' },
    { id: 3, text: 'Flower Saplings', link: '/flower-sapling' },
    { id: 4, text: 'Fruit Saplings', link: '/fruit-sapling' },
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
            {item.dropdown && dropdownOpen && (
              <ul
                className='absolute left-0 bg-white shadow-lg z-50 w-full'
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
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
      <div onClick={handleNav} className='md:hidden z-20'>
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed top-0 left-0 w-[60%] h-full bg-white border-r border-gray-900 ease-in-out duration-500 z-10 '
            : 'fixed top-0 left-[-100%] w-[60%] h-full ease-in-out duration-500 '
        }
      >
        {/* Mobile Logo */}
        <h1 className='text-2xl font-bold text-brandGreen m-4 font-noto'>ஆரணியம்</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li key={item.id} className='p-4 border-b font-poppins duration-300 hover:text-brandGreen1 hover:font-bold cursor-pointer'>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
