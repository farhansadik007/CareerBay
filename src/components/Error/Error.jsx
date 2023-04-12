import React from 'react';
import './Error.css';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='error-page'>
            <h1>404</h1>
            <h2>PAGE NOT FOUND!</h2>
            <img src="error.gif" alt="" />
            <Link to='/'>GO HOME</Link>
        </div>
    );
};

export default Error;