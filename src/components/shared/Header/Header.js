import React from 'react';
import { Link } from 'react-router-dom';
const style = {
    'backgroundColor': 'blue',
    'opacity': '50%'
}

const Header = () => {
    return (
        <nav className='mx-auto sticky top-0 z-10 '>
            <div style={style} className='flex justify-center items-center mb-5 space-x-4 mx-auto bg-transparant text-white h-16 '>
            <Link className='hover:font-bold' to={'/home'}>HOME</Link>
            <Link className='hover:font-bold' to={'/inventories'}>INVENTORIES</Link>
            <Link className='hover:font-bold' to={'/manageinventories'}>MANAGE INVENTORIES</Link>
            <Link className='hover:font-bold' to={'/blogs'}>BLOGS</Link>
            <Link className='hover:font-bold' to={'/signin'}>SIGN IN</Link>
            </div>
        </nav>
    );
};

export default Header;