import React from 'react';
import star from '../../images/star.png';
import { faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebookSquare, FaMailBulk, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';

const BookRating = () => {
    return (
        <div className="row my-3">
            <div className="col-md-4">
                <div className='d-flex'>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/> &nbsp; &nbsp;
                    4.0
                </div>
            </div>

            <div className="col-md-8">
                <div  align="right" className="row">
                    <div className="col-md-6">
                        <div className="d-flex">
                            <FontAwesomeIcon icon={faComment}></FontAwesomeIcon> &nbsp;
                            <p>235 Review</p> &nbsp; &nbsp;
                            <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon> &nbsp;
                            <p>456k Like</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <FaFacebookSquare></FaFacebookSquare> &nbsp;
                            <FaTwitterSquare></FaTwitterSquare> &nbsp;
                            <FaWhatsappSquare></FaWhatsappSquare> &nbsp;
                            <FaMailBulk></FaMailBulk>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookRating;