import React from 'react';
import categories from '../../fakeData/Categories';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const Category = () => {
    // console.log(categories);
    return (
        <div className='container'>
            <div className="row">
                {
                    categories.map(category => <CategoryDetails key={category.categoryId} category={category}></CategoryDetails>)
                }
            </div>
        </div>
    );
};

export default Category;