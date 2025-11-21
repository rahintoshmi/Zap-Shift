import React from 'react';
import service from '../../../assets/service.png';
const Services = () => {
    return (
        <div className='rounded-4xl py-14 lg:py-24 px-5 lg:px-20 bg-[var(--colors-blue-blue-10)]'>
            <div className='text-center'>
                <h3 className='font-extrabold text-4xl text-[var(--colors-dark-black-1)]'>Our Services</h3>
                <p className='my-6 font-medium text-md text-[var(--colors-dark-black-5)]'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-7'>
                <div className='text-center rounded-3xl py-8 px-10 bg-[var(--colors-dark-black-1)] hover:bg-[var(--primary-color)]'>
                    <img className='rounded-[99px] p-6 mx-auto bg-[linear-gradient(180deg,#eeedfc_0%,rgba(238,237,252,0)_100%)]' src={service} alt="" />
                    <h3 className='my-4 font-bold text-2xl text-[var(--colors-blue-blue-10)]'>Express  & Standard Delivery</h3>
                    <p className='font-medium text-md text-[var(--colors-dark-black-8)]'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
                <div className='text-center rounded-3xl py-8 px-10 bg-[var(--colors-dark-black-1)] hover:bg-[var(--primary-color)]'>
                    <img className='rounded-[99px] p-6 mx-auto bg-[linear-gradient(180deg,#eeedfc_0%,rgba(238,237,252,0)_100%)]' src={service} alt="" />
                    <h3 className='my-4 font-bold text-2xl text-[var(--colors-blue-blue-10)]'>Nationwide Delivery</h3>
                    <p className='font-medium text-md text-[var(--colors-dark-black-8)]'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
                <div className='text-center rounded-3xl py-8 px-10 bg-[var(--colors-dark-black-1)] hover:bg-[var(--primary-color)]'>
                    <img className='rounded-[99px] p-6 mx-auto bg-[linear-gradient(180deg,#eeedfc_0%,rgba(238,237,252,0)_100%)]' src={service} alt="" />
                    <h3 className='my-4 font-bold text-2xl text-[var(--colors-blue-blue-10)]'>Fulfillment Solution</h3>
                    <p className='font-medium text-md text-[var(--colors-dark-black-8)]'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
                <div className='text-center rounded-3xl py-8 px-10 bg-[var(--colors-dark-black-1)] hover:bg-[var(--primary-color)]'>
                    <img className='rounded-[99px] p-6 mx-auto bg-[linear-gradient(180deg,#eeedfc_0%,rgba(238,237,252,0)_100%)]' src={service} alt="" />
                    <h3 className='my-4 font-bold text-2xl text-[var(--colors-blue-blue-10)]'>Cash on Home Delivery</h3>
                    <p className='font-medium text-md text-[var(--colors-dark-black-8)]'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
                <div className='text-center rounded-3xl py-8 px-10 bg-[var(--colors-dark-black-1)] hover:bg-[var(--primary-color)]'>
                    <img className='rounded-[99px] p-6 mx-auto bg-[linear-gradient(180deg,#eeedfc_0%,rgba(238,237,252,0)_100%)]' src={service} alt="" />
                    <h3 className='my-4 font-bold text-2xl text-[var(--colors-blue-blue-10)]'>Corporate Service / Contract In Logistics</h3>
                    <p className='font-medium text-md text-[var(--colors-dark-black-8)]'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
                <div className='text-center rounded-3xl py-8 px-10 bg-[var(--colors-dark-black-1)] hover:bg-[var(--primary-color)]'>
                    <img className='rounded-[99px] p-6 mx-auto bg-[linear-gradient(180deg,#eeedfc_0%,rgba(238,237,252,0)_100%)]' src={service} alt="" />
                    <h3 className='my-4 font-bold text-2xl text-[var(--colors-blue-blue-10)]'>Parcel Return</h3>
                    <p className='font-medium text-md text-[var(--colors-dark-black-8)]'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Services;