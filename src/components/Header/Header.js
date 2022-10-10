import React from 'react';
import {  NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-center m-3 bg-blue-500 p-10 flex justify-between'>
            <div>
             <h1 className='font-bold'>Quiz Puzzle</h1>
            

            </div>
            <div>
            <NavLink className='mr-4' to={'home'}>Home</NavLink>
            <NavLink className='mr-4' to={'about'}>About</NavLink>
            <NavLink className='mr-4' to={'statistics'}>Statistics</NavLink>

            </div>
            
        </div>
    );
};

export default Header;