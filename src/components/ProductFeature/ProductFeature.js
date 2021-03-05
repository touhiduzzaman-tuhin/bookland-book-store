import React from 'react';
import ProductCarousel from '../ProductCarousel/ProductCarousel';

const ProductFeature = () => {
    return (
        <div className='container my-5'>
            <div align="center">
                <h3 style={{fontFamily : 'Poppins'}}>Featured Product</h3>
                <p className='my-5' style={{fontFamily : 'Open Sans'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br/> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
            </div>

            <ProductCarousel></ProductCarousel>
        </div>
    );
};

export default ProductFeature;