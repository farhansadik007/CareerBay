import React, { useEffect, useState } from 'react';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import Job from '../Job/Job';

const Home = () => {
    const categories = useLoaderData();

    const [jobs, setJobs] = useState([]);

    const [change, setChange] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
        }, []);
        
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setChange(data.slice(0, 4)))
        }, []);

    let fewJobs = jobs.slice(0, 4);
    
    return (
        <div>
            {/* banner */}
            <div className='info'>
                <div className='text'>
                    <h2>One Step <br />Closer To Your <br /><span>Dream Job</span><img src="careerbay.png" alt="" /></h2>
                    <p>Explore thousands of job opportunities with all the information you need. It's your future!Lets do it with Career Bay. Career is yours!!!</p>
                    <button>Get Started</button>
                </div>
                <div className='img'>
                    <img src="person.png" alt="" />
                </div>
            </div>
            {/* job categories  */}
            <div className='heading'>
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
            {/* featured job  */}
            <div className='heading'>
                <h2>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='jobs'>
                    {
                        change.map(job => <Job
                            key={job.id}
                            job={job}
                        ></Job>)
                    }
                </div>
            </div>
            <div className='see-all'>
                <button onClick={() => { setChange(jobs) }}>See All Jobs</button>
            </div>
        </div>
    );
};

export default Home;