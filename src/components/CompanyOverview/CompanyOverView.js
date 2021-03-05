import React from 'react';
import { Button } from 'react-bootstrap';
import './CompanyOverview.css';
import booksData from '../../fakeData/BooksData';
import SingleBook from '../SingleBook/SingleBook';

const CompanyOverView = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-8">
                    <table className='w-100'>
                        <tr>
                            <th>
                                <h6>Details Product</h6>
                            </th>
                            <th>
                                <h6>Customer Review</h6>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <h6>Book Title</h6>
                            </td>
                            <td>Think And Grow Rich</td>
                        </tr>
                        <tr>
                            <td>
                                <h6>Author</h6>
                            </td>
                            <td>Napoleon Rich</td>
                        </tr>
                        <tr>
                            <td>
                                <h6>ISBN</h6>
                            </td>
                            <td>121341381648 (ISBN13: 121341381648)</td>
                        </tr>
                        <tr>
                            <td>
                                <h6>Edition Language</h6>
                            </td>
                            <td>English</td>
                        </tr>
                        <tr>
                            <td>
                                <h6>Book Format</h6>
                            </td>
                            <td>Paperback, 450 Pages</td>
                        </tr>
                        <tr>
                            <td>
                                <h6>Date Publish</h6>
                            </td>
                            <td>August 10th 2019</td>
                        </tr>
                        <tr>
                            <td>
                                <h6>Publisher</h6>
                            </td>
                            <td>Wepress Inc.</td>
                        </tr>
                        <tr>
                            <td>
                                <h6>Tags</h6>
                            </td>
                            <td>
                                <Button className='m-2' variant='warning'>Drama</Button>
                                <Button className='m-2' variant='warning'>Architecture</Button>
                                <Button className='m-2' variant='warning'>Servival</Button>
                                <Button className='m-2' variant='warning'>Biology</Button>
                                <Button className='m-2' variant='warning'>Trending 2020</Button>
                                <Button className='m-2 mt-2' variant='warning'>Bestseller</Button>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="col-md-4">
                    <div>
                        <h4>Related Books</h4>
                        <div className="row">
                            {
                                booksData.map(book => <SingleBook key={book.id} book={book}></SingleBook>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyOverView;