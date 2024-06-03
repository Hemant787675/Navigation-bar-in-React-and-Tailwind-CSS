import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-blue-200'>
      <ul className='text-center text-xl p-20'>
        <Link spy={true} smooth={true} to="Home">
          <li className='text-blue-700 my-4 py-4 border-blue-600 hover:bg-blue-500 hover:rounded hover:text-slate-300'>Home</li>
        </Link>
        <Link spy={true} smooth={true} to="About">
          <li className='text-blue-700 my-4 py-4 border-blue-600 hover:bg-blue-500 hover:rounded hover:text-slate-300'>About</li>
        </Link>
        <Link spy={true} smooth={true} to="Portfolio">
          <li className='text-blue-700 my-4 py-4 border-blue-600 hover:bg-blue-500  hover:rounded hover:text-slate-300'>Portfolio</li>
        </Link>
        <Link spy={true} smooth={true} to="Contact">
          <li className='text-blue-700 my-4 py-4 border-blue-600 hover:bg-blue-500   hover:rounded hover:text-slate-300'>Contact</li>
        </Link>
      </ul>
    </div>
  );

  return (
    <nav>
      <div className='h-10vh flex justify-between z-50 lg:py-5 px-20 py-4'>
        <div className='flex items-center'>
          <span>Logo</span>
        </div>
        <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
          <div className='flex-10'>
            <ul className='flex gap-8 mr-16 text-[10px]'>
              <Link className='hover:text-blue-400 text-blue-400 transition border-b-2 border-blue-400 hover:border-blue-400 cursor-pointer ' spy={true} smooth={true} to="Home">
                <li>Home</li>
              </Link>
              <Link className='hover:text-blue-400 transition hover:border-b-2 border-blue-400 cursor-pointer' spy={true} smooth={true} to="About">
                <li>About</li>
              </Link>
              <Link className='hover:text-blue-400 transition hover:border-b-2 border-blue-400 cursor-pointer' spy={true} smooth={true} to="Portfolio">
                <li>Portfolio</li>
              </Link>
              <Link className='hover:text-blue-400 transition hover:border-b-2 border-blue-400 cursor-pointer' spy={true} smooth={true} to="Contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>
        <button className='block md:hidden lg:hidden text-blue-500' onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
