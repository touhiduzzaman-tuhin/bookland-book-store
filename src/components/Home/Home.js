import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LatestNews from '../LatestNews/LatestNews';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <LatestNews></LatestNews>
            <Category></Category>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;