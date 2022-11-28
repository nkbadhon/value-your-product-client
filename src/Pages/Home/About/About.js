import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="hero min-h-screen my-8" style={{ backgroundImage: `url('https://i.pcmag.com/imagery/lineups/02hOB8SkvCC7nUU4C9v3VQP-1.fit_lim.size_768x432.v1569492844.jpg')` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-red-50  font-bold">About Us</h1>
                    <p className="mb-5 text-lg">We are determined to provide you fresh conditioed mobile phones at affordable price.</p>
                    <Link to={'/'}><button className="btn">Read More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default About;