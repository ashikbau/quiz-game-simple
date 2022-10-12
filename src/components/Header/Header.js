import React, { useState } from 'react';
import {  Link, NavLink } from 'react-router-dom';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    return (
        
            <div className='bg-gray-100'>
      <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='relative flex items-center justify-between'>
          <Link
            to='/'
            aria-label='proReader'
            title='proReader'
            className='inline-flex items-center'
          >
            <svg
              className='w-8 text-blue-400'
              viewBox='0 0 24 24'
              strokeLinejoin='round'
              strokeWidth='2'
              strokeLinecap='round'
              strokeMiterlimit='10'
              stroke='currentColor'
              fill='none'
            >
              <rect x='3' y='1' width='7' height='12' />
              <rect x='3' y='17' width='7' height='6' />
              <rect x='14' y='1' width='7' height='6' />
              <rect x='14' y='11' width='7' height='12' />
            </svg>
            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>
              QuizPuzzle
            </span>
          </Link>
          <ul className='flex items-center hidden space-x-8 lg:flex'>
            <li>
              <NavLink
                to='/home'
                aria-label='Home'
                title='Home'
                className={({ isActive }) =>
                  isActive
                    ? 'font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/blog'
                aria-label='Blog'
                title='Blog'
                className={({ isActive }) =>
                  isActive
                    ? 'font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                aria-label='About'
                title='About '
                className={({ isActive }) =>
                  isActive
                    ? 'font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/statistics'
                aria-label='Statistics'
                title='Statistics '
                className={({ isActive }) =>
                  isActive
                    ? 'font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                }
              >
                Statistics
              </NavLink>
            </li>
          </ul>
          </div>
          </div>
          </div>
        
       
    );
};

export default Header;