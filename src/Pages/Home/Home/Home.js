import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Categories from '../Category/Categories';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <About></About>
        </div>
    );
};

export default Home;