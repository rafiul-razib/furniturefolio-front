import React from 'react';
import Banner from './Banner';
import Products from './Products';
import Review from './Review';
import Services from './Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Services></Services>
            <Review></Review>
        </div>
    );
};

export default Home;