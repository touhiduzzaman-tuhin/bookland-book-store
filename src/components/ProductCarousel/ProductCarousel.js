import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './ProductCarousel.css';

const ProductCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <div className="row">
                        <div className="col-4 col-md-4">
                            <div className="w-50 h-100 customer-review-area">

                            </div>
                        </div>
                        <div className="col-8 col-md-8">
                            <h6>B E S T  -  S E L L E R</h6>
                            <h2>A Heavy Lift</h2>
                            <h5>NoPolean Hill  Business & Strategy</h5>
                            <p className="my-5 text-justify description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            </p>

                            <div className="d-flex justify-content-around">
                                <h4>$9.5</h4>
                                <h6 style={{ color: 'red' }}><del>$12.0</del></h6>
                                <Button>20% OFF</Button>
                            </div>
                            <Button variant='warning'>Buy Now</Button> &nbsp; &nbsp;
                            <Button variant='outline-success'>See Details</Button>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <div className="row">
                        <div className="col-4 col-md-4">
                            <div className="w-50 h-100 customer-review-area">

                            </div>
                        </div>
                        <div className="col-8 col-md-8">
                            <h6>B E S T  -  S E L L E R</h6>
                            <h2>A Heavy Lift</h2>
                            <h5>NoPolean Hill  Business & Strategy</h5>
                            <p className="my-5 text-justify description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            </p>

                            <div className="d-flex justify-content-around">
                                <h4>$9.5</h4>
                                <h6 style={{ color: 'red' }}><del>$12.0</del></h6>
                                <Button>20% OFF</Button>
                            </div>
                            <Button variant='warning'>Buy Now</Button> &nbsp; &nbsp;
                            <Button variant='outline-success'>See Details</Button>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <div className="row">
                        <div className="col-4 col-md-4">
                            <div className="w-50 h-100 customer-review-area">

                            </div>
                        </div>
                        <div className="col-8 col-md-8">
                            <h6>B E S T  -  S E L L E R</h6>
                            <h2>A Heavy Lift</h2>
                            <h5>NoPolean Hill  Business & Strategy</h5>
                            <p className="my-5 text-justify description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            </p>

                            <div className="d-flex justify-content-around">
                                <h4>$9.5</h4>
                                <h6 style={{ color: 'red' }}><del>$12.0</del></h6>
                                <Button>20% OFF</Button>
                            </div>
                            <Button variant='warning'>Buy Now</Button> &nbsp; &nbsp;
                            <Button variant='outline-success'>See Details</Button>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default ProductCarousel;