import React from 'react';
import { Carousel } from 'react-bootstrap';
import star from '../../images/star.png';
import './SingleCarousel.css';

const SingleCarousel = () => {
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
                            <p className="my-5 text-justify" style={{fontFamily : 'Open Sans'}}>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur
                            </p>

                            <div className="row">
                                <div align='left' style={{fontFamily : 'Open Sans'}} className="col-md-6">
                                    <h4>Johnson Simanungkalit</h4>
                                    <p>faculty of Economics 2020</p>
                                </div>
                                <div align="right" className="col-md-6">
                                    <img src={star} alt=""/>
                                    <img src={star} alt=""/>
                                    <img src={star} alt=""/>
                                    <img src={star} alt=""/>
                                    <h5>4.8</h5>
                                </div>
                            </div>
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
                            <p className="my-5 text-justify" style={{fontFamily : 'Open Sans'}}>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur
                            </p>

                            <div className="row">
                                <div align='left' style={{fontFamily : 'Open Sans'}} className="col-md-6">
                                    <h4>Johnson Simanungkalit</h4>
                                    <p>faculty of Economics 2020</p>
                                </div>
                                <div align="right" className="col-md-6">
                                    <img src={star} alt=""/>
                                    <img src={star} alt=""/>
                                    <img src={star} alt=""/>
                                    <img src={star} alt=""/>
                                    <h5>4.8</h5>
                                </div>
                            </div>
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
                            <p className="my-5 text-justify" style={{fontFamily : 'Open Sans'}}>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur
                            </p>

                            <div className="row">
                                <div align='left' style={{fontFamily : 'Open Sans'}} className="col-md-6">
                                    <h4>Johnson Simanungkalit</h4>
                                    <p>faculty of Economics 2020</p>
                                </div>
                                <div align="right" className="col-md-6">
                                    <img src={star} alt=""/>
                                    <img src={star} alt=""/>
                                    <img src={star} alt=""/>
                                    <img src={star} alt=""/>
                                    <h5>4.8</h5>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default SingleCarousel;