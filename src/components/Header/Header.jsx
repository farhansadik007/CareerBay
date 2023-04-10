import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header-sect'>
            <div className='logo'>
                <Link to="/"><img src="careerbay.png" alt="careerbay"/></Link>
                <Link to="/">Career Bay</Link>
            </div>
            <div className='nav-btn'>
                <Link to="/statistics">Statistics</Link>
                <Link to="/applied-jobs">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </div>
            <div className='apply-btn'>
                <button>Start Applying</button>
            </div>
        </nav>
    );
};

export default Header;