import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode(isDark: boolean): void;
}
function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  return (
    <nav className='py-10 mb-12 flex justify-between dark:text-white'>
      <h2 className='text-xl font-burtons'>DevelopedBy</h2>
      <ul className='flex items-center'>
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className='text-2xl'
          />
        </li>
        <li>
          <a
            className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 ml-8 border-none rounded-md'
            target='_blank'
            href='https://drive.google.com/file/d/13f_aBDn5xUs_8BRmU2aoHq9tCWWPQ63R/view?usp=sharing'
            rel='noreferrer'
          >
            {' '}
            Resume{' '}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
