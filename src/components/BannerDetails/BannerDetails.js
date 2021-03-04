import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import bannerImage from '../../images/gray_background.jpg';

const BannerDetails = (props) => {
    console.log(props);
    const {bannerTitle, ownerName} = props.data;
    return (
        <div className='col-md-4'>
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

                <div className='d-flex justify-content-around'>
                    <Button variant='warning'>
                        <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> &nbsp;
                        Add To Cart
                    </Button>
                    <h3>$18,75</h3>
                    <h4 style={{color : 'gray'}}><del>$25</del></h4>
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