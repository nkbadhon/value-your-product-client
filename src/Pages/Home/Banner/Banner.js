import React from 'react';
import banner from '../../../assets/ban.jpeg';
const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <h1 className="text-4xl text-info font-bold">A trustworthy place to buy and sell used phone.</h1>
                    <p className="py-6"></p>
                    
                </div>
                <img src={banner} className="w-1/2 rounded-lg shadow-2xl" alt='' />
            </div>
        </div>
    );
};

export default Banner;
