import React from 'react';
import BookCategory from '../BookCategory/BookCategory';
import Category from '../Category/Category';
import Footer from '../Footer/Footer';
import Subscribe from '../Subscribe/Subscribe';
import Testimonial from '../Testimonial/Testimonial';

const BookDetails = () => {
    return (
        <div>
            <Testimonial></Testimonial>
            <Category></Category>
            <Subscribe></Subscribe>
            <BookCategory></BookCategory>
            <Footer></Footer>
        </div>
    );
};

export default BookDetails;