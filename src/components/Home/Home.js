import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import LatestNews from '../LatestNews/LatestNews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;