import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div  className='info'>
            <div className='text'>
                <h2>One Step <br/>Closer To Your <br/><span>Dream Job</span></h2>
                <p>Explore thousands of job opportunities with all the information you need. It's your future!Lets do it!!!</p>
                <button>Get Started</button>
            </div>
            <div className='img'>
                <img src="person.png" alt="" />
            </div>
        </div>
    );
};

export default Home;