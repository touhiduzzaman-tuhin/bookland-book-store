import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import CustomerReview from '../CustomerReview/CustomerReview';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LatestNews from '../LatestNews/LatestNews';
import ProductFeature from '../ProductFeature/ProductFeature';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <ProductFeature></ProductFeature>
            <LatestNews></LatestNews>
            <CustomerReview></CustomerReview>
            <Category></Category>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;