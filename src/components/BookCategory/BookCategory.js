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
                    <div className="col-md-2">
                        <Link className='link-style' to='/'>Architecture</Link> <br/>
                        <Link className='link-style' to='/'>Art</Link> <br/>
                        <Link className='link-style' to='/'>Action</Link> <br/>
                        <Link className='link-style' to='/'>Biography & Autobiography</Link> <br/>
                        <Link className='link-style' to='/'>Body, Mind & Spirit</Link> <br/>
                    </div>
                    <div className="col-md-2">
                        <Link className='link-style' to='/'>Business & Economics</Link> <br/>
                        <Link className='link-style' to='/'>Children Fiction</Link> <br/>
                        <Link className='link-style' to='/'>Children Non-Fiction</Link> <br/>
                        <Link className='link-style' to='/'>Comics & Graphic Novels</Link> <br/>
                        <Link className='link-style' to='/'>Cooking</Link> <br/>
                    </div>
                    <div className="col-md-2">
                        <Link className='link-style' to='/'>Crafts & Hobbies</Link> <br/>
                        <Link className='link-style' to='/'>Design</Link> <br/>
                        <Link className='link-style' to='/'>Drama</Link> <br/>
                        <Link className='link-style' to='/'>Education</Link> <br/>
                        <Link className='link-style' to='/'>Family & Relationships</Link> <br/>
                    </div>
                    <div className="col-md-2">
                        <Link className='link-style' to='/'>Fiction</Link> <br/>
                        <Link className='link-style' to='/'>Foreign Language Study</Link> <br/>
                        <Link className='link-style' to='/'>Games</Link> <br/>
                        <Link className='link-style' to='/'>Gardening</Link> <br/>
                        <Link className='link-style' to='/'>Health & Fitness</Link> <br/>
                    </div>
                    <div className="col-md-2">
                        <Link className='link-style' to='/'>History</Link> <br/>
                        <Link className='link-style' to='/'>House & Home</Link> <br/>
                        <Link className='link-style' to='/'>Humor</Link> <br/>
                        <Link className='link-style' to='/'>Literary Collections</Link> <br/>
                        <Link className='link-style' to='/'>Mathematics</Link> <br/>
                    </div>
                    <div className="col-md-2">
                        <Link className='link-style' to='/'>Medical</Link> <br/>
                        <Link className='link-style' to='/'>Nature</Link> <br/>
                        <Link className='link-style' to='/'>Performing Arts</Link> <br/>
                        <Link className='link-style' to='/'>Pets</Link> <br/>
                        <Link className='link-style' to='/'>Show others</Link> <br/>
                    </div>
                </div>
        </div>
    );
};

export default BookCategory;