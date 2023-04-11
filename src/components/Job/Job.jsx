import React, { createContext } from 'react';
import './Job.css';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id, logo, Job, company, type, time, location, salary } = job;

    return (
        <div className='card'>
            <img src={logo} alt="" />
            <h4>{Job}</h4>
            <p>{company}</p>
            <div className='job-type'>
                <p>{type}</p>
                <p>{time}</p>
            </div>
            <div className='location-salary'>
                <p><img src="location.png" />{location}</p>
                <p><img src="salary.png" /> Salary: {salary}</p>
            </div>
            <Link to={`/${id}`}>
                <button>View Details</button>
            </Link>
        </div>
    );
};

export default Job;