import React from 'react';
import './Category.css';

const Category = ({ category }) => {
    return (
        <div className='category'>
            <div>
                <img src={category.img} alt="" />
            </div>
            <h4>{category.name}</h4>
            <p>{category.available} Jobs Available</p>
        </div>
    );
};

export default Category;