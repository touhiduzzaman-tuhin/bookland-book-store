import React from 'react';
import './LatestNews.css';
import newsData from '../../fakeData/NewsData';
import NewsDetails from '../NewsDetails/NewsDetails';
import { Button } from 'react-bootstrap';

const LatestNews = () => {
    // console.log(newsData);
    return (
        <div className='container'>
            <div className="latest-header" align="center">
                <p style={{fontFamily : 'Open Sans'}}>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Est, quia?</p>
            </div>
            <div className="row">
                {
                    newsData.map(news => <NewsDetails key={news.newsId} news={news}></NewsDetails>)
                }
            </div>

            <div align="center">
                <Button className='my-5' variant='warning'>
                    View More
                </Button>
            </div>
        </div>
    );
};

export default LatestNews;