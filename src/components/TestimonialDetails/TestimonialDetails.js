import React from 'react';

const TestimonialDetails = (props) => {
    console.log(props);
    const {description, name} = props.testimonial;
    return (
        <div className='col-md-3'>
            <div>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default TestimonialDetails;