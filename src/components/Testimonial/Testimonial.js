import React from 'react';
import testimonialData from '../../fakeData/TestimonialData';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';

const Testimonial = () => {
    // console.log(testimonialData);
    return (
        <div className="container">
            <h3 style={{fontFamily : 'Poppins', color : '#131045', marginTop : '100px'}}>Testimonials</h3>
            <p style={{fontFamily : 'Open Sans'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque <br/> illo eos reprehenderit nihil temporibus quasi.</p>

            <div className="row">
                {
                    testimonialData.map(testimonial => <TestimonialDetails key={testimonial.testimonialId} testimonial={testimonial}></TestimonialDetails>)
                }
            </div>
        </div>
    );
};

export default Testimonial;