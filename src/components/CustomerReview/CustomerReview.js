import React from 'react';
import SingleCarousel from '../SingleCarousel/SingleCarousel';

const CustomerReview = () => {
    // console.log(customerReviewData);
    return (
        <div align="center" className='container my-5'>
            <h3 style={{fontFamily : 'Poppins'}}>What Customer's Said</h3>
            <p className='my-5' style={{fontFamily : 'Open Sans'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>tempor incididunt ut labore et dolore magna aliqua</p>

            <SingleCarousel></SingleCarousel>

        </div>
    );
};

export default CustomerReview;