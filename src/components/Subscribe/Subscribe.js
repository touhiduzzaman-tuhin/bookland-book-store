import React from 'react';
import { Button } from 'react-bootstrap';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <div className="subscribe-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 subscribe-right-area">
                        <h3>Subscribe our newsletter for <br/> newest books updates</h3>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center input-area">
                        <input type="email" name="email" id="" placeholder="Type Your Email Here" required/>
                        <Button variant='warning'>Subscribe</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;