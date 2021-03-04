import React from 'react';
import logo from '../../images/logo.png';
import {  FaFacebook, FaInstagram, FaLinkedin, FaSearchLocation, FaTwitter, FaYoutube, } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import image from '../../images/gray_background.jpg';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container">
            <div className='row'>
                <div className="col-md-6 footer-left-side">
                    <img className="w-25" src={logo} alt=""/>
                    <p>Bookland is a Book Store Ecommerce Website Template by Peterdraw lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>

                    <FaFacebook /> &nbsp; &nbsp;
                    <FaYoutube></FaYoutube> &nbsp; &nbsp;
                    <FaTwitter></FaTwitter> &nbsp; &nbsp;
                    <FaLinkedin></FaLinkedin> &nbsp; &nbsp;
                    <FaInstagram></FaInstagram>
                </div>
                <div className="col-md-6 footer-right-side">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Get in Touch With Us</h4>
                            <p>
                                <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon> &nbsp;
                                832 Thompson Drive, San Fransisco CA 94107, United States
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> &nbsp;
                                +123 345123 556
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faEnvelopeSquare}></FontAwesomeIcon> &nbsp;
                                support@bookland.id
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img className="w-100 footer-image" src={image} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row copy-right-area">
                <div className="col-md-6">
                    <small>Bookland Book Store Ecommerce Website -   © 2020 All Rights Reserved</small>
                </div>
                <div align="right" className="col-md-6">
                    <small>Made with ♥ by Peterdraw</small>
                </div>
            </div>
        </div>
    );
};

export default Footer;