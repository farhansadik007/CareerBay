import React from 'react';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            {/* banner */}
            <div className='info'>
                <div className='text'>
                    <h2>One Step <br />Closer To Your <br /><span>Dream Job</span></h2>
                    <p>Explore thousands of job opportunities with all the information you need. It's your future!Lets do it!!!</p>
                    <button>Get Started</button>
                </div>
                <div className='img'>
                    <img src="person.png" alt="" />
                </div>
            </div>
            <div className='job-category'>
                    <h2>Job Category List</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    <div className='categories'>
                        {
                            categories.map(category => <Category
                            key={category.id}
                            category={category}
                            ></Category>)
                        }
                    </div>
            </div>
        </div>
    );
};

export default Home;