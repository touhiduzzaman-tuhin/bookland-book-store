import { faBolt, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './BookOverView.css';

const BookOverview = () => {
    return (
        <div className='row overview-area my-3'>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                <div className='d-flex'>
                    <div className='overview-box'>

                    </div>
                    <div>
                        <p>Written By</p>
                        <h5>Napoleon Rich</h5>
                    </div>
                </div>
            </div>
            <div className="col-3 col-sm-3 col-md-2 col-lg-2">
                <div>
                    <p>Publisher</p>
                    <h5>Printarea Studios</h5>
                </div>
            </div>
            <div className="col-3 col-sm-2 col-md-2 col-lg-2">
                <div>
                    <p>Year</p>
                    <h5>2019</h5>
                </div>
            </div>
            <div className="col-6 col-sm6 col-md-4 col-lg-3">
                <div className='d-flex mt-3'>
                    <FontAwesomeIcon icon={faBolt}></FontAwesomeIcon> &nbsp;
                    <h4 style={{color: '#131045'}}>FREE SHIPPING</h4>
                </div>
            </div>
            <div className="col-6 col-sm-6 col-md-2 col-lg-2">
                <div className='d-flex mt-3'>
                    <FontAwesomeIcon icon={faShieldAlt}></FontAwesomeIcon> &nbsp;
                    <h4 style={{color: '#3EB760'}}>STOCKS</h4>
                </div>
            </div>
        </div>
    );
};

export default BookOverview;