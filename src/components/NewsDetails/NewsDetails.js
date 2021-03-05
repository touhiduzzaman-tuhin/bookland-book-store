import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import newsImage from '../../images/gray_background.jpg';
import './NewsDetails.css';

const NewsDetails = (props) => {
    console.log(props);
    const {newsTitle, publishedDate, publishedName} = props.news;
    return (
        <div className='col-6 col-sm-6 col-md-4 col-lg-3 my-2'>
           <Card>
                <Card.Img variant="top" src={newsImage} />
                <Card.Body>
                <Card.Title style={{fontSize: '17px'}} className='my-4'>{newsTitle}</Card.Title>
                
                <div className='d-flex justify-content-around my-4'>
                    <h6>
                        {publishedName} &nbsp; <span style={{color: 'gray'}}>{publishedDate}</span>
                    </h6>
                </div>

                <Card.Text className='news-description'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Card.Text>
                    
                <Link to='/'>
                    Continue Reading...
                </Link>
                </Card.Body>
                
            </Card> 
        </div>
    );
};

export default NewsDetails;