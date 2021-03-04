import React from 'react';
import './TestimonialDetails.css';

const TestimonialDetails = (props) => {
    console.log(props);
    const {description, name, star, testimonialId} = props.testimonial;
    return (
        <div className='col-md-3'>
            <div className='testimonial-area'>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                {
                    testimonialId === 1 && <img src={star} alt=""/>
                }
                {
                    (testimonialId === 2 || testimonialId === 3) && 
                    <img src={star} alt=""/>            
                }
                {
                    (testimonialId === 2 || testimonialId === 3) && 
                    <img src={star} alt=""/>            
                }
                <p className='my-5'>{description}</p>
                <div className='d-flex'>
                    <div className='testimonial-circle'>

                    </div>
                    <div>
                        <h5>{name}</h5>
                        <p>Book Lover</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialDetails;