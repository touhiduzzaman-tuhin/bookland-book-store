import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import './SingleBook.css';

const SingleBook = (props) => {
    const { name } = props.book;
    return (
        <div className='col-md-12'>
            <div className="row my-3">
                <div className="col-6 col-md-5 book-left-area">

                </div>
                <div className="col-6 col-md-7">
                    <h5>{name}</h5>
                    <div>

                    </div>
                    <div className="d-flex justify-content-around">
                        <h4>$45.4</h4>
                        <h6 style={{color: 'gray'}}><del>$98.4</del></h6>
                    </div>
                    <Button variant='outline-warning'>
                        <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> &nbsp;
                        Add to card
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;