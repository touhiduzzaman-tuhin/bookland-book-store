import React from 'react';
import './BookDetailsBanner.css';
import BookOverview from './BookOverview';
import BookOverviewFooter from './BookOverviewFooter';
import BookRating from './BookRating';

const BookDetailsBanner = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-2">
                    <div className="book-banner-left">

                    </div>
                </div>
                <div className="col-md-10">
                    <h3 style={{fontFamily : 'Poppins'}}>Think and Grow Rich</h3>
                    <BookRating></BookRating>
                    <BookOverview></BookOverview>

                    <p style={{fontFamily : 'Open Sans'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p style={{fontFamily : 'Open Sans'}}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                    </p>

                    <BookOverviewFooter></BookOverviewFooter>
                </div>
            </div>
        </div>
    );
};

export default BookDetailsBanner;