import React from 'react';

const Footer = () => {
    const today = new Date();
    const date = today.getFullYear();
    return (
        <div>
            <p className='text-center mt-20 mb-2'>Mahfuz Swaron, {date}</p>
        </div>
    );
};

export default Footer;