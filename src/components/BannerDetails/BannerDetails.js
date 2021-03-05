import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import bannerImage from '../../images/gray_background.jpg';

const BannerDetails = (props) => {
    console.log(props);
    const {bannerTitle, ownerName} = props.data;
    return (
        <div className='col-6 col-sm-6 col-md-6 col-lg-4 my-2'>
            <Card>
                <Card.Img variant="top" src={bannerImage} />
                <Card.Body>
                <Card.Title className='my-2'>{bannerTitle}</Card.Title>
                <Button variant='light'>BIOGRAPHY</Button>
                <Button variant='light'>THRILLER</Button>
                <Button variant='light'>HORROR</Button>
                <Card.Text className='text-justify mt-3 mb-4'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo qui eius voluptates atque sit fugiat eos omnis ipsa culpa nostrum.
                </Card.Text>
                <h4 className="mb-4">{ownerName}</h4>

                <div className='row'>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-7">
                        <Button variant='warning'>
                            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> &nbsp;
                            Add Cart
                        </Button>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                        <h6>$18,75</h6>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-lg-2">
                    <p style={{color : 'gray'}}><del>$25</del></p>
                    </div>
                                       
                </div>

                </Card.Body>
                {/* <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer> */}
            </Card>
        </div>
    );
};

export default BannerDetails;