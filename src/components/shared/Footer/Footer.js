import React from 'react';

const Footer = () => {
    const today = new Date();
    const date = today.getFullYear();
    return (
        <div>
            <p>mahfuzswaron, {date}</p>
        </div>
    );
};

export default Footer;