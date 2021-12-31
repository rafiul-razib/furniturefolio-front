import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Review = () => {
    return (
        <div>
            <OwlCarousel className='owl-theme' loop margin={20}>
                <h2>Customer review</h2>
                <h2>Customer review</h2>
                <h2>Customer review</h2>
                <h2>Customer review</h2>
                <h2>Customer review</h2>
                <h2>Customer review</h2>
            </OwlCarousel>
        </div>
    );
};

export default Review;