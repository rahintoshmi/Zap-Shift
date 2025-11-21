import React from 'react';
import logo from '../../assets/logo.png';
const Logo = () => {
    return (
        <div className='flex items-end'>
            <img src={logo} alt="" />
            <h2 className='font-extrabold text-3xl text-dark-black-10 -ms-2.5'>ZapShift</h2>
        </div>
    );
};

export default Logo;