import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='mx-auto sticky top-0 z-10 '>
            <div className='flex justify-center items-center mb-5 space-x-4 mx-auto bg-gradient-to-l from-blue-700 to-transparent text-white h-16 '>
            <Link className='hover:text-blue-900' to={'/home'}>HOME</Link>
            <Link className='hover:text-blue-900' to={'/inventories'}>INVENTORIES</Link>
            <Link className='hover:text-blue-900' to={'/blogs'}>BLOGS</Link>
            <Link className='hover:text-blue-900' to={'/signin'}>SIGN IN</Link>
            </div>
        </nav>
    );
};

export default Header;