import React from 'react';
import BookCategory from '../BookCategory/BookCategory';
import BookDetailsBanner from '../BookDetailsBanner/BookDetailsBanner';
import BookHeader from '../BookHeader/BookHeader';
import Category from '../Category/Category';
import CompanyOverView from '../CompanyOverview/CompanyOverView';
import Footer from '../Footer/Footer';
import Subscribe from '../Subscribe/Subscribe';
import Testimonial from '../Testimonial/Testimonial';

const BookDetails = () => {
    return (
        <div>
            <BookHeader></BookHeader>
            <BookDetailsBanner></BookDetailsBanner>
            <CompanyOverView></CompanyOverView>
            <Testimonial></Testimonial>
            <Category></Category>
            <Subscribe></Subscribe>
            <BookCategory></BookCategory>
            <Footer></Footer>
        </div>
    );
};

export default BookDetails;