import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='mx-auto'>
            <div className='flex justify-center items-center mb-5 space-x-4 mx-auto bg-black text-white h-16 sticky-top'>
            <Link to={'/home'}>HOME</Link>
            <Link to={'/inventories'}>INVENTORIES</Link>
            <Link to={'/blogs'}>BLOGS</Link>
            <Link to={'/signin'}>SIGN IN</Link>
            </div>
        </nav>
    );
};

export default Header;