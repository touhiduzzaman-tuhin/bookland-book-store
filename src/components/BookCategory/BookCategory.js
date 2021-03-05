import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './BookCategory.css';

const BookCategory = () => {
    return (
        <div className="container book-category-style">
            <h4 className='my-3'>
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> &nbsp;
                Books Categories
            </h4>

            <div className="row">
                    <div className="col-4 col-sm-3 col-md-3 col-lg-2 my-3">
                        <Link className='link-style' to='/bookDetails'>Architecture</Link> <br/>
                        <Link className='link-style' to='/bookDetails'>Art</Link> <br/>
                        <Link className='link-style' to='/bookDetails'>Action</Link> <br/>
                        <Link className='link-style' to='/bookDetails'>Biography & Autobiography</Link> <br/>
                        <Link className='link-style' to='/bookDetails'>Body, Mind & Spirit</Link> <br/>
                    </div>
                    <div className="col-4 col-sm-3 col-md-3 col-lg-2 my-3">
                        <Link className='link-style' to='/bookDetails'>Business & Economics</Link> <br/>
                        <Link className='link-style' to='/bookDetails'>Children Fiction</Link> <br/>
                        <Link className='link-style' to='/bookDetails'>Children Non-Fiction</Link> <br/>
                        <Link className='link-style' to='/bookDetails'>Comics & Graphic Novels</Link> <br/>
                        <Link className='link-style' to='/bookDetails'>Cooking</Link> <br/>
                    </div>
                    <div className="col-4 col-sm-3 col-md-3 col-lg-2 my-3">
                        <Link className='link-style' to='/bookDetails'>Crafts & Hobbies</Link> <br/>
                        <Link className='link-style' to='/bookDetails'>Design</Link> <br/>
                        <Link className='link-style' to='/bookDetails'>Drama</Link> <br/>
                        <Link className='link-style' to='/bookDetails'>Education</Link> <br/>
                        <Link className='link-style' to='/bookDetails'>Family & Relationships</Link> <br/>
                    </div>
                    <div className="col-4 col-sm-3 col-md-3 col-lg-2 my-3">
                        <Link className='link-style' to='/bookDetails'>Fiction</Link> <br/>
                        <Link className='link-style' to='/bookDetails'>Foreign Language Study</Link> <br/>
                        <Link className='link-style' to='/bookDetails'>Games</Link> <br/>
                        <Link className='link-style' to='/bookDetails'>Gardening</Link> <br/>
                        <Link className='link-style' to='/bookDetails'>Health & Fitness</Link> <br/>
                    </div>
                    <div className="col-4 col-sm-3 col-md-3 col-lg-2 my-3">
                        <Link className='link-style' to='/bookDetails'>History</Link> <br/>
                        <Link className='link-style' to='/bookDetails'>House & Home</Link> <br/>
                        <Link className='link-style' to='/bookDetails'>Humor</Link> <br/>
                        <Link className='link-style' to='/bookDetails'>Literary Collections</Link> <br/>
                        <Link className='link-style' to='/bookDetails'>Mathematics</Link> <br/>
                    </div>
                    <div className="col-4 col-sm-3 col-md-3 col-lg-2 my-3">
                        <Link className='link-style' to='/bookDetails'>Medical</Link> <br/>
                        <Link className='link-style' to='/bookDetails'>Nature</Link> <br/>
                        <Link className='link-style' to='/bookDetails'>Performing Arts</Link> <br/>
                        <Link className='link-style' to='/bookDetails'>Pets</Link> <br/>
                        <Link className='link-style' to='/bookDetails'>Show others</Link> <br/>
                    </div>
                </div>
        </div>
    );
};

export default BookCategory;