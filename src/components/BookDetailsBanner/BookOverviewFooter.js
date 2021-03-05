import { faCartPlus, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const BookOverviewFooter = () => {
    const [bookCart, setBookCart] = useState(0);

    return (
        <div className='row my-5'>
            <div className="col-12 col-sm-12 col-md-4 my-2">
                <div className='d-flex justify-content-around'>
                    <h3>$15,63</h3>
                    <h6 style={{color: 'gray'}}>$16,99</h6>
                    <Button variant='danger'>2%</Button>
                </div>
            </div>
            <div align='right' className="col-12 col-sm-12 col-md-8 my-2">
                <div className=''>
                    <Button variant='success' onClick={() => setBookCart(bookCart - 1)}>
                        <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                    </Button>

                    <input className='text-center' style={{height: '38px', width : '50px', borderRadius : '5px'}} type="text" name="" value={bookCart}/>

                    <Button variant='success' onClick={() => setBookCart(bookCart + 1)}>
                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>    
                    </Button> &nbsp; &nbsp;

                    <Button variant='warning'>
                        <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> &nbsp;
                        Add to cart
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default BookOverviewFooter;