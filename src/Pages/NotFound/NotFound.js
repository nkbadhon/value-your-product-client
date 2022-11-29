import React from 'react';
import image from '../../../src/assets/error-image.webp'

const NotFound = () => {
    return (
        <div className='text-center '>
            <figure className='flex justify-center'><img className='h-1/4 w-1/4 ' src={image} alt="Shoes" /></figure>
            <h4 className='text-4xl mb-40'>....oops! Something went <span className='text-danger'>wrong</span> . Go back to home page.</h4>
        </div>
    );
};

export default NotFound;