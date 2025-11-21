import React from 'react';
import booking from '../../../assets/bookingIcon.png';
const Works = () => {
    return (
        <div className='my-24'>
            <h2 className='my-6 font-extrabold text-3xl text-[var(--colors-blue-blue-10)]'>How it Works</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className='rounded-3xl bg-[#ffffffb3] p-8'>
                    <img src={booking} alt="" />
                    <h3 className='my-3 font-bold text-xl text-[var(--colors-blue-blue-10)]'>Booking Pick & Drop</h3>
                    <p className='font-medium text-lg text-[var(--colors-dark-black-8)]'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='rounded-3xl bg-[#ffffffb3] p-8'>
                    <img src={booking} alt="" />
                    <h3 className='my-3 font-bold text-xl text-[var(--colors-blue-blue-10)]'>Cash On Delivery</h3>
                    <p className='font-medium text-lg text-[var(--colors-dark-black-8)]'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='rounded-3xl bg-[#ffffffb3] p-8'>
                    <img src={booking} alt="" />
                    <h3 className='my-3 font-bold text-xl text-[var(--colors-blue-blue-10)]'>Delivery Hub</h3>
                    <p className='font-medium text-lg text-[var(--colors-dark-black-8)]'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='rounded-3xl bg-[#ffffffb3] p-8'>
                    <img src={booking} alt="" />
                    <h3 className='my-3 font-bold text-xl text-[var(--colors-blue-blue-10)]'>Booking SME & Corporate</h3>
                    <p className='font-medium text-lg text-[var(--colors-dark-black-8)]'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
            </div>
        </div>
    );
};

export default Works;