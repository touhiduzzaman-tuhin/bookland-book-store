import React from 'react';
import './CategoryDetails.css';

const CategoryDetails = (props) => {
    console.log(props);
    const {categoryImage, shortDescription, totalUser} = props.category;
    return (
        <div className='col-6 col-sm-6 col-md-4 col-lg-3'>
            <div className='category-style'>
                <img style={{height : '120px'}} className='w-50' src={categoryImage} alt=""/>
                <h4>{totalUser}</h4>
                <p>{shortDescription}</p>
            </div>
        </div>
    );
};

export default CategoryDetails;